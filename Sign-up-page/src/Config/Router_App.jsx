import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Sign_in } from "../Pages/Sign_in";
import { Sign_up } from "../Pages/Sign_up";
import { Main_Terminal } from "../Pages/Main_Terminal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Sign_up />} />
      <Route path="Main_Terminal" element={<Main_Terminal />} />
      <Route path="Sign_in_Page" element={<Sign_in />}>
      </Route>
    </>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};