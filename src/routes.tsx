import { Outlet, Route, Routes } from "react-router";

import { Main } from "./pages/main";
import { SignInPage } from "./pages/sign-in";
import { SignUpPage } from "./pages/sign-up";
import { AuthProvider } from "./contexts/AuthProvider";
import { RequireAuth } from "./shared/components/require-auth/require-auth";
import { BaseLayout } from "./layouts/base-layout";
import { MyTracks } from "./pages/my-tracks";
import { PlaylistsPage } from "./pages/playlist/playlist-page";

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
              <BaseLayout />
            </RequireAuth>
          </AuthProvider>
        }
      >
        <Route path="/" element={<Main />} />
        <Route path="/my-tracks" element={<MyTracks />} />
        <Route path="/playlists/:playlistId" element={<PlaylistsPage />} />
      </Route>
    </Routes>
  );
};
