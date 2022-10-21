import { useState } from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
export const ModalOrderLayout = ({ children, modalTitle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '90vh',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,

    //Scroll
    overflow: "auto",
    scrollbarWidth: 'thin',
    scrollbarColor: '#B7B7B7 transparent',
    '&::-webkit-scrollbar': {
      width: 10,
      height: 6,
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: '#B7B7B7',
      minHeight: 24,
      minWidth: 24,
    },
    '&::-webkit-scrollbar-thumb:focus': {
      backgroundColor: '#adadad',
    },
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: '#adadad',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#adadad',
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },
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
      <IconButton onClick={handleOpen}><VisibilityRoundedIcon style={{ fill: "#0000E0" }} /></IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box scroll='paper' sx={style}>
          <Typography sx={{ fontSize: '14' }} display="inline" id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <div style={{ zIndex:900,position: 'sticky', top: 0, float: 'right' }}>
            <IconButton onClick={handleClose}>
              <HighlightOff sx={{ fontSize: 35 }} />
            </IconButton>
          </div>
          <div>
            {children}
          </div>
        </Box>
      </Modal>
    </>
  );
}
