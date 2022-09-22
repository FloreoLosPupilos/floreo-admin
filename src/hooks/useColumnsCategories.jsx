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


//Metodo para ver los servicios de la categoria.
function viewCategory(id) {
  console.log("Ver", id);
}

//Metodo para editar una categoria.
function editCategory(id) {
  console.log("Editar", id);
}

//Metodo para eliminar una categoria.
const deleteCategory = async (id) => {
  const docCollection = collection(FirebaseDB, 'Categorias', id, 'Servicios');
  const data = await getDocs(docCollection);
  const dataSize = data.docs.length;

  const remove = async (id) => {
    const categoryDoc = doc(FirebaseDB, "Categorias", id);
    await deleteDoc(categoryDoc);
  }

  if (dataSize == 0) {
    Swal.fire({
      title: '¿Está seguro de eliminar la categoria: ' + id + '?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        remove(id);
        Swal.fire('Categoria ' + id + ' eliminada correctamente', '', 'success');
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
              <span>
                <Link to={'/servicios'} state={props.row.original}>
                  <IconButton onClick={() => viewCategory(props.row.original)} style={{}}><VisibilityRoundedIcon /></IconButton>
                </Link>
              </span>
              <span>
                <EditCategoryModalView data={props.row.original} />
              </span>
              <IconButton onClick={() => deleteCategory(props.row.original.id)} style={{}}><DeleteIcon /></IconButton>
            </div>
          );
        },
      },
    ],
    []
  );

  return columns;
}
