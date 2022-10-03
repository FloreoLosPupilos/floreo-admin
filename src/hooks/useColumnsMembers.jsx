import { useMemo } from "react";

//Firebase
import { doc, deleteDoc, updateDoc, collection } from "firebase/firestore/lite";
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
import { useDispatch } from "react-redux";
import { startLoadingMembers } from "../store/collections/thunks";

//Metodo para editar un miembro.
function editMember(id) {
  console.log("Editar", id);
};

//Metodo para eliminar un miembro.
const deleteMember = async (data, dispatch) => {

  const remove = async (id) => {
    const memberDoc = doc(FirebaseDB, "Integrantes", id);
    await deleteDoc(memberDoc);
    dispatch(startLoadingMembers());
  }

  Swal.fire({
    title: '¿Está seguro de eliminar el integrante: ' + data.nombre + '?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      remove(data.id);
      Swal.fire('Integrante ' + data.nombre + ' eliminado correctamente', '', 'success');
    }
  })
}

export const useColumnsMembers = () => {
  const dispatch = useDispatch();

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
          return (
            <div>
              <span>
                <EditMemberModalView data={props.row.original} dis={dispatch} />
                <IconButton onClick={() => deleteMember(props.row.original, dispatch)}><DeleteIcon style={{ fill: "#E00000" }} /></IconButton>
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
