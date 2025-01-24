import React, { useRef } from 'react'
import { useCartContext } from '../context/cart_context'
import { MdCancel } from "react-icons/md";
import './CartHover.css'
import { Link } from 'react-router';

const CartHover = () => {

    const {cart, total_amount, removeFromCart} = useCartContext()

    function truncateToTwoLines(text, firstLineLength, secondLineLength) {
        const firstLine = text.slice(0, firstLineLength);
        const remainingText = text.slice(firstLineLength).trim();
        let secondLine = remainingText.slice(0, secondLineLength);
        if (remainingText.length > secondLineLength) {
          secondLine = secondLine.trim() + "...";
        }
        return [firstLine, secondLine].filter(Boolean).join("\n");
      }

if (cart.length < 1) {
    return (
        <div className='cart-container'>
            <p>Your cart is empty</p>
        </div>
    )
}
    
  return (
    <div className='cart-container'>
            {cart.map((cartItem) => {
                const {course_name, image, creator, discounted_price} = cartItem;
                return (
                    <div className='cart-item'>
                        <div className='cart-item-img'>
                            <img src={image} alt="" />
                        </div>
                        <div className='cart-item-info'>
                            <p className='cart-item-title'>{truncateToTwoLines(course_name, 20, 20)}</p>
                            <p className='cart-item-author'>{creator}</p>
                            <p className='cart-item-price'>${discounted_price}</p>
                        </div>
                        <button className='cart-del-btn'onClick={() => removeFromCart(cartItem.courseID)}>
                            <MdCancel size={20}/>
                        </button>
                    </div>
                )
            })}
            <div className='cart-container-footer'>
                <h2>Total: ${total_amount.toFixed(2)}</h2>
                <Link to="/cart">
                    <button>Go to cart</button>
                </Link>
            </div>
            
    </div>
  )
}

export default CartHover

