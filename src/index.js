import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
  Router,
} from "react-router-dom"
import Sidebar from "./component/Sidebar"
import Layout from "./component/Layout"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/celebration" element={<App />} />
      <Route path="/challenges" element={<App />} />
      <Route path="/featurework" element={<App />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
