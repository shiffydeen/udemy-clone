import React from 'react'
import styled from 'styled-components'

const UserFunctions = () => {
  return (
    <UserFunctionsWrapper>
        <div className=' header'>
            <span>SA</span>
            <div>
                <p>Sheriff Aderombi</p>
                <p>ayaderombi@gmail.com</p>
            </div>
        </div>
        <div className='section'>
            <ul>
                <li>My learning</li>
                <li>My cart</li>
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
            <ul className='flex'>
                <li>
                    Language
                </li>
                <li>Global</li>
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
    </UserFunctionsWrapper>
  )
}


const UserFunctionsWrapper = styled.div`
    position: absolute;
    // display: none;
    right: -100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.61);
    -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.61);
    -moz-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.61);
    color: "#fff";
    // padding: 1rem 0 1rem 0;
    border-radius: 10px;
    font-size: 12px;
    white-space: nowrap;
    overflow-y: auto;
    // max-height: 70vh;

    .header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0 1rem 0;
    padding: 0rem 2rem 0rem;

        span {
            background: black;
            color: white;
            padding: 1rem;
            font-weight: bold;
            font-size: 2rem;
            border-radius: 50%
        }
    }

    .section {
        border-top: 1px solid lightgray;
        padding: 0.5rem 0 1rem;
        

        li {
            // margin: 1rem 0 1rem 0;
            font-weight: 500;
            cursor: pointer;
            padding: 0.5rem 2rem 0.5rem;

            &:hover {
            background: red;
            }
        }

        .flex {
            justify-content: space-between;
        }
    }
`

export default UserFunctions
