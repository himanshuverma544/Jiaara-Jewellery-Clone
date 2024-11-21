import getDiscountPercentage from "@/utils/functions/general/getDiscountPercentage";


export default function getProductDetails(product = null) {

  return ({
    id: product?.id,
    name: product?.name,
    slug: product?.slug,
    categories: product?.categories,
    tags: product?.tags,
    shortDescription: product?.short_description,
    description: product?.description,
    specifications: product?.attributes?.reduce((acc, attr) => {
      acc[attr.name] = attr.options[0];
      return acc;
    }, {}),
    image: product?.images?.length > 0 ? product?.images[0]?.src : null,
    gallery: product?.images?.length > 0 ?
      product?.images.map(image => ({
        id: image?.id,
        src: image?.src,
        alt: image?.alt
      })) : null,
    inStock: product?.stock_status === "instock",
    stockQuantity: product?.stock_quantity,
    price: product?.price,
    onSale: product?.on_sale,
    regularPrice: product?.on_sale ? product?.regular_price : null,
    salePrice: product?.on_sale ? product?.sale_price : null,
    discountPercentage: product?.on_sale ?
      getDiscountPercentage({
        actualPrice: product?.regular_price,
        discountedPrice: product?.sale_price
      }) : null,
    rating: product?.average_rating,
    ratingCount: product?.rating_count,
    relatedProductIds: product?.related_ids
  });
};