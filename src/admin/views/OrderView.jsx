import { Tabla } from "../components/tabla/tabla";
import { Title } from "./Title";

export const OrderView = () => {
  return (
    <>
      <Title title='Pedidos' />
      <Tabla collection="Pedidos" subCollection={false} />
    </>
  );
}
