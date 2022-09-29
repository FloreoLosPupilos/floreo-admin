import { ModalLayout } from "../layout/ModalLayout";
import { useForm } from "react-hook-form";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { fileUpload, setService } from "../../helpers";
import { useRef } from "react";
import { useSelector } from "react-redux";
import {useLocation} from 'react-router-dom';
import uploadIcon from "../../assets/uploadIcon.png"
import Swal from 'sweetalert2';

export const AddServiceModalView = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const location = useLocation();

  const evt = new CustomEvent("closeModal");

  const onSubmit = async ({ name, information, price}) => {
    setService('Categorias', { nombre: name, informacion: information, precio: price }, location.state.nombre)

    window.dispatchEvent(evt);
    Swal.fire('Servicio creado', 'Se guardo correctamente el nuevo servicio', 'success');
  }

  return (
    <>
      <ModalLayout buttonText='Agregar Servicio' modalTitle='Nuevo Servicio'>
        <form onSubmit={handleSubmit(onSubmit)} className='animate__animated animate__fadeIn animate__faster' id='form'>
          <Grid container direction='row' justifyContent='end' alignItems='center' sx={{ mb: 1 }}>
            <Grid container>
              <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder='Ingrese el nombre'
                label="Nombre"
                sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                {...register("name", { required: true })}
              />
              {errors.name && <span style={{ color: 'red' }}> Este campo es requerido</span>}
            </Grid>
          </Grid>

          <Grid container>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              placeholder=''
              label="Información"
              sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
              {...register("information", { required: true })}
            />
            {errors.name && <span style={{ color: 'red' }}> Este campo es requerido</span>}
          </Grid>

          <Grid container>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              placeholder='Ingrese el precio'
              label="Precio"
              sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
              {...register("price", { required: true })}
            />
            {errors.name && <span style={{ color: 'red' }}> Este campo es requerido</span>}
          </Grid>

        </form>
      </ModalLayout>
    </>
  );
}
