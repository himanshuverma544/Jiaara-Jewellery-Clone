import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { cart } from "@/redux/slices/cart";

import Icon from "@/components/general/Icon";

import isFalsy from "@/utils/functions/general/isFalsy";


export default function ProductQuantity({
  productId = null,
  cartQtyCount = null,
  theClassName = "",
  incrementIcon = "+",
  decrementIcon = "-",
  inputClassName = "",
  buttonsClassName: buttonClassName = "",
  stockLeft = 0,
  callback: getQuantity = () => {},
}) {
  
  const [quantity, setQuantity] = useState(cartQtyCount);

  const dispatch = useDispatch();


  useEffect(()=> {

    setQuantity(cartQtyCount);
  }, [cartQtyCount]);


  const isOutOfStock = () => {
    return (
      stockLeft <= 0
    );
  }


  const disableDecrementButton = () => {
    return (
      quantity <= 0 || isOutOfStock()
    );
  }

  const disableIncrementButton = () => {
    return (
      quantity >= stockLeft || isOutOfStock()
    );
  }


  const handleQtyInput = event => {

    let inputValue = event.target.value.replace(/[^0-9]/g, '');
  
    if (isFalsy({ value: inputValue, exclude: [0] })) {
      setQuantity('');
    }
    else if (!isNaN(inputValue)) {
      inputValue = parseInt(inputValue, 10);
      setQuantity(inputValue);
    }
  }


  const handleIncrement = () => {

    dispatch(cart.incrementQty({ productId, cartQtyCount: quantity + 1 }));
    
    getQuantity(quantity + 1);

    setQuantity(prev => {

      if (isFalsy({ value: prev })) {
        return INITIAL_QTY;
      }
      return prev + 1;
    });
  }

  const handleDecrement = () => {

    dispatch(cart.decrementQty({ productId, cartQtyCount: quantity - 1 }));
    getQuantity(quantity - 1);
    setQuantity(prev => prev - 1);
  }


  return (
    <div className={`quantity ${theClassName}`}>
      <button
        className={`
          increment-btn
          flex justify-center items-center
          rounded-s-sm
          font-semibold
          ${buttonClassName}
          ${disableIncrementButton() && "opacity-50"}
        `}
        type="button"
        onClick={handleIncrement}
        disabled={disableIncrementButton()}
      >
        <Icon className="plus-icon" icon={incrementIcon}/>
      </button>
      <input
        className={`
          quantity-count
          ${inputClassName}
          ${isOutOfStock() && "opacity-50"}
        `}
        autoComplete="off"
        value={quantity}
        onChange={handleQtyInput}
        disabled={isOutOfStock()}
      />
      <button
        className={`
          decrement-btn
          flex justify-center items-center
          rounded-e-sm
          font-semibold
          ${buttonClassName}
          ${disableDecrementButton() && "opacity-50"}
        `}
        type="button"
        onClick={handleDecrement}
        disabled={disableDecrementButton()}
      >
        <Icon className="minus-icon" icon={decrementIcon}/>
      </button>
    </div>
  );
}