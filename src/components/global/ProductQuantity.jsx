import { useState } from "react";

import Icon from "../general/Icon";

import isFalsy from "@/utils/functions/isFalsy";


const INITIAL_QTY = 1;


export default function ProductQuantity({
  className = "",
  incrementIcon = "+",
  decrementIcon = "-",
  inputClassName = "",
  buttonsClassName: buttonClassName = "",
  stockLeft = 0
}) {

  const [quantity, setQuantity] = useState(INITIAL_QTY);

  const isOutOfStock = () => {
    return (
      stockLeft <= 0
    );
  }

  const disableDecrementButton = () => {
    return (
      quantity <= INITIAL_QTY || isOutOfStock()
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

    setQuantity(prev => {

      if (isFalsy({ value: prev })) {
        return INITIAL_QTY;
      }
      return prev + 1;
    });
  }

  const handleDecrement = () => {
    setQuantity(prev => prev - 1);
  }

  return (
    <div className={`${className} flex items-stretch`}>
      <button
        className={`
          increment-btn px-3 py-2 rounded-s font-semibold ${buttonClassName}
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
          quantity-count w-[2.7rem] px-2 py-1 text-center ${inputClassName}
          ${isOutOfStock() && "opacity-50"}
        `}
        autoComplete="off"
        value={quantity}
        onChange={handleQtyInput}
        disabled={isOutOfStock()}
      />
      <button
        className={`
          decrement-btn px-3 py-2 rounded-e font-semibold ${buttonClassName}
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