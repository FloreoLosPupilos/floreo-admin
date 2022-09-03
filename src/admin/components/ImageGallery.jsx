import { Delete } from '@mui/icons-material';
import {IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

export const ImageGallery = ({ images }) => {

  images.map( img => console.log(img.url))
  
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
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
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
