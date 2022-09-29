import { ModalEditLayout } from "../layout/ModalEditLayout";
import { useForm } from "react-hook-form";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { fileUpload, setCollectionDataCustomId } from "../../helpers";
import { useRef } from "react";
import { useSelector } from "react-redux";
import uploadIcon from "../../assets/uploadIcon.png"
import Swal from 'sweetalert2';

export const EditMemberModalView = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { isSaving, images } = useSelector(state => state);
  
    const fileInputRef = useRef();
    const imageRef = useRef();
  
    let memberImage = props.data.img;
    const evt = new CustomEvent("closeModal");
  
    const onSubmit = async ({ name, contact, phone }) => {
      if (memberImage != props.data.img) {
        const [pathStorage, url] = await fileUpload(memberImage, 'member');
        setCollectionDataCustomId('Integrantes', { nombre: name, contacto: contact, telefono: phone, img: url }, props.data.id)
  
        window.dispatchEvent(evt);
        Swal.fire('Integrante Modificado', 'Se actualizó correctamente el integrante', 'success');
      }else{
        setCollectionDataCustomId('Integrantes', { nombre: name, contacto: contact, telefono: phone, img: props.data.img }, props.data.id)
  
        window.dispatchEvent(evt);
        Swal.fire('Integrante Modificado', 'Se actualizó correctamente el integrante', 'success');
      }
    }
  
    const onFileInputChange = ({ target }) => {
      if (target.files === 0) return;
  
      const [file] = target.files
      memberImage = target.files[0];
      if (file) imageRef.current.src = URL.createObjectURL(file)
    };
  
    return (
      <>
        <ModalEditLayout buttonText='Editar' modalTitle='Editar Integrante'>
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
                  defaultValue={props.data.contacto}
                  type="text"
                  variant="filled"
                  fullWidth
                  sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                  {...register("contact", { required: true })}
                />
                <TextField
                  defaultValue={props.data.telefono}
                  type="text"
                  variant="filled"
                  fullWidth
                  sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                  {...register("phone", { required: true })}
                />
                {errors.name && <span style={{ color: 'red' }}> Este campo es requerido</span>}
              </Grid>
            </Grid>
  
            <Grid item>
              <Typography style={{ width: '85%', display: 'inline' }} id="modal-modal-title" variant="subtitle1" component="h2">
                Imagen del integrante
              </Typography>
  
              <IconButton
                style={{ marginLeft: '30%' }}
                color="primary"
                disabled={isSaving}
                onClick={() => fileInputRef.current.click()}
              >
                <UploadOutlined />
              </IconButton>
  
              <input
                type='file'
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{ display: 'none' }}
              />
  
  
              <div className="flexbox-center">
                <img src={props.data.img} ref={imageRef} style={{ maxWidth: '50%', maxHeight: '50%', marginLeft: '25%' }} />
              </div>
            </Grid>
          </form>
        </ModalEditLayout>
      </>
    );
  }