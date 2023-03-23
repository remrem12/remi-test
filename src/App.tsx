import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Share from "./pages/Share";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/share",
      element: <Share />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
