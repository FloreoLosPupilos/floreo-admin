import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddAPhotoOutlined } from '@mui/icons-material';

import { startNewImage } from '../../store/carrousel/thunks';
import { ImageView } from '../views/ImageView';

export const CarrouselPage = () => {

    const dispatch = useDispatch();
    const { isSaving } = useSelector( state => state.carrousel );

    const onClickNewImage = () => {
        
        dispatch( startNewImage() );
    }
    
    return (
        <>
            <ImageView />

            <IconButton
                onClick={ onClickNewImage }
                size='large'
                disabled={ isSaving }
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddAPhotoOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </>
    )
}
