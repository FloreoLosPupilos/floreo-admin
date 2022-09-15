import { useMemo } from "react";

//Metodo para editar una categoria.
function editMember(id) {
  console.log("Editar", id);
}

//Metodo para eliminar una categoria.
function deleteMember(id) {
  console.log("Eliminar", id);
}
export const useColumnsMembers = () => {
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "img",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Contacto",
        accessor: "contacto",
      },
      {
        Header: "Telefono",
        accessor: "telefono",
      },
      {
        //actions
        Header: "Acciones",
        accessor: "acciones",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => editMember(props.row.original)}>
                <button style={{}}>Editar</button>
              </span>
              <span onClick={() => deleteMember(props.row.original)}>
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
