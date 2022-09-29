import {Tabla} from "../components/tabla/tabla";
import { AddMemberModalView } from "./AddMemberModalView";
import { Title } from "./Title";

export const MemberView = () => {
  return (
    <>
      <Title title='Integrantes' />
      <AddMemberModalView/>
      <Tabla collection="Integrantes" subCollection={false} />
    </>
  );
}
