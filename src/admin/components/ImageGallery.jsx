import { Delete } from '@mui/icons-material';
import {  IconButton, ImageList, ImageListItem, ImageListItemBar, Container, Card} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteImage } from '../../helpers';
import { deleteImageFromCloudStorage } from '../../store/carrusel/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const ImageGallery = ({ images}) => {

  const dispatch = useDispatch();

  const onDelete = async(imageID, nameImage) => {

    Swal.fire({
      title: 'Quiere eliminar la imagen?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteImageFromCloudStorage(imageID)); //Se elimina del Firebase
        deleteImage(nameImage); //Se elimina del Storage
        Swal.fire('Imagen eliminada correctamente!', '', 'success');
      }
    })
    

  }

  return (
    <Container>
      <ImageList
        gap={12}
        sx={{
          mb: 8,
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))!important',
        }}
      >
        {images.map((image) => (
          <Card key={image.id}>
            <ImageListItem sx={{ height: '100% !important' }}>

              <img
                src={`${image.url}?w=250&fit=crop&auto=format`}
                srcSet={`${image.url}?w=250&fit=crop&auto=format&dpr=2 2x`}              
                alt={image.name}
                loading="lazy"
                style={{ cursor: 'pointer' }}
              />
              <ImageListItemBar
                title={image.name}
                actionIcon={
                <IconButton
                  color="error"
                  onClick={() => onDelete(image.id, image.name)}
                >
                  <Delete />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Card>
        ))}
      </ImageList>
  </Container>

 
  
  );
  

}
