import { useMemo } from "react";
import { Link } from 'react-router-dom';

//Firebase
import { deleteDoc, doc, collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

//Modal de editar
import { OrderModalView } from "../admin/views/OrderModalView";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

//Dialog
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingCategories, startLoadingCustomServices } from "../store/collections/thunks";


//Metodo para ver los pedidos.
function viewOrders(id, services, dispatch) {
}

//Metodo para editar una categoria.
function editCategory(id) {
  console.log("Editar", id);
}


export const useColumnsOrders = () => {
  const dispatch = useDispatch();

  const columns = useMemo(
    () => [
      {
        Header: "Cliente",
        accessor: "nombre",
      },
      {
        Header: "Teléfono",
        accessor: "telefono",
      },
      {
        Header: "Estado",
        accessor: "estado",
        Cell: (props) => {
          return (
            <span>
              {
                (() => {
                  if (props.row.original.estado == 'pendiente') {
                    return (
                      <b style={{ color: 'orange', fontweight: 'bold' }}>Pendiente</b>
                    )

                  } else if (props.row.original.estado == 'aceptado') {
                    return (
                      <b style={{ color: 'green', fontweight: 'bold' }}>Aceptado</b>
                    )
                  } else {
                    return (
                      <b style={{ color: 'red', fontweight: 'bold' }}>Rechazado</b>
                    )
                  }
                })()
              }
            </span>
          )
        },
      },
      {
        //actions
        Header: "Acciones",
        accessor: "acciones",
        Cell: (props) => {
          return (
            <div>
              <span>
                <OrderModalView data={props.row.original} dis={dispatch} />
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
