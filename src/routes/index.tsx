import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Order } from "../pages/order";

import { DefaultLayout } from "../layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  );
};
