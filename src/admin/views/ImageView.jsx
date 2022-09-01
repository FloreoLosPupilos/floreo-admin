import { Button, Grid } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';

export const ImageView = () => {
    return (
        <>
            <Grid   container 
                    direction='row' 
                    alignItems='center' 
                    justifyContent='space-between' 
                    sx={{ justifyContent: 'end', mb: 1}}
                >
                <Grid item>
                    <Button color="primary" sx={{ padding: 2 }}>
                        <SaveOutlined sx={{ fontSize: 30}}/>
                        Guardar
                    </Button>
                </Grid>
            </Grid>

            <Grid container direction='row' alignItems='center' justifyContent='center' sx={{ ml: '20px' }}>
                <ImageGallery />

            </Grid>
        
        </>
    );
}
