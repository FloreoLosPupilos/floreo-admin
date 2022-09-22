import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField    , Typography } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { setActiveInfo } from '../../store/about/aboutSlice';
import { Title } from './Title';
import { startSavingSection } from '../../store/about/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


export const AboutView = () => {

    const dispatch = useDispatch();
    const { active: aboutInformation, messageSaved, isSaving } = useSelector( state => state.section);

    const { Nombre, Telefono, Facebook, Instagram, onInputChange, formState } = useForm( aboutInformation );
    
    useEffect(() => {
        dispatch( setActiveInfo(formState) ); 
    }, [formState])
    
    const onSaveSection = () => {
        Swal.fire({
            title: 'Quiere actualizar la información?',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Actualizar información', messageSaved, 'success');
                dispatch( startSavingSection() );
            }
          })
    };

    
    
    return (
        <Grid container direction='row' justifyContent='end'  alignItems='center' sx={{mb: 1}}>
            <Title title='About' />
            <Grid 
                container
                sx={{
                    margin: '50px', 
                    marginLeft: '20px'                   
                }}
            >   
                <Typography sx={{textAlign: 'justify'}}>Nombre de la Empresa:</Typography>
                <TextField 
                    type="text"
                    variant="outlined"
                    fullWidth
                    sx={{ border: 'none', mb: 1, mr: 1}}
                    name="Nombre"
                    value={Nombre}
                    onChange={ onInputChange }
                />
                <Typography sx={{textAlign: 'justify'}}>Ingrese el link de facebook:</Typography>
                <TextField 
                    type="text"
                    variant="outlined"
                    fullWidth
                    sx={{ border: 'none', mb: 1, mr: 1}}
                    name="Facebook"
                    value={Facebook}
                    onChange={ onInputChange }
                />
                <Typography sx={{textAlign: 'justify'}}>Ingrese el link de instagram:</Typography>
                <TextField 
                    type="text"
                    variant="outlined"
                    fullWidth
                    sx={{ border: 'none', mb: 1, mr: 1}}
                    name="Instagram"
                    value={Instagram}
                    onChange={ onInputChange }
                />
                <Typography sx={{textAlign: 'justify'}}>Ingrese el número de teléfono:</Typography>
                <TextField 
                    type="text"
                    variant="outlined"
                    fullWidth
                    sx={{ border: 'none', mb: 1, mr: 1}}
                    name="Telefono"
                    value={Telefono}
                    onChange={ onInputChange }
                />
                    <Button
                        disabled={isSaving} 
                        onClick={ onSaveSection }
                        color='primary'
                        sx={{marginLeft: '87%'}}
                    >
                        <SaveOutlined sx={{ fontSize: 30}}/>
                        Guardar
                    </Button>

            </Grid>

        </Grid>
    );
}
