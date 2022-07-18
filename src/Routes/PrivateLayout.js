import React from "react";
import Footer from "../Common/Footer/footer";
import Header from "../Common/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ ...rest }) {
  const token = localStorage.getItem("token");
  return (
    <>
  {!token && (  <Navigate to="/login" replace />)} 

      {token && (
        <>
          <Header />
          {rest.element}
          <Footer />
        </>
      )}
    </>
  );
}
