import { useState } from 'react';
import { Box, Button, Modal, Typography, IconButton } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';

export const ModalLayout = ({children, buttonText, modalTitle}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <>
      <Button style={{ height: "20px", width: "20%", margin: "1% 1% 1% 79%" }} onClick={handleOpen}>{buttonText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton>
            <HighlightOff />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          {children}
        </Box>


      </Modal>
    </>
  );
}
