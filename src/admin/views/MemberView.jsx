import {Tabla} from "../components/tabla/tabla";

export const MemberView = () => {
  return (
    <>
      <Tabla collection="Integrantes" subCollectio={false}/>
    </>
  );
}
