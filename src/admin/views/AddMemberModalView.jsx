import { UploadOutlined } from "@mui/icons-material";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { useSelector } from 'react-redux';
import { fileUpload, setMembersData } from "../../helpers";
import { ModalLayout } from "../layout/ModalLayout";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

export const AddMemberModalView = (props) => {
  const fileInputRef = useRef();
  const imageRef = useRef();
  const textInput = useRef(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const newUser = 'https://github.com/kwalsh15/floreo-admin/blob/main/src/assets/newUser.png?raw=true';

  const evt = new CustomEvent("closeModal");

  const onSubmit = async ({ name, email, phone }) => {
    if (!memberImage) return
    const [pathStorage, url] = await fileUpload(memberImage, 'members');
    setMembersData('Integrantes', { nombre: name, contacto: email, telefono: phone, img: url },props.dis)
    textInput.current.value = "";
    reset()

    window.dispatchEvent(evt);
    Swal.fire('Integrante creado', 'Se guardo correctamente el nuevo integrante', 'success');
  }

  const { isSaving, images } = useSelector(state => state.carrusel);

  let memberImage = null

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    const [file] = target.files
    memberImage = target.files[0];
    if (file) imageRef.current.src = URL.createObjectURL(file)
  };

  return (
    <>
      <ModalLayout buttonText="Agregar Integrante" modalTitle={"Nuevo Integrante"} clearForm={reset}>
        <form onSubmit={handleSubmit(onSubmit)} className='animate__animated animate__fadeIn animate__faster' id="form">
          <Grid container direction='row' justifyContent='end' alignItems='center' sx={{ mb: 1 }}>

            <Grid container>
              <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder='Ingrese el nombre'
                label="Nombre"
                inputRef={textInput}
                sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                {...register("name", { required: true })}
              />
              {errors.name && <span style={{ color: 'red' }}> Este campo es requerido</span>}

              <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder='Ingrese el contacto'
                label="Contacto"
                inputRef={textInput}
                sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                {...register("email", { required: true })}
              />
              {errors.email && <span style={{ color: 'red' }}> Este campo es requerido</span>}

              <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder='Ingrese el número de teléfono'
                label="Teléfono"
                inputRef={textInput}
                sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                name="Teléfono"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span style={{ color: 'red' }}> Este campo es requerido</span>}
            </Grid>

            <Typography style={{ width: "85%" }} id="modal-modal-title" variant="subtitle1" component="h2">
              Foto
          </Typography>

            <input
              type='file'
              ref={fileInputRef}
              onChange={onFileInputChange}
              style={{ display: 'none' }}
            />

            <IconButton
              color="primary"
              disabled={isSaving}
              onClick={() => fileInputRef.current.click()}
            >
              <UploadOutlined />
            </IconButton>
            <input
              type='file'
              style={{ display: 'none' }}
            />


            <div className="flexbox-center">
              <img src={newUser} ref={imageRef} style={{ maxWidth: '50%', maxHeight: '50%', marginLeft: '23%' }} />
            </div>

          </Grid>
        </form>
      </ModalLayout>
    </>
  );
}
