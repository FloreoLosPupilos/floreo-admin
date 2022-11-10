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

    Swal.fire({
      title: 'Quiere enviar la noticia?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        
        window.dispatchEvent(evt);
        reset()
        
        for (const usuario of subscribers) {
          let email = usuario.email;
          let name = usuario.nombre;
    
          let contactParams = {
            email,
            name,
            mensaje
          };
    
          emailjs.send('service_tl4y7x1', 'template_xohtm7j', contactParams, 'IkPc0rhAMN8c_tfBB')
          .then((result) => {
            // Swal.fire('Enviar correo', 'Se envió el correo de manera correcta', 'success');
          }, (error) => {
            Swal.fire('Error', 'No se envió el correo de manera correcta', 'error');
            console.log(error); 
          })
        }
        Swal.fire('Enviar correo', 'Se envió el correo de manera correcta', 'success');
      } 
    })
    

  }



  return (
    <>
      <ModalLayout buttonText="Enviar correo" modalTitle={"Nuevo correo electrónico"} clearForm={reset}  mensaje="Enviar">
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
