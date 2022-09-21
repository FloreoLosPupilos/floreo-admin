import { useMemo } from "react";
import { doc, deleteDoc, updateDoc, collection} from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

//Metodo para editar un miembro.
function editMember(id) {
  console.log("Editar", id);
  
};

//Metodo para eliminar un miembro.
const deleteMember = async (id) => {
  console.log(id)
  const memberDoc = doc(FirebaseDB, "Integrantes", id.id);
  await deleteDoc(memberDoc);
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
