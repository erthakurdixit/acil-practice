import React from "react";
// import DataTable from "../MUI/Tables";
import SearchField from "../MUI/SearchField";
import { ButtonSingle } from "../MUI/Buttons";
// import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Products from "../Pages/Products/products";
import Cart from "../Pages/cart";
import ViewProduct from "../Components/ViewProduct";

const Dashboard = React.lazy(() => import("../Pages/Dashboard"));

const ConfigureRoutes = () => {
  const routes = [
    {
      element: <ViewProduct /> ,
      path: "/item",
      type: "public",
      title: "View Item",
    },
    {
      element: <Products />,
      path: "/",
      type: "public",
      title: "Products",
    },
    {
      element: <Cart/>,
      path: "/cart",
      type: "public",
      title: "cart",
    },
    {
      element: <SearchField />,
      path: "/search",
      type: "private",
      title: "Search Page",
    },
    {
      element: <ButtonSingle />,
      path: "/button",
      type: "public",
      title: "Button Page",
    },
    {
      element: <Dashboard />,
      path: "/dashboard",
      type: "private",
      title: "Dashboard",
    },
    { element: <Login />, path: "/login", type: "public", title: "Login" },
  ];
  return routes;
};
export default ConfigureRoutes;
