import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useToastContext } from "../context/toast_context";
import { Link } from "react-router";

const ToastNotification = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [pauseProgress, setPauseProgress] = useState(false)

  const {isToastOpen, message, closeToast} = useToastContext()

  useEffect(() => {
    if (isToastOpen && message) {
        setDisableTransition(true);
        clearInterval(intervalId);

      const resetTransition = setTimeout(() => {
        setDisableTransition(false); 
      }, 50); 

      let interval;
      const startProgress = () => {
        interval = setInterval(() => {
          setProgress((prev) => {
            if (pauseProgress === true){
                return prev;
            }
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(closeToast, 0);
              return 0;
            }
            return prev + 2; 
          });
        },25);
      };

      startProgress()


      return () => {
        clearInterval(interval)
        clearTimeout(resetTransition);
      };
    }
  }, [isToastOpen, isHovered, closeToast, message, pauseProgress]);

  if (!isToastOpen || !message ) return null;

  return (
    <ToastWrapper
      onMouseEnter={() => setPauseProgress(true)}
      onMouseLeave={() => setPauseProgress(false)}
    >
      <div className="content">
        <div className="actions">
            <p>Adding <span className="message">{message}</span> to your cart</p>
            <button onClick={closeToast} className="close-btn">✕</button>
        </div>
      </div>
      <Link to="/cart">
        <button className="cart-btn">
            Go to Cart
        </button>
      </Link>
      <div className={`timer-bar ${disableTransition ? "no-transition" : ""}`}
        style={{ width: `${progress}%` }}
        />
    </ToastWrapper>
  );
};



// Styled Components
const ToastWrapper = styled.div`
  
  position: fixed;
  bottom: 40px;
  right: 30px;
  background-color: #FAF9F6;
  color: black;
  padding: 20px 25px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;

  .message {
    font-weight: bold;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      font-size: 16px;
      flex-grow: 1;
    }

    .actions {
      display: flex;
      gap: 10px;

      .close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;

        &:hover {
          color: #ff6666;
        }
      }
    }
  }
    .cart-btn {
        background-color: #fd9644;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        display: block;

        &:hover {
          background-color: #ffb865;
        }
      }

  .timer-bar {
    height: 5px;
    background: #ff9800;
    border-radius: 2px;
    transition: width 0.1s linear; /* Smooth progress */

    &.no-transition {
      transition: none; /* Disable transition */
    }
  }
`;


export default ToastNotification;