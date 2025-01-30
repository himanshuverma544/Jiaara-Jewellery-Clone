import INR from "@/utils/functions/general/INR";


const ProductSummary = ({ className = "", productPrice = 0, productQtyCount = 0 }) => {

  return (
    <div className={`product-summary ${className}`}>
      <div className="product-price flex justify-between gap-5">
        <div className="text">
          Price
        </div>
        <div className="value break-words">
          {INR(productPrice)}
        </div>
      </div>

      <div className="product-quantity flex justify-between gap-5">
        <div className="text">
          Quantity
        </div>
        <div className="value break-words">
          {productQtyCount}
        </div>
      </div>

      <div className="product-total-price flex justify-between gap-5">
        <div className="text">
          Total Price
        </div>
        <div className="value break-words">
          {INR(productPrice * productQtyCount)}
        </div>
      </div>
    </div>
  );
}


export default ProductSummary;