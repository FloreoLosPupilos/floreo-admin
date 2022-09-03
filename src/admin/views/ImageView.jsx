import { Button, Grid, IconButton } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';
import { UploadOutlined } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import { fileUpload } from '../../helpers/fileUpload';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startNewImage } from '../../store/carrusel/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const ImageView = () => {
    
    const [file, setFile] = useState(null);
    const fileInputRef = useRef();

    const dispatch = useDispatch();
    const { isSaving, images } = useSelector( state => state.carrusel );


    const onFileInputChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
    };   

    const fileToFirebase = async(e) => {
        e.preventDefault();
        const url = await fileUpload(file);
        dispatch( startNewImage(url) );
        Swal.fire('Imagen guardada', 'Se guardo correctamente la imagen', 'success');
    };

    return (
        <>
            <Grid   container 
                    direction='row' 
                    alignItems='center' 
                    justifyContent='space-between' 
                    sx={{ justifyContent: 'end', mb: 1}}
                >                                                                                                           
                
                <input 
                    type='file'
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                /> 

                <IconButton
                    color="primary"
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Grid item>
                    <Button color="primary" sx={{ padding: 2 }} 
                            onClick={fileToFirebase} 
                            disabled={ isSaving }
                    >
                        <SaveOutlined sx={{ fontSize: 30}}/>
                        Guardar
                    </Button>
                </Grid>
            </Grid>

            <Grid container direction='row' alignItems='center' justifyContent='center' sx={{ ml: '20px' }}>
                
                <ImageGallery 
                    images={ images } 
                />
            </Grid>
        
        </>
    );
}
