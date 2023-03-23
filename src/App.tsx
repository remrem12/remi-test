import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./contexts/user";
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
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
}

export default App;
