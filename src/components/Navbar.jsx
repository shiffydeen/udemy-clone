// import React, { useRef, useState } from 'react';
// import styled from "styled-components";
// import {MdMenu, MdShoppingCart} from "react-icons/md";
// import { Link } from 'react-router';
// import { useSidebarContext } from '../context/sidebar_context';
// import { useCartContext } from '../context/cart_context';




// const Navbar = ({openCartMenu, closeCartMenu}) => {

//   const cart = useRef();

//   const {total_items} = useCartContext();
//   const {openSidebar} = useSidebarContext();

//   const [cartHover, setCartHover] = useState(false)

//   const displayCart = (e) => {
//     const cartRect = e.target.getBoundingClientRect();
//     console.log("hi")
//     console.log(e.target)
//     console.log(cartRect);
//     openCartMenu(cartRect)
//   }
  
//   const handleCartMenu = (e) => {
    
//     if (!e.target.classList.contains('cart-container')) {
//       closeCartMenu()
//     }
//   }

//   return (
//     <div>
//       <NavbarWrapper className = "bg-white flex" onMouseOver={handleCartMenu}>
//       <div className='container w-100'>
//         <div className='brand-and-toggler flex flex-between w-100'>
//           <Link to = "/" className='navbar-brand text-uppercase ls-1 fw-8'>
//               <span>c</span>oursean
//           </Link>
//           <div className='navbar-btns flex'>
//             <Link to = "/cart" className='cart-btn'>
//               <div className="cart-container" >
//                 {/* <MdShoppingCart /> */}
//                 <p onMouseOver={displayCart}>Cart</p>
//               </div>
//               <span className='item-count-badge'>{total_items}</span>
//             </Link>
//             <button type = "button" className='sidebar-open-btn' onClick={() => openSidebar()}>
//               <MdMenu />
//             </button>
//           </div>
//         </div>
//       </div>
//       </NavbarWrapper>
//     </div>
//   )
// }

// const NavbarWrapper = styled.nav`
//   height: 80px;
//   box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

//   .navbar-brand{
//     font-size: 23px;
//     span{
//       color: var(--clr-orange);
//     }
//   }
//   .cart-btn{
//     margin-right: 18px;
//     font-size: 23px;
//     position: relative;
//     .item-count-badge{
//       background-color: var(--clr-orange);
//       position: absolute;
//       right: -10px;
//       top: -10px;
//       font-size: 12px;
//       font-weight: 700;
//       display: block;
//       width: 23px;
//       height: 23px;
//       color: var(--clr-white);
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   }

//   .sidebar-open-btn{
//     transition: all 300ms ease-in-out;
//     &:hover{
//       opacity: 0.7;
//     }
//   }
// `;


// export default Navbar

import React from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router";
import { useSidebarContext } from "../context/sidebar_context";
import { useCartContext } from "../context/cart_context";
import CartHover from "./CartHover";
import UserFunctions from "./UserFunctions";

const Navbar = () => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();

  return (
    <div>
      <NavbarWrapper className="bg-white flex">
        <div className="container w-100">
          <div className="brand-and-toggler flex flex-between w-100">
            <Link to="/" className="navbar-brand text-uppercase ls-1 fw-8">
              <span>c</span>demy
            </Link>
            <div className="navbar-btns flex">
              <div
                className="cart-btn"
              >
                <Link to="/cart">
                  <div className="cart-icon">
                    <MdShoppingCart />
                  </div>
                </Link>
                <span className="item-count-badge">{total_items}</span>
                <CartHover />
              </div>
              <div className="user-avatar">
                <div className="user-id">
                  <span>SA</span>
                </div>
                <UserFunctions />
              </div>
              <button
                type="button"
                className="sidebar-open-btn"
                onClick={() => openSidebar()}
              >
                <MdMenu />
              </button>
            </div>
          </div>
        </div>
      </NavbarWrapper>
    </div>
  );
};

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
  

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }

  .navbar-btns {
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  
  .user-avatar {
    position: relative;


    .user-id {
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    aligns-item: center;
    padding: 0.5rem;
    border-radius: 50%;
    span {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  }

  

  .cart-btn {
    position: relative;
    font-size: 23px;
    border: 1px solid black;
    .cart-icon {
      cursor: pointer;
      padding: 4px
    }
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cart-hover-menu {
      position: absolute;
      top: 40px;
      left: 0;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      z-index: 1000;
      width: 200px;

      p {
        margin: 0 0 10px;
        font-size: 14px;
      }

      a {
        color: var(--clr-orange);
        text-decoration: none;
        font-weight: 600;
      }
    }
  }

  .cart-btn:hover .cart-container{
    display: block;
    
  }

  .sidebar-open-btn {
    transition: all 300ms ease-in-out;
    border: 1px solid black;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Navbar;

