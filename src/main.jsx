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
import ServicePage from "./pages/Service";
import SearchPage from "./pages/Search";
import UserPage from "./pages/User";

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
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/search/:query",
    element: <SearchPage />,
  },
  {
    path: "/services/:category",
    element: <ServicesPage />,
  },
  {
    path: "/service/:serviceId",
    element: <ServicePage />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);