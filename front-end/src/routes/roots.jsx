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
import Dashboard from "../components/dashboard/Dashboard";
import ArticlePageD from "../components/dashboard/pages/article";
import TagPageD from "../components/dashboard/pages/tag";
import CategoryPageD from "../components/dashboard/pages/category";
import UsersPageD from "../components/dashboard/pages/users";
import DashboardMainPage from "../components/dashboard/pages";
import AddArticle from "../components/dashboard/pages/article/AddArticle";
import AddCategory from "../components/dashboard/pages/category/AddCategory";
import EditCategory from "../components/dashboard/pages/category/EditCategory";
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

      <Route path="admin/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardMainPage />} />
        <Route path="posts/allpost/:currentPage?" element={<ArticlePageD />} />
        <Route path="posts/addpost" element={<AddArticle />} />
        <Route path="tags/alltag" element={<TagPageD />} />
        {/* <Route path="tags/addtag" element={<TagPageD />} /> */}
        <Route path="categorys/allcategory" element={<CategoryPageD />} />
        <Route path="categorys/addcategory" element={<AddCategory />} />
        <Route path="categorys/editcategory/:slug" element={<EditCategory />} />

        <Route path="users/allusers" element={<UsersPageD />} />
        {/* <Route path="users/addusers" element={<UsersPageD />} /> */}
      </Route>
    </>
  )
);
