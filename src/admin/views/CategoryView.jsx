import {Tabla} from "../components/tabla/tabla";
import { AddCategoryModalView } from "./AddCategoryModalView";
import { Title } from "./Title";

export const CategoryView = () => {
  return (
    <>
    <Title title='Categorías' />
    <AddCategoryModalView />
    <Tabla collection="Categorias" subCollection={false}/>
    </>
  );
}
