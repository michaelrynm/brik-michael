import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Index from "../pages";
import Login from "../pages/auth/login";
import AddProduct from "../pages/addProduct";
import ManageProduct from "../pages/manageProduct";
import DetailProduct from "../pages/detailProduct";

export default function Router () {
    const router =  createBrowserRouter([
        {
            path: "/",
            element: <Index />
        },
        {
            path: "/addproduct",
            element: <AddProduct />
        },
        {
            path: "/manageproduct",
            element: <ManageProduct />
        },
        {
            path: "/detailproduct/:id",
            element: <DetailProduct />
        },
        {
            path: "/login",
            element: <Login />
        },
    ])

    return <RouterProvider router={router} />;
}