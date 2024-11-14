export default function formatIndianNumber(number) {

  const numStr = Math.round(number).toString();
  const lastThreeDigits = numStr.slice(-3);
  const otherDigits = numStr.slice(0, -3);
  const formattedOtherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

  return ('₹. ' + (otherDigits ? formattedOtherDigits + ',' + lastThreeDigits : lastThreeDigits));
}
