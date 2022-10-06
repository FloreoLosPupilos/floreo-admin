import { useDispatch } from "react-redux";
import { startLoadingCategories } from "../../store/collections/thunks";
import { Tabla } from "../components/tabla/tabla";
import { AddCategoryModalView } from "./AddCategoryModalView";
import { Title } from "./Title";

export const SubscribersView = () => {
  const dispatch = useDispatch();
  dispatch(startLoadingCategories());
  return (
    <>
      <Title title='Subscriptores' />
      <AddCategoryModalView />
      <Tabla collection="Categorias" subCollection={false} />

    </>
  );
}
