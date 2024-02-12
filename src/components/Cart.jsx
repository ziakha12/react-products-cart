import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../contexts/CartContext';
import CartModal from './CartModal';

function Cart() {

    const context = useContext(useCart)

    return (
        <>
    <button className='cart fixed bottom-5 right-7' onClick={()=>context.setshowCartModal(!context.showCartModal)}>
        <div className='relative rounded-full bg-white flex items-center justify-center h-[60px] w-[60px] shadow-lg'>
        <FontAwesomeIcon icon={faBagShopping} className='text-slate-900 text-2xl ' />
        <div className='text-white bg-red-500 absolute right-1 top-0 flex h-[20px] w-[20px] text-[15px] p-0 m-0 rounded-full items-start justify-center'>{context.cartCount}</div>
        </div>
    </button>
    {
        context.showCartModal === true ? <CartModal style='block'/>: <CartModal style='none'/>
    }
    </>
      )
}

export default Cart