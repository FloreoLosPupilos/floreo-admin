import {Tabla} from "../components/tabla/tabla";
import {useLocation} from 'react-router-dom';
import { AddServiceModalView } from "./AddServiceModalView";

export const ServiceView = () => {
  const location = useLocation();
  return (
    
    <>
    <AddServiceModalView />
    <Tabla collection={location.state.id} subCollection={true}/>
    </>
  );
}
