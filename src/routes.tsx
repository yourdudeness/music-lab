import { Outlet, Route, Routes } from "react-router";

import { Main } from "./pages/main";
import { SignInPage } from "./pages/sign-in";
import { SignUpPage } from "./pages/sign-up";
import { AuthProvider } from "./contexts/AuthProvider";
import { RequireAuth } from "./shared/components/require-auth/require-auth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        }
      >
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>

      <Route
        element={
          <AuthProvider>
            <RequireAuth>
              <Outlet />
            </RequireAuth>
          </AuthProvider>
        }
      >
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
};
