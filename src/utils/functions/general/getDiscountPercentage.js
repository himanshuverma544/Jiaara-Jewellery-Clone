export default function getDiscountPercentage({ actualPrice = 0, discountedPrice = 0 }) {

  const percentageDiscount =
    Math.floor(
      ((parseInt(actualPrice) - parseInt(discountedPrice)) * 100) / parseInt(actualPrice)
    );

  return `${percentageDiscount}%`;
}