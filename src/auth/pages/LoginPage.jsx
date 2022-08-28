import { Grid, TextField, Typography, Button } from '@mui/material';

export const LoginPage = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >
        <Grid item
          className='box-shadow'
          xs={3}
          sx={{ backgroundColor: 'white', padding: 3, borderRadious: 2 }}>
          <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>
          <form>
            <Grid container>
              <Grid item xs={12} sx={{mt: 2}}>
                <TextField label='correo' type='email' placeholder='ejemplo@gmail.com' fullWidth/>
              </Grid>
              <Grid item xs={12} sx={{mt: 2}}>
                <TextField label='Contraseña' type='password' placeholder='Contraseña' fullWidth>
                </TextField>
              </Grid>
              <Grid container spacing={ 2 } sx={{mb:2, mt: 1}}>
                <Grid item xs={ 12 }>
                  <Button variant='contained' fullWidth>Login</Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
