import {Tabla} from "../components/tabla/tabla";
import {useLocation} from 'react-router-dom';

export const ServiceView = () => {
  const location = useLocation();
  return (
    
    <>
    <Tabla collection={location.state.nombre} subCollection={true}/>
    </>
  );
}
