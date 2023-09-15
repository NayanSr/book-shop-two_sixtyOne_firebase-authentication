import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Home from "./layout/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import cartBooksLoader from "./loaders/cartBooksLoader";
import CheckOut from "./components/CheckOut/CheckOut";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Shop /> },
      {
        path: "/orders",
        element: <Orders />,
        loader: cartBooksLoader,
      },

      /* 
        {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      */

      { path: "/inventory", element: <Inventory /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/checkOut",
        element: (
          <PrivateRoute>
            <CheckOut />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
