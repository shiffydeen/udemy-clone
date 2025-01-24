import React, { useEffect, useRef, useState } from "react";
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
  const [showUserFunctions, setShowUserFunctions] = useState(false);
  const userAvatarRef = useRef(null); 

  const toggleUserFunctions = () => {
    setShowUserFunctions((prev) => !prev);
  };

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userAvatarRef.current && !userAvatarRef.current.contains(e.target)) {
        setShowUserFunctions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
              <div 
                ref={userAvatarRef}
                className={`user-avatar ${showUserFunctions ? "active" : ""}`}
                onClick={toggleUserFunctions}
                >
                <div className="user-id">
                  <span>SA</span>
                </div>
                <UserFunctions  
                onClick={(e) => e.stopPropagation()}/> 
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
    // align-items: baseline;
  }

  
  .user-avatar {
    position: relative;
    cursor: pointer;
    padding: 5px;
    
    &:hover .user-function-container{
      display: block;
    }

    &:active .user-function-container {
      display: block; 
    }


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

    &:hover .cart-container{
          display: block;
      }
  
    
    .cart-icon {
      margin-top: 7px;
      cursor: pointer;
      padding-top: 4px;
      
    }
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -3px;
      top: 3px;
      font-size:10px;
      font-weight: 700;
      width: 18px;
      height: 18px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cart-hover-menu {
      position: absolute;
      top: 40px;
      // left: 25px;
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


  .sidebar-open-btn {
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }

  
`;

export default Navbar;

