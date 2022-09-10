import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { setActiveInfo } from '../../store/about/aboutSlice';
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
        Swal.fire('Actualizar información', messageSaved, 'success');
        dispatch( startSavingSection() );
    };

    
    
    return (
        <Grid container direction='row' justifyContent='end'  alignItems='center' sx={{mb: 1}}>
            <Grid item>
                <Button
                    disabled={isSaving} 
                    onClick={ onSaveSection }
                    color='primary' 
                    sx={{padding: 2}}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder='Ingrese el nombre de la empresa'
                    label="Nombre"
                    sx={{ border: 'none', mb: 1, ml: 1, mr: 1}}
                    name="Nombre"
                    value={Nombre}
                    onChange={ onInputChange }
                />
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder='Ingrese el link de facebook'
                    label="Red Social - Facebook"
                    sx={{ border: 'none', mb: 1, ml: 1, mr: 1}}
                    name="Facebook"
                    value={Facebook}
                    onChange={ onInputChange }
                />
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder='Ingrese el link de instagram'
                    label="Red Social - Instagram"
                    sx={{ border: 'none', mb: 1, ml: 1, mr: 1}}
                    name="Instagram"
                    value={Instagram}
                    onChange={ onInputChange }
                />
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder='Ingrese el número de teléfono'
                    label="Contacto"
                    sx={{ border: 'none', mb: 1, ml: 1, mr: 1}}
                    name="Telefono"
                    value={Telefono}
                    onChange={ onInputChange }
                />
            </Grid>

        </Grid>
    );
}
