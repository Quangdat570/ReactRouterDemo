import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Layout from "./components/layout/Layout";
import PostDetail from "./pages/post-detail/PostDetail";

const routes = createRoutesFromElements(
    <Route element={<Layout />}>
        <Route
            path="/"
            element={<Home />}
            loader={Home.loader}
            errorElement={<div>Có gì đó không ổn :(</div>}
        />

        <Route
            path="/posts/:postId"
            element={<PostDetail />}
            loader={PostDetail.loader}
            errorElement={<div>Có gì đó không ổn :(</div>}
        />

        <Route path="*" element={<div>Page Not Found</div>} />
    </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
