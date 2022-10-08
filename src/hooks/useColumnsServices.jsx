import { useMemo } from "react";
import { deleteCustomServices, startLoadingCustomServices, startLoadingServices } from "../store/collections/thunks";
import { useDispatch, useSelector } from "react-redux";

//Firebase
import { deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

//Modal
import { EditServiceModalView } from "../admin/views/EditServiceModalView";

//Dialog&Icons
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

//Metodo para editar un servicio.
function editService(id) {
  console.log("Editar", id);
}

//Metodo para eliminar un servicio.
const deleteService = (data, services, dispatch) => {
  const remove = async (id) => {
    const serviceDoc = doc(FirebaseDB, "Servicios", id);
    await deleteDoc(serviceDoc);
    dispatch(startLoadingServices());
    dispatch(deleteCustomServices(data.id));
  }
  Swal.fire({
    title: '¿Está seguro de eliminar el servicio: ' + data.nombre + '?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      remove(data.id);
      Swal.fire('Servicio ' + data.nombre + ' eliminado correctamente', '', 'success');
    }
  })
}

export const useColumnsServices = () => {
  const dispatch = useDispatch();
  const services = useSelector(state => state.collections.services);
  const customServices = useSelector(state => state.collections.customServices);
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
        Header: "Acciones",
        accessor: "acciones",
        Cell: (props) => {
          return (
            <div>
              <span>
                <EditServiceModalView data={props.row.original} dis={dispatch} services={customServices} />
                <IconButton onClick={() => deleteService(props.row.original, services, dispatch)}><DeleteIcon style={{ fill: "#E00000" }} /></IconButton>
              </span>
            </div>
          );
        },
      },
    ],
    [services]
  );

  return columns;
}
