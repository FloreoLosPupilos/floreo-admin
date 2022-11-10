import { useDispatch } from 'react-redux';
import { startLoadingSubscribers } from '../../store/collections/thunks';
import { Tabla } from '../components/tabla/tabla';
import { SendEmailView } from './SendEmailView';
import { Title } from './Title';

export const SubscribersView = () => {

  const dispatch = useDispatch();
  dispatch(startLoadingSubscribers());

  return (
    <>
      <Title title='Suscriptores' />
      <SendEmailView dis={dispatch} />
      <Tabla collection="Suscriptores" subCollection={false} />
    </>
  );
}
