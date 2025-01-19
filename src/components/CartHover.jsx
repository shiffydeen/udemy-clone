import React, { useRef } from 'react'
import { useCartContext } from '../context/cart_context'
import { MdCancel } from "react-icons/md";
import './CartHover.css'
import { Link } from 'react-router';

const CartHover = () => {

    const {cart, total_amount, removeFromCart} = useCartContext()
    // console.log(cart)

    function truncateToTwoLines(text, firstLineLength, secondLineLength) {
        // Extract the first line
        const firstLine = text.slice(0, firstLineLength);
      
        // Handle the remaining text for the second line
        const remainingText = text.slice(firstLineLength).trim();
        let secondLine = remainingText.slice(0, secondLineLength);
      
        // Add ellipsis if the remaining text is longer than the second line limit
        if (remainingText.length > secondLineLength) {
          secondLine = secondLine.trim() + "...";
        }
      
        // Combine the first and second lines
        return [firstLine, secondLine].filter(Boolean).join("\n");
      }

if (cart.length < 1) {
    return (
        <div className='cart-container'>
            <h2>Your cart is empty</h2>
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
                            {/* <p className='cart-item-title'>hello</p> */}
                           
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
                <h2>Total: ${total_amount}</h2>
                <Link to="/cart">
                    <button>Go to cart</button>
                </Link>
            </div>
            
    </div>
  )
}

export default CartHover
