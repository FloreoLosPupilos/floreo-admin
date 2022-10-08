import { ModalLayout } from "../layout/ModalLayout";
import { useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import { setServicesData } from "../../helpers";
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AddServiceModalView = (props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const evt = new CustomEvent("closeModal");

  const onSubmit = async ({ name, information, price }) => {
    await setServicesData('Servicios', { nombre: name, informacion: information, precio: price, categoria: props.id }, props.dis)
    reset();
    window.dispatchEvent(evt);
    Swal.fire('Servicio creado', 'Se guardo correctamente el nuevo servicio', 'success');
  }

  return (
    <>
      <ModalLayout buttonText='Agregar Servicio' modalTitle='Nuevo Servicio' clearForm={reset}>
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
