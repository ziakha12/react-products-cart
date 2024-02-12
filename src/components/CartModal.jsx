import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../contexts/CartContext";

function CartModal(props) {
  const context = useContext(useCart);
  const total = context.Items.reduce((a , b)=>a + b.productPrice,0)
  return (
    <div
      className="fixed z-auto top-1 right-1 h-[100vh] w-[400px] bg-slate-900"
      style={{ display: `${props.style}` }}
    >
      <div className="flex justify-between mt-2">
        <h2 className="text-white text-[30px]">Cart</h2>
        <button
          onClick={() => context.setshowCartModal(!context.showCartModal)}
        >
          <FontAwesomeIcon icon={faClose} className="text-white text-2xl " />
        </button>
      </div>
      <li className="flex items-center my-2 justify-between px-4">
        <p className="text-white text-[16px]">Image</p>
        <p className="text-white text-[16px]">Title</p>
        <p className="text-white text-[16px]">Price</p>
      </li>
      <div className="my-3 h-[70%] overflow-y-auto">
        <ul className="p-0 ">
          {context.Items.map((item) => (
            <li
              className="flex justify-between gap-2 px-2 items-center my-2"
              key={item.productId}
            >
              <img className="w-[70px]" src={item.productImage} />
              <p className="text-white text-[16px] line-clamp-1">{item.productTitle}</p>
              <p className="text-white text-[16px]">{item.productPrice}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2 flex justify-between border-t-2 border-teal-100">
        <h5 className="text-white text-[30px]"> Total</h5>
        <h5 className="text-white text-[30px]"> ${total}</h5>
      </div>
    </div>
  );
}

export default CartModal;
