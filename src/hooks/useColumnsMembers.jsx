import { useMemo } from "react";

//Firebase
import { doc, deleteDoc, updateDoc, collection} from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { isAsyncThunkAction } from "@reduxjs/toolkit";

//Modal de editar
import { EditMemberModalView } from "../admin/views/EditMemberModalView";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

//Dialog
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { IconButton } from "@mui/material";

//Metodo para editar un miembro.
function editMember(id) {
  console.log("Editar", id);
};

//Metodo para eliminar un miembro.
const deleteMember = async (id) => {

  const remove = async (id) => {
    const memberDoc = doc(FirebaseDB, "Integrantes", id.id);
    await deleteDoc(memberDoc);
  }
  
  Swal.fire({
    title: '¿Está seguro de eliminar el integrante: ' + id.nombre + '?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      remove(id);
      Swal.fire('Integrante ' + id.nombre + ' eliminado correctamente', '', 'success');
    }
  })
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
              
              <IconButton onClick={() => deleteMember(props.row.original)} style={{}}><DeleteIcon /></IconButton>
            </div>
          );
        },
      },
    ],
    []
  );

  return columns;
}
