import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layout
import Layout from "../components/header/layout";

// components
import Home from "../components/home/Home";
import Login from "../components/auth/Login";
import Regs from "../components/auth/Regs";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="regs" element={<Regs />} />
    </Route>
  )
);
