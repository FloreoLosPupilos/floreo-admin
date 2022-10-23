import { useMemo } from "react";
import { useDispatch } from "react-redux";

//Modal de editar
import { OrderModalView } from "../admin/views/OrderModalView";

//Dialog
import 'sweetalert2/dist/sweetalert2.css';

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
        Header: "Fecha De Evento",
        accessor: "fecha",
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
