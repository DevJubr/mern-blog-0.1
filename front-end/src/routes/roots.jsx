import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// layout
import Layout from "../components/layout/layout";

// pages
import Home from "../components/WebPage/Home";
import Contact from "../components/WebPage/contac/Contact";
import About from "../components/WebPage/about/About";
import Policy from "../components/WebPage/policy/Policy";
import PostsByCategory from "../components/WebPage/category/Category";
import PostDitals from "../components/WebPage/postDitails/PostDitals";
import PostByTag from "../components/WebPage/tag/PostByTag";
import SearchPage from "../components/WebPage/search/Search";
import SingUp from "../components/auth/singup/Singup";
import SingIn from "../components/auth/singin/SingIn";
import NavLayout from "../components/layout/NavLayout";
import Login from "../components/auth/admin/Login";
import LayoutOfD from "../components/dashboard/pages/Layout/LayoutOfD";
import AddArticle from "../components/dashboard/pages/Article/AddArticle";
import HomeD from "../components/dashboard/pages/Home/HomeD";
// hendel route
export const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"about"} element={<About />} />
        <Route path={"contac"} element={<Contact />} />
        <Route path={"policy"} element={<Policy />} />
        <Route path="posts/ditail/:slug" element={<PostDitals />} />
        <Route
          path="posts/category/:categoryslug/:currentPage?"
          element={<PostsByCategory />}
        />
        <Route
          path="posts/tag/:tagslug/:currentPage?"
          element={<PostByTag />}
        />
        <Route path="posts/search/:searchslug" element={<SearchPage />} />
      </Route>

      <Route element={<NavLayout />}>
        <Route path="singup" element={<SingUp />} />
        <Route path="singin" element={<SingIn />} />
        <Route path="admin/login" element={<Login />} />
      </Route>

      <Route element={<LayoutOfD />}>
        <Route path={"admin/dashboard"} element={<HomeD />} />
        <Route
          path={"admin/dashboard/posts/addpost"}
          element={<AddArticle />}
        />
      </Route>
    </>
  )
);
