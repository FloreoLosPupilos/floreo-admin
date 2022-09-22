import { useMemo } from "react";

//Firebase
import { deleteDoc, doc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

//Dialog
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

//Metodo para editar un servicio.
function editService(id) {
  console.log("Editar", id);
}

//Metodo para eliminar un servicio.
const deleteService = async (id) => {
  const serviceDoc = doc(FirebaseDB, "Categorias", id.category, "Servicios", id.id);

  const remove = async (id) => {
    const categoryDoc = doc(FirebaseDB, "Categorias", id.category, "Servicios", id.id);
    await deleteDoc(categoryDoc);
  }

  Swal.fire({
    title: '¿Está seguro de eliminar el servicio: ' + id.nombre +'?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      remove(id);
      Swal.fire('Servicio ' + id.nombre + ' eliminado correctamente', '', 'success');
    }
  })
}

export const useColumnsServices = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Informacion",
        accessor: "informacion",
      },
      {
        Header: "Precio",
        accessor: "precio",
        
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

              <button onClick={() => deleteService(props.row.original)} style={{}}>Eliminar</button>
            </div>
          );
        },
      },
    ],
    []
  );

  return columns;
}
