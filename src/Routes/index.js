import React from "react";
import { Routes, Route } from "react-router-dom";
import ConfigureRoutes from "./Routes";
import PublicLayout from "./PublicLayout";
import PrivateRoute from "./PrivateLayout";

let token = localStorage.getItem("token");

const SingleRoutes = ({ ...rest }) => {
  if (rest.type === "private") {
    return <Route path={rest.path} element={<PrivateRoute {...rest} />} />;
  }
  return <Route {...rest} />;
};

function MainRoutes() {
  const routes = ConfigureRoutes();
  return <Routes>{routes.map((e) => SingleRoutes({ ...e }))}</Routes>;
}

export default MainRoutes;

const Private = () => <div>private</div>;
