import { useMemo } from "react";

//Metodo para editar una categoria.
function editService(id) {
  console.log("Editar", id);
}

//Metodo para eliminar una categoria.
function deleteService(id) {
  console.log("Eliminar", id);
}

export const useColumnsServices = () => {
  const columns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Username",
        accessor: "username",
      },

      {
        //actions
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          console.log(props.row.original.nombre);
          return (
            <div>
              <span onClick={() => editService(props.row.original)}>
              <button style={{}}>Editar</button>
              </span>

              <span onClick={() => deleteService(rowIdx)}>
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
