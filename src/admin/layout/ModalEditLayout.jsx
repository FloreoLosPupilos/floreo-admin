import { useState } from 'react';
import { Box, Button, Modal, Typography, IconButton, Grid } from '@mui/material';
import { HighlightOff, SaveOutlined } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
export const ModalEditLayout = ({ children, buttonText, modalTitle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") 
        return;
    closeModal();
  }

  window.addEventListener('closeModal', () => {
    closeModal();
  });

  return (
    <>
      <IconButton style={{}} onClick={handleOpen}><EditIcon/></IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
            <IconButton sx={{float: 'right'}} onClick={handleClose}>
              <HighlightOff />
            </IconButton>
          </Typography>
          {children}

          <Grid item style={{marginLeft: '60%'}}>
            <Button
              form="form"
              type="submit"
              color='primary'
              sx={{ padding: 2 }}
            >
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
          </Grid>
        </Box>


      </Modal>
    </>
  );
}
