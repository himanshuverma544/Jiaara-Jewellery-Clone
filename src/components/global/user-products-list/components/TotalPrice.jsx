import INR from "@/utils/functions/general/INR";


const TotalPrice = ({ className = "", text="", amount = 0 }) => {

  return (
    <div className={className}>
      {`${text}${INR(amount)}`}
    </div>
  );
};


export default TotalPrice;