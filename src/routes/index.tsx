import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/home";
import { OrderPage } from "../pages/order";

import { DefaultLayout } from "../layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Route>
    </Routes>
  );
};
