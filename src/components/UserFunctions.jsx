import React from 'react'
import styled from 'styled-components'
import { AiOutlineGlobal } from "react-icons/ai";
import { useCartContext } from "../context/cart_context";

const UserFunctions = ({ isVisible }) => {

const { total_items } = useCartContext();
  return (
    <UserFunctionsWrapper 
        className={isVisible ? "visible" : ""}
        onClick={(e) => e.stopPropagation()}
        >
        <div className='user-function-container'>
            <div className='header'>
                <div className='flex'>
                    <span>SA</span>
                </div>
                <div>
                    <p className='username'>Sheriff Aderombi</p>
                    <p>ayaderombi@gmail.com</p>
                </div>
            </div>
            <div className='section'>
                <ul>
                    <li>My learning</li>
                    <li>
                        <div>My cart</div>
                        <div className='total-items'>{total_items} courses</div>
                    </li>
                    <li>Wishlist</li>
                    <li>Teach on Cdemy</li>
                </ul>
            </div>
            <div className='section'>
                <ul>
                    <li>Notifications</li>
                    <li>Messages</li>
                </ul>
            </div>
            <div className='section'>
                <ul>
                    <li>Account settings</li>
                    <li>Payment methods</li>
                    <li>Subscriptions</li>
                    <li>Udemy credits</li>
                    <li>Purchase history</li>
                </ul>
            </div>
            <div className='section'>
                <ul>
                    <li>
                        <div>Language</div>
                        <div><AiOutlineGlobal size={14}/></div>
                    </li>
                </ul>
            </div>
            <div className='section'>
                <ul>
                    <li>Public Profile</li>
                    <li>Edit Profile</li>
                </ul>
            </div>
            <div className='section'>
                <ul>
                    <li>Help and Support</li>
                    <li>Log out</li>
                </ul>
            </div>
        </div>
    </UserFunctionsWrapper>
  )
}


const UserFunctionsWrapper = styled.div`
    position: absolute;
    top: 40px;
    right: -100%;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.61);
    color: "#fff";
    border-radius: 10px;
    font-size: 12px;
    white-space: nowrap;
    overflow-y: auto;
    max-height: 70vh;

   


    .user-function-container {
        display: ${props => (props.className === "visible" ? "block" : "none")};
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0 1rem 0;
        padding: 0rem 2rem 0rem;

        div:first-child {
            background: black;
            width: 50px;
            height: 50px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            
        }

        span {
            color: white;
            padding: 1rem;
            font-weight: bold;
            font-size: 2rem;
        }

        .username {
            font-weight: bold;
            font-size: 14px;
        }
    }

    .section {
        border-top: 1px solid lightgray;
        padding: 0.5rem 0 0.5rem;

    
        li {
          
            font-weight: 500;
            cursor: pointer;
            padding: 0.5rem 2rem 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:hover {
            background: #ffb865;
            }

            &:hover .total-items {
                color: white;
            }
        }

    }
`

export default UserFunctions
