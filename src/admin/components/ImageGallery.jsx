import { Delete } from '@mui/icons-material';
import { IconButton, ImageList, ImageListItem, ImageListItemBar,} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteImage } from '../../helpers';
import { deleteImageFromCloudStorage } from '../../store/carrusel/thunks';


export const ImageGallery = ({ images, path}) => {

  const dispatch = useDispatch();

  const onDelete = async(image) => {
    deleteImage(path);
    dispatch(deleteImageFromCloudStorage(image));
  }

  return (
  
    <ImageList sx={{ width: 700, height: 400, mr: 10, justifyContent: 'center' }} className='full-height' >

      {images.map((image) => (
        
        <ImageListItem key={image.id}>
          <img
            src={`${image.url}?w=250&fit=crop&auto=format`}
            srcSet={`${image.url}?w=250&fit=crop&auto=format&dpr=2 2x`}
            alt='Imagen del carrusel'
            loading="lazy"
          />

          <ImageListItemBar
            title={image.id}
            actionIcon={
              <IconButton
                color="error"
                onClick={() => onDelete(image.id)}
              >
                <Delete />
              </IconButton>
            }
          />


        </ImageListItem>
        

      ))}
    </ImageList>
  
  );
  

}
