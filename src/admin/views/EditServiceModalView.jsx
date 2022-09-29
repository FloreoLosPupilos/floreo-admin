import { ModalEditLayout } from "../layout/ModalEditLayout";
import { useForm } from "react-hook-form";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { fileUpload, setCollectionDataCustomId } from "../../helpers";
import { useRef } from "react";
import { useSelector } from "react-redux";
import uploadIcon from "../../assets/uploadIcon.png"
import Swal from 'sweetalert2';

export const EditServiceModalView = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { isSaving, images } = useSelector(state => state);
  
    const fileInputRef = useRef();
    const imageRef = useRef();
  
    const evt = new CustomEvent("closeModal");
  
    const onSubmit = async ({ name, info, price }) => {
      console.log(props)
      setCollectionDataCustomId('Categorias/'+ props.data.categoryID + '/Servicios', { nombre: name, informacion: info, precio: price }, props.data.id)

      window.dispatchEvent(evt);
      Swal.fire('Servicio Modificado', 'Se actualizó correctamente el Servicio', 'success');
    }
  
    return (
      <>
        <ModalEditLayout buttonText='Editar' modalTitle='Editar Servicio'>
          <form onSubmit={handleSubmit(onSubmit)} className='animate__animated animate__fadeIn animate__faster' id="form">
            <Grid container direction='row' justifyContent='end' alignItems='center' sx={{ mb: 1 }}>
              <Grid container>
                <TextField
                  defaultValue={props.data.nombre}
                  type="text"
                  variant="filled"
                  fullWidth
                  sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                  {...register("name", { required: true })}
                />
                <TextField
                  defaultValue={props.data.informacion}
                  type="text"
                  variant="filled"
                  fullWidth
                  sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                  {...register("info", { required: true })}
                />
                <TextField
                  defaultValue={props.data.precio}
                  type="text"
                  variant="filled"
                  fullWidth
                  sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                  {...register("price", { required: true })}
                />
                {errors.name && <span style={{ color: 'red' }}> Este campo es requerido</span>}
              </Grid>
            </Grid>

          </form>
        </ModalEditLayout>
      </>
    );
  }