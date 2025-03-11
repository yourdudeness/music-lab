import { Route, Router, Routes } from "react-router";

import React from "react";
import { Main } from "./pages/main";
import { SignInPage } from "./pages/sign-in";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      {/* <Route path="/sign-up" element={<SignUpPage />} /> */}

      <Route index element={<Main />} />
    </Routes>
  );
};
