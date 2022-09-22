import { ModalEditLayout } from "../layout/ModalEditLayout";
import { useForm } from "react-hook-form";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { fileUpload, setCollectionDataCustomId } from "../../helpers";
import { useRef } from "react";
import { useSelector } from "react-redux";
import uploadIcon from "../../assets/uploadIcon.png"
import Swal from 'sweetalert2';


export const EditCategoryModalView = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { isSaving, images } = useSelector(state => state);

  const fileInputRef = useRef();
  const imageRef = useRef();

  let categoryImage = props.data.img;
  const evt = new CustomEvent("closeModal");

  const onSubmit = async ({ name }) => {
    if (categoryImage != props.data.img) {
      const [pathStorage, url] = await fileUpload(categoryImage, 'category');
      setCollectionDataCustomId('Categorias', { nombre: name, img: url }, props.data.id)

      window.dispatchEvent(evt);
      Swal.fire('Categoria Modificada', 'Se actualizó correctamente la categoria', 'success');
    }else{
      setCollectionDataCustomId('Categorias', { nombre: name, img: props.data.img }, props.data.id)

      window.dispatchEvent(evt);
      Swal.fire('Categoria Modificada', 'Se actualizó correctamente la categoria', 'success');
    }
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    const [file] = target.files
    categoryImage = target.files[0];
    if (file) imageRef.current.src = URL.createObjectURL(file)
  };

  return (
    <>
      <ModalEditLayout buttonText='Editar' modalTitle='Editar Categoria'>
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
              {errors.name && <span style={{ color: 'red' }}> Este campo es requerido</span>}
            </Grid>
          </Grid>

          <Grid item>
            <Typography style={{ width: '85%', display: 'inline' }} id="modal-modal-title" variant="subtitle1" component="h2">
              Imagen de la categoria
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
