import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SingleCoursePage from "./pages/SingleCoursePage";
import CartPage from "./pages/CartPage";
import CoursesPage from "./pages/CoursesPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import ToastNotification from "./components/ToastNotification";
// import CartModal from "./components/CartModal";
// import { useModalContext } from "./context/modal_context";
import { useToastContext } from "./context/toast_context";

function App() {
  

  // const {modalOpen} = useModalContext()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <ToastNotification />
        {/* {modalOpen && <CartModal />} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:id" element={<SingleCoursePage />} />
          <Route path="/category/:category" element={<CoursesPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
