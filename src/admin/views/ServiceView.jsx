import { Tabla } from "../components/tabla/tabla";
import { Link, useLocation } from 'react-router-dom';
import { AddServiceModalView } from "./AddServiceModalView";
import { Title } from "./Title";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch, useSelector } from "react-redux";

export const ServiceView = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  return (

    <>
      <div style={{ padding: "2rem 5rem" }}>
        <Link to={'/categoria'}>
          <IconButton ><ArrowBackIosNewIcon style={{ fill: "#000000" }} /></IconButton>
        </Link>
      </div>
      <Title title={"Servicios - " + location.state.nombre} />
      <AddServiceModalView dis={dispatch} id={location.state.id} />
      <Tabla collection={location.state.id} subCollection="true" />
    </>
  );
}
