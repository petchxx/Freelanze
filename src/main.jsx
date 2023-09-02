import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import "./index.css";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import ServicesPage from "./pages/Services";
import SearchPage from "./pages/Search";
import UsersPage from "./pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/search/:query",
    element: <SearchPage />,
  },
  {
    path: "/services/:category",
    element: <ServicesPage />,
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);