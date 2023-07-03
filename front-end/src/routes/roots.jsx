import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// layout
import Layout from "../components/layout/layout";

// components
import Home from "../components/WebPage/Home";

// hendel route
export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);
