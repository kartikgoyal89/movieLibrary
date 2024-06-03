import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import SingleMovie from "./pages/singleMovie/SingleMovie";
import SingleCast from "./pages/SingleCast/SingleCast";
import Wishlist from "./pages/Wishlist/Wishlist";
import ForgotPassword from "./pages/ForgotPassword/ForgotPass.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
            <Route path="/cast/:id" element={<SingleCast />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
