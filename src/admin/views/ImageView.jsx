import { Grid, IconButton } from '@mui/material';
import { ImageGallery } from '../components';
import { UploadOutlined } from '@mui/icons-material';
import { useRef } from 'react';
import { fileUpload } from '../../helpers/fileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { startNewImage } from '../../store/carrusel/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { Title } from './Title';


export const ImageView = () => {
    
    const fileInputRef = useRef();

    const dispatch = useDispatch();
    const { isSaving, images } = useSelector( state => state.carrusel );


    const onFileInputChange = async({target}) => {

        if (images.length >= 10) {
            Swal.fire('Subiendo Imagen', 'No se puede agregar más imagenes', 'error');
            return;
        } else if (target.files === 0) {
            return;
        } else {
            const [pathStorage, url] = await fileUpload(target.files[0]);  
            dispatch( startNewImage(url, pathStorage) );
            Swal.fire('Imagen guardada', 'Se guardo correctamente la imagen', 'success');
        }

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
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                /> 
                
                <Title title="Carrusel" />


                <IconButton
                    color="primary"
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click()}
                >
                    <UploadOutlined fontSize="large" />
                </IconButton>
            </Grid>

            <Grid container direction='row' alignItems='center' justifyContent='center' sx={{ ml: '20px' }}>

                <ImageGallery 
                    images={ images }
                />
            </Grid>
        
        </>
    );
}
