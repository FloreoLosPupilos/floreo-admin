import { useDispatch, useSelector } from "react-redux";
import { Google } from '@mui/icons-material';
import { Grid, TextField, Typography, Button, Alert } from '@mui/material';
import { useForm } from "../../hooks";
import { startGoogleSignIn } from "../thunks";
import { startLoginWithEmailPassword } from "..";
import { getValidEmails } from "../../store/validEmails";
import { useEffect } from "react";
import { setCollectionData } from "../../helpers";

const formData = {
  email: '',
  password: ''
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(state => state.auth);

  const {email, password, onInputChange} = useForm(formData)

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  useEffect(
    () => {
      dispatch(getValidEmails());
    },
    [],
  );

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
          <Typography variant='h5' sx={{ mb: 1 }}>Inicio de sesión</Typography>
          <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label='correo'
                  type='email'
                  placeholder='ejemplo@gmail.com'
                  fullWidth
                  name='email'
                  value={email}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label='Contraseña'
                  type='password'
                  placeholder='Contraseña'
                  fullWidth
                  name='password'
                  value={password}
                  onChange={onInputChange}
                />
                <Grid
                  container
                  display={!!errorMessage ? '' : 'none'}
                  sx={{ mt: 1 }}>
                  <Grid
                    item
                    xs={12}
                  >
                    <Alert severity='error'>{errorMessage}</Alert>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={6}>
                  <Button variant='contained' type='submit' fullWidth>Login</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth onClick={onGoogleSignIn}>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
