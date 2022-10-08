import { useDispatch } from "react-redux";
import { startLoadingCategories } from "../../store/collections/thunks";
import { Tabla } from "../components/tabla/tabla";
import { AddCategoryModalView } from "./AddCategoryModalView";
import { Title } from "./Title";

export const CategoryView = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Title title='Categorías' />
      <AddCategoryModalView dis={dispatch} />
      <Tabla  collection="Categorias" subCollection={false} />

    </>
  );
}
