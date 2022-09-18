import {Tabla} from "../components/tabla/tabla";
import { AddCategoryModalView } from "./AddCategoryModalView";

export const CategoryView = () => {
  return (
    <>
    <AddCategoryModalView />
    <Tabla collection="Categorias" subCollection={false}/>
    </>
  );
}
