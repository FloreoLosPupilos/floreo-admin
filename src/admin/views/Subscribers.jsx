import { useDispatch } from 'react-redux';
import { Tabla } from '../components/tabla/tabla';
import { SendEmailView } from './SendEmailView';
import { Title } from './Title';

export const SubscribersView = () => {

  const dispatch = useDispatch();


  return (
    <>
      <Title title='Suscriptores' />
      <SendEmailView dis={dispatch} />
      <Tabla collection="Suscriptores" subCollection={false} />
    </>
  );
}
