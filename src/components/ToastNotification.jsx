import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useToastContext } from "../context/toast_context";

const ToastNotification = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const {isToastOpen, message, closeToast} = useToastContext()

  useEffect(() => {
    if (isToastOpen && message) {
      let interval;
      const startProgress = () => {
        interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(closeToast, 0);
              return 0;
            }
            return prev + 2; // Adjust this for smoother progress
          });
        }, 100);
      };

      if (!isHovered) startProgress();

      return () => clearInterval(interval);
    }
  }, [isToastOpen, isHovered, closeToast]);

  if (!isToastOpen || !message ) return null;

  return (
    <ToastWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="content">
        <p>{message}</p>
        <div className="actions">
          <button className="cart-btn">
            Go to Cart
          </button>
          <button onClick={closeToast} className="close-btn">
            ✕
          </button>
        </div>
      </div>
      <div className="timer-bar" style={{ width: `${progress}%` }} />
    </ToastWrapper>
  );
};



// Styled Components
const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #333;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;

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

      .cart-btn {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;

        &:hover {
          background-color: #218838;
        }
      }

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

  .timer-bar {
    height: 5px;
    background: #ff9800;
    border-radius: 2px;
    transition: width 0.1s linear; /* Smooth progress */
  }
`;


export default ToastNotification;