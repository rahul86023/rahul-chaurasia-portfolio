import React from "react";

import { Outlet } from "react-router-dom";

import Navigation from "../Navigation";

export const MainLayout = () => {
  return (
    <>
      <Navigation />

      <Outlet />

    
    </>
  );
};
