import {Tabla} from "../components/tabla/tabla";

export const CategoryView = () => {
  return (
    <>
    <Tabla collection="Categorias" subCollection={false}/>
    </>
  );
}
