import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {Link} from "react-router";
import StarRating from "../components/StarRating";
import { useCartContext } from '../context/cart_context';
import { useToastContext } from '../context/toast_context';


const Course = (props) => {
  const {id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category} = props;
  const {addToCart, cart} = useCartContext();
  const {handleCartandToast} = useToastContext();

  const handleClick = () => {
    if (cart.find(item => item.courseID === id)){
      return
    }
    addToCart(id, image, course_name, creator, discounted_price, category);
   
    handleCartandToast(course_name);
  }

  const inCart = (itemId) => {
    if (cart.find((item) => item.courseID === itemId)) return "Added to Cart"
    return "Add to cart"
  }

  
  

  return (
    <CourseCard>
      <div className='item-img'>
        <img src = {image} alt = {course_name} />
      </div>
      <div className='item-body'>
        <h5 className='item-name'>{course_name}</h5>
        <span className='item-creator'>{creator}</span>
        <div className='item-rating flex'>
          <span className='rating-star-val'>{rating_star}</span>
          <StarRating rating_star = {rating_star} />
          <span className='rating-count'>({rating_count})</span>
        </div>
        <div className='item-price'>
          <span className='item-price-new'>${discounted_price}</span>
          <span className='item-price-old'>${actual_price}</span>
        </div>
      </div>
      <div className='item-btns '>
        <Link to = {`/courses/${id}`} className = "item-btn see-details-btn">See details</Link>
        <Link className={`item-btn add-to-cart-btn ${cart.find(item => item.courseID === id) ? "disabled" : ""}`} onClick={handleClick}>{inCart(id)}</Link>
        
      </div>
    </CourseCard>
  )
}

const CourseCard = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  .item-body{
    margin: 14px 0;
    padding: 4px 18px;

    .item-name{
      font-size: 15px;
      line-height: 1.4;
      font-weight: 800;
    }
    .item-creator{
      font-size: 12.5px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
    .rating-star-val{
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 800;
      color: #b4690e;
      margin-right: 6px;
    }
    .rating-count{
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }
    .item-price-new{
      font-weight: 700;
      font-size: 15px;
    }
    .item-price-old{
      opacity: 0.8;
      font-weight: 500;
      text-decoration: line-through;
      font-size: 15px;
      margin-left: 8px;
    }
  }

  .item-btns{
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;

    

    .item-btn{
      font-size: 15px;
      display: inline-block;
      padding: 6px 14px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
      
    }

      &.see-details-btn{
        background-color: transparent;
        border: 1px solid var(--clr-black);
        margin-right: 5px;

        &:hover{
          background-color: rgba(0, 0, 0, 0.9);
          color: var(--clr-white);
        }
      }

      &.add-to-cart-btn{
        background: rgba(0, 0, 0, 0.9);
        color: var(--clr-white);
        border: 1px solid rgba(0, 0, 0, 0.9);

        &:hover{
          background-color: transparent;
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
`;

export default Course