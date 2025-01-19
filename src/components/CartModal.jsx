import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import './CartModal.css'
import { Link } from 'react-router';
import { useModalContext } from '../context/modal_context';

const CartModal = () => {

    const {modalCourse, closeModal} = useModalContext()
    console.log(modalCourse)
  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <div className='modal-header'>
                <h3>Added to cart</h3>
                <MdCancel className='cancel-btn' onClick={closeModal}/>
            </div>
            <div className='modal-body'>
                <FaCheckCircle size={40} className='check-btn'/>
                <div className='course-img'>

                </div>
                <div className='course-info'>

                </div>
                <div className='modal-btn'>

                <Link>
                    <button></button>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartModal
