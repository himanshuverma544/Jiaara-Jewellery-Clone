import INR from "@/utils/functions/general/INR";


const TotalPrice = ({ className = "", amount = 0 }) => {

  return (
    <div className={className}>
      {INR(amount)}
    </div>
  );
};


export default TotalPrice;