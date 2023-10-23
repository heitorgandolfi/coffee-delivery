import { Routes, Route } from "react-router-dom";

import { HomeScreen } from "../pages/home";
import { Order } from "../pages/order";

import { DefaultLayout } from "../layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  );
};
