import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { PublicRoute } from "./utils/routes/PublicRoute";
import { PrivateRoute } from "./utils/routes/PrivateRoute";
import { AuthPage } from "./pages/AuthPage";
import ContactsPage from "./pages/ContactsPage";
export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute restricted>
            <AuthPage />
          </PublicRoute>
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
