import {Tabla} from "../components/tabla/tabla";
import { AddMemberModalView } from "./AddMemberModalView";

export const MemberView = () => {
  return (
    <>
      <AddMemberModalView/>
      <Tabla collection="Integrantes" subCollection={false} />
    </>
  );
}
