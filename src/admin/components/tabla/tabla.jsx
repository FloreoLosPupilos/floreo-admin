import 'regenerator-runtime/runtime'
import React, { useState, useMemo } from 'react';
import { useSelector } from "react-redux";
import "./styles.css";

//Icons
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { IconButton } from '@mui/material';

//Paginacion & Filtro
import { useTable, usePagination, useGlobalFilter, useAsyncDebounce } from "react-table";

//Componentes que retornan la informacion de las columnas
import { useColumnsCategories, useColumnsMembers, useColumnsServices, useColumnsSubcribers, useColumnsOrders } from '../../../hooks';



//Carga las imagenes en la tabla
function imgDataLoader(cell) {
  if (cell.column.Header == "") {
    const imgSrc = cell.row.original.img;
    cell.row.values.img = ""
    return (
      <img src={imgSrc} width='100px'></img>
    )
  }
}

//Filtro de busqueda
function Filter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);

  const onFilterChange = useAsyncDebounce(
    (value) => setGlobalFilter(value || undefined),
    200
  );

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <span style={{ backgroundColor: "white" }}>
      <input
        size={40}
        value={value || ""}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
    </span>
  );
}

//Asignar los valores que va a tener la columna dependiedo de la colleccion que se pida.
function getColumsData(collection, subcollection) {
  if (subcollection) {
    return (useColumnsServices());
  } else if (collection == "Categorias") {
    return (useColumnsCategories());
  } else if (collection == "Integrantes") {
    return (useColumnsMembers());
  } else if (collection == "Suscriptores") {
    return (useColumnsSubcribers());
  } else if (collection == "Pedidos") {
    return (useColumnsOrders());
  } else {
    return ("Error");
  }
}

//Componente Tabla
export const Tabla = (props) => {
  let collection = [];

  if (props.subCollection) {
    collection = useSelector(state => state.collections.customServices);
  } else if (props.collection == "Categorias") {
    collection = useSelector(state => state.collections.categories);
  } else if (props.collection == "Integrantes") {
    collection = useSelector(state => state.collections.members);
  } else if (props.collection == "Suscriptores") {
    collection = useSelector(state => state.collections.subscribers);
  } else if (props.collection == "Pedidos") {
    collection = useSelector(state => state.collections.orders);
  }

  //Columnas
  const columns = getColumsData(props.collection, props.subCollection);


  //Datos de las filas
  const data = useMemo(
    () =>
      collection
  );

  const table = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 5,
        pageIndex: 0
      }
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { globalFilter, pageIndex, pageSize }
  } = table;

  return (
    <div className="container" style={{ paddingTop: 0 }}>
      <div className='search' style={{ margin: "0px" }}>
        <Filter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th className='colums'{...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td data={cell.column.Header} {...cell.getCellProps()}>

                          <div>
                            {

                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </div>
                          {imgDataLoader(cell)}

                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className="pagination">
        <span>
          Página&nbsp;
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{" "}
        </span>
        <div>
          <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <FirstPageIcon />
          </IconButton>{" "}
          <IconButton onClick={() => previousPage()} disabled={!canPreviousPage}>
            Atrás
          </IconButton>{" "}
          <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
            Siguiente
          </IconButton>{" "}
          <IconButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <LastPageIcon />
          </IconButton>{" "}
        </div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize !== 15 ? `Mostrar ${pageSize}` : `Mostrar todo`}
            </option>

          ))}
        </select>

      </div>
    </div>
  );
}