import { useMemo } from "react";

//Metodo para ver los servicios de la categoria.
function viewCategory(id) {
  console.log("Ver", id);
}

//Metodo para editar una categoria.
function editCategory(id) {
  console.log("Editar", id);
}

//Metodo para eliminar una categoria.
function deleteCategory(id) {
  console.log("Eliminar", id);
}

export const useColumnsCategories = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        //actions
        Header: "Acciones",
        accessor: "acciones",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => viewCategory(props.row.original)}>
                <button style={{}}>Ver</button>
              </span>
              <span onClick={() => editCategory(props.row.original)}>
                <button style={{}}>Editar</button>
              </span>
              <span onClick={() => deleteCategory(props.row.original)}>
                <button style={{}}>Eliminar</button>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  return columns;
}
