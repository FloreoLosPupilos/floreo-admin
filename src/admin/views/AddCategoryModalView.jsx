import { ModalLayout } from "../layout/ModalLayout";
import { useForm } from "react-hook-form";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { fileUpload, setCollectionDataCustomId } from "../../helpers";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';

export const AddCategoryModalView = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { isSaving, images } = useSelector(state => state.carrusel);

  const fileInputRef = useRef();
  const imageRef = useRef();

  const uploadIcon = 'https://github.com/kwalsh15/floreo-admin/blob/main/src/assets/uploadIcon.png?raw=true';

  let categoryImage = null
  const evt = new CustomEvent("closeModal");

  const onSubmit = async ({ name }) => {
    if (!categoryImage) return
    const [pathStorage, url] = await fileUpload(categoryImage, 'category');
    setCollectionDataCustomId('Categorias', {  nombre: name, img: url  }, name)
    reset()

    window.dispatchEvent(evt);
    Swal.fire('Categoria creada', 'Se guardo correctamente la categoria', 'success');
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    const [file] = target.files
    categoryImage = target.files[0];
    if (file) imageRef.current.src = URL.createObjectURL(file)
  };

  return (
    <>
      <ModalLayout buttonText='Agregar Categoría' modalTitle='Nueva Categoría' clearForm={reset}>
        <form onSubmit={handleSubmit(onSubmit)} className='animate__animated animate__fadeIn animate__faster' id="form">
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

          <Grid item>
            <Typography style={{ width: '85%', display: 'inline' }} id="modal-modal-title" variant="subtitle1" component="h2">
              Imagen de la categoría
          </Typography>

            <IconButton
              style={{ marginLeft: '38%' }}
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
              <img src={uploadIcon} ref={imageRef} style={{ maxWidth: '50%', maxHeight: '50%', marginLeft: '25%' }} />
            </div>
          </Grid>
        </form>
      </ModalLayout>
    </>
  );
}
