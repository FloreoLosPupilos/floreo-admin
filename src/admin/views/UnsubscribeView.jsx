import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { FirebaseDB } from '../../firebase/config'
import { doc, deleteDoc } from "firebase/firestore/lite";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const UnsubscribeView = () => {
  const backgroundImage = 'linear-gradient(to right top, #225387, #145ea5, #0068c3, #0072e1, #007bff)';
  const { email } = useParams();
  const subscribers = useSelector(state => state.collections.subscribers);
  console.log(subscribers)

  const getEmailId = (email) => {
    for (let index = 0; index < subscribers.length; index++) {
      const subscriber = subscribers[index]
      if (email === subscriber.email) return subscriber.id
    }
    return '';
  }

  const removeSubscriber = async () => {
    const emailId = getEmailId(email);
    Swal.fire('Subscripción eliminada', 'Se ha eliminado tu correo', 'success');
    const memberDoc = doc(FirebaseDB, "Suscriptores", emailId);
    await deleteDoc(memberDoc)
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh', padding: 4 }}
        style={{ backgroundImage }}
      >
        <div style={{ width: '40%' }}>
          <Card>
            <CardContent>

              <div className="flexbox-center">
                <img src={'https://about.codecov.io/wp-content/uploads/2020/12/sad-email-1.png'} style={{ maxWidth: '50%', maxHeight: '50%', marginLeft: '23%' }} />
              </div>

              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.primary" gutterBottom>
                  ¿Deseas dejar de recibir noticias de Floreo Pupilos al siguiente correo: {email}
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Button variant="contained" style={{ backgroundColor: '#21b6ae' }} onClick={() => removeSubscriber()}>Confirmar</Button>
              </Box>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </>
  )
}
