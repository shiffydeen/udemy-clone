import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SingleCoursePage from "./pages/SingleCoursePage";
import CartPage from "./pages/CartPage";
import CoursesPage from "./pages/CoursesPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
// import CartModal from "./components/CartModal";
// import { useModalContext } from "./context/modal_context";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartMenu = () => {
    setShowCart(true);
  };

  const closeCartMenu = () => {
    setShowCart(false);
  };

  // const {modalOpen} = useModalContext()

  return (
    <>
      <BrowserRouter>
        <Navbar openCartMenu={openCartMenu} closeCartMenu={closeCartMenu} showCart={showCart} />
        <Sidebar />
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
