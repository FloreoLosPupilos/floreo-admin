import { Grid, TextField } from "@mui/material";
import { useRef } from "react";
import { useSelector } from 'react-redux';
import { ModalLayout } from "../layout/ModalLayout";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


export const SendEmailView = () => {
  
  const { subscribers } = useSelector( state => state.collections);


  const textInput = useRef(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const evt = new CustomEvent("closeModal");

  const onSubmit = async ({mensaje}) => {
    
    for (const usuario of subscribers) {
      let email = usuario.email;
      let name = usuario.nombre;

      let contactParams = {
        email,
        name,
        mensaje
      };

      Swal.fire({
        title: 'Quiere enviar la noticia?',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          emailjs.send('service_pvhs6qf', 'template_9ly46ds', contactParams, 'n1cKmebdl0-X4Ozh2')
          .then(error => {
            console.log(error);
          })
          reset()
          Swal.fire('Enviar correo', 'Se envió el correo de manera correcta', 'success');
          window.dispatchEvent(evt);  
        } 
      })

    }

  }



  return (
    <>
      <ModalLayout buttonText="Enviar correo" modalTitle={"Nuevo correo electrónico"} clearForm={reset}>
        <form onSubmit={handleSubmit(onSubmit)} className='animate__animated animate__fadeIn animate__faster' id="form">
          <Grid container direction='row' justifyContent='end' alignItems='center' sx={{ mb: 1 }}>

            <Grid container>
        

              <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder='Escriba el mensaje a enviar'
                label="Noticia"
                inputRef={textInput}
                sx={{ border: 'none', mb: 1, ml: 1, mr: 1 }}
                name="mensaje"
                {...register("mensaje", { required: true })}
              />
              {errors.mensaje && <span style={{ color: 'red' }}> Este campo es requerido</span>}
        
            </Grid>
          </Grid>
        </form>
      </ModalLayout>
    </>
  );
}