import { useDispatch } from "react-redux";
import { startLoadingMembers } from "../../store/collections/thunks";
import { Tabla } from "../components/tabla/tabla";
import { AddMemberModalView } from "./AddMemberModalView";
import { Title } from "./Title";

export const MemberView = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Title title='Integrantes' />
      <AddMemberModalView dis={dispatch} />
      <Tabla collection="Integrantes" subCollection={false} />
    </>
  );
}
