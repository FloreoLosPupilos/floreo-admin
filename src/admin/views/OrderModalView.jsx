import { ModalOrderLayout } from "../layout/ModalOrderLayout";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Swal from 'sweetalert2';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { updateOrderState } from "../../helpers";
import '../views/styles.css'

export const OrderModalView = (props) => {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const position = props.data.ubicacion;

  const evt = new CustomEvent("closeModal");

  const accpetOrder = async () => {
    Swal.fire({
      customClass: {
        container: 'my-swal',

      },
      title: '¿Está seguro de aceptar este pedido?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Este pedido se ha aceptado correctmente', '', 'success');
        updateOrderState('Pedidos', props.data, 'aceptado', props.dis)
        window.dispatchEvent(evt);
      }
    })
  }

  const rejectOrder = async () => {
    Swal.fire({
      title: '¿Está seguro de rechazar este pedido?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,

    }).then((result) => {
      if (result.isConfirmed) {
        target: document.getElementById('MuiBox-root css-dno1e2'),
          updateOrderState('Pedidos', props.data, 'rechazado', props.dis)
        Swal.fire('Este pedido se ha rechazado correctmente', '', 'success');
        window.dispatchEvent(evt);

      }
    })
  }

  return (
    <>
      <ModalOrderLayout modalTitle='Pedido'>
        <div>
          <Card style={{ width: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, fontWeight: '999' }} color="black" gutterBottom>
                Cliente
              </Typography>
              <Typography variant="body2">
                Nombre: {props.data.nombre}
                <br />
                Teléfono: {props.data.telefono}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <br />
        <div>
          <Typography style={{ fontSize: '14', width: '100%', display: 'inline', fontWeight: '999' }} component="h2" color="text.primary" >
            Ubicación
          </Typography>
          <MapContainer
            center={position}
            zoom={14}
            style={{ height: '35vh', width: '100%' }}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup >
                Ubicación
              </Popup>
            </Marker>
          </MapContainer>

          <Card style={{ width: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, fontWeight: '999' }} color="black" gutterBottom>
                Dirección
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.data.distrito}, {props.data.canton}, {props.data.provincia}.
              </Typography>

              <Typography variant="body2">
                {props.data.direccion}
              </Typography>
              <br />
              <Typography sx={{ fontWeight: '999', float: 'right' }} display="inline">
                Fecha: {props.data.fecha}, Hora: {props.data.hora}
              </Typography>
            </CardContent>
          </Card>
          <br />
          <Card style={{ width: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14, fontWeight: '999' }} color="black" gutterBottom>
                Servicios
              </Typography>


              <ol>
                {props.data.servicios.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ol>

              <Typography sx={{ fontWeight: '999', float: 'right' }} display="inline">
                Método de pago: {props.data.pago}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <hr style={{ height: '4.5px', backgroundColor: 'black' }} />
        <div>
          <Typography display="inline" sx={{ fontSize: 28, fontWeight: '999' }} color="text.primary" gutterBottom>
            Total:
          </Typography>
          <Typography sx={{ fontSize: 28, float: 'right', fontWeight: '600' }} variant="body2">
            ₡{props.data.total}
          </Typography>
        </div>
        {
          (() => {
            if (props.data.estado != 'rechazado' && props.data.estado != 'aceptado') {
              return (
                <div>
                  <Button onClick={() => accpetOrder()}
                    color='primary'
                    sx={{
                      fontSize: 14, float: 'right', marginLeft: '40px',
                      ':hover': {
                        bgcolor: '#90EE90', // theme.palette.primary.main
                        color: 'primary',
                      },
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ fontSize: 35, mr: 1, fill: 'green' }} />
                    Aceptar
                  </Button>
                  <Button onClick={() => rejectOrder()}
                    color='primary'
                    sx={{
                      fontSize: 14, float: 'right', borderRadius: '10px', border: 'black', ':hover': {
                        bgcolor: '#FFCCCB', // theme.palette.primary.main
                        color: 'primary',
                      }
                    }}
                  >
                    <HighlightOffIcon sx={{ fontSize: 35, mr: 1, fill: 'red' }} />
                    Rechazar
                  </Button>
                </div>
              )
            } else {

              if (props.data.estado == 'rechazado') {
                return (<div>
                  <Typography display="inline" sx={{ color: 'red', float: 'right', fontSize: 28, fontWeight: '999' }} color="text.primary" gutterBottom>
                    Rechazado
                  </Typography>
                </div>)
              } else {
                return (<div>
                  <Typography display="inline" sx={{ color: 'green', float: 'right', fontSize: 28, fontWeight: '999' }} color="text.primary" gutterBottom>
                    Aceptado
                  </Typography>
                </div>)
              }
            }
          })()
        }
      </ModalOrderLayout>
    </>
  );
}
