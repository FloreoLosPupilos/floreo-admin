import { useDispatch } from "react-redux";
import { startLoadingCategories } from "../../store/collections/thunks";
import { Tabla } from "../components/tabla/tabla";
import { AddCategoryModalView } from "./AddCategoryModalView";
import { Title } from "./Title";

export const SubscribersView = () => {
  return (
    <>
      <Title title='Suscriptores' />
      <Tabla collection="Suscriptores" subCollection={false} />

    </>
  );
}
