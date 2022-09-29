import {Tabla} from "../components/tabla/tabla";
import {useLocation} from 'react-router-dom';
import { AddServiceModalView } from "./AddServiceModalView";
import { Title } from "./Title";

export const ServiceView = () => {
  const location = useLocation();
  return (
    
    <>
    <Title title='Servicios' />
    <AddServiceModalView />
    <Tabla collection={location.state.id} subCollection={true}/>
    </>
  );
}
