import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContextProvider } from "./contexts/user";
import Home from "./pages/Home";
import Share from "./pages/Share";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="share"
              element={
                <ProtectedRoute>
                  <Share />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
