import { useMemo } from "react";
import { Link } from 'react-router-dom';

//Firebase
import { deleteDoc, doc, collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

//Modal de editar
import { EditCategoryModalView } from "../admin/views/EditCategoryModalView";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

//Dialog
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingCategories, startLoadingCustomServices } from "../store/collections/thunks";


//Metodo para ver los servicios de la categoria.
function viewCategory(id, services, dispatch) {
  dispatch(startLoadingCustomServices(id.id, services));
}

//Metodo para editar una categoria.
function editCategory(id) {
  console.log("Editar", id);
}

//Metodo para eliminar una categoria.
const deleteCategory = (data, services, dispatch) => {
  let dataSize = 0;
  services.forEach(element => {
    if (element.categoria == data.id)
      dataSize++;
  });

  const remove = async (id) => {
    const categoryDoc = doc(FirebaseDB, "Categorias", id);
    await deleteDoc(categoryDoc);
    dispatch(startLoadingCategories());
  }

  if (dataSize == 0) {
    Swal.fire({
      title: '¿Está seguro de eliminar la categoria: ' + data.nombre + '?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        remove(data.id);
        Swal.fire('Categoria ' + data.nombre + ' eliminada correctamente', '', 'success');
      }
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Esta categoria cuenta con ' + dataSize + ' subservicios, asegurese de eliminarlos primero',
    })
  }

}
export const useColumnsCategories = () => {
  const dispatch = useDispatch();
  const services = useSelector(state => state.collections.services);

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
          return (
            <div>
              <span>
                <Link to={'/servicios'} state={props.row.original}>
                  <IconButton onClick={() => viewCategory(props.row.original, services, dispatch)}><VisibilityRoundedIcon style={{ fill: "#0000E0" }} /></IconButton>
                </Link>
                <EditCategoryModalView data={props.row.original} dis={dispatch} />
                <IconButton onClick={() => deleteCategory(props.row.original, services, dispatch)}><DeleteIcon style={{ fill: "#E00000" }} /></IconButton>
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
