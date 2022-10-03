import { useDispatch } from "react-redux";
import { startLoadingCategories } from "../../store/collections/thunks";
import { Tabla } from "../components/tabla/tabla";
import { AddCategoryModalView } from "./AddCategoryModalView";
import { Title } from "./Title";

export const CategoryView = () => {
  const dispatch = useDispatch();
  dispatch(startLoadingCategories());
  return (
    <>
      <Title title='Categorías' />
      <AddCategoryModalView />
      <Tabla collection="Categorias" subCollection={false} />

    </>
  );
}
