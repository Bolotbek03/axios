import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";
import UsersPage from "./components/UsersPage";
import UserDetails from "./components/UserDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="users/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default MainRoutes;
