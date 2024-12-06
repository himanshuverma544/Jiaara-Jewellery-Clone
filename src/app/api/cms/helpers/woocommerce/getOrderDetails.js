export default function getOrderDetails(data = {}) {

  return ({
    order: {
      id: data?.id,
      date: data?.date_created,
      status: data?.status,
      total: data?.total,
    },
    customer: {
      id: data?.customer_id,
      contact: {
        firstName: data?.billing?.first_name,
        lastName: data?.billing?.last_name,
        email: data?.billing?.email,
        contactNumber: data?.billing?.phone,
      },
      address: {
        address: data?.billing?.address_1,
        additionalAddress: data?.billing?.address_2,
        city: data?.billing?.city,
        state: data?.billing?.state,
        pinCode: data?.billing?.postcode,
        country: data?.billing?.country === "IN" ? "India" : data?.billing?.country,
      }
    },
    items: data?.line_items?.map(item => ({
      id: item?.id,
      productId: item?.product_id,
      sku: item?.sku,
      name: item?.name,
      cartQtyCount: item?.quantity,
      price: item?.subtotal,
      total: item?.total,
      imageId: item?.image?.id,
      image: item?.image?.src
    })),
    payment: {
      method: data?.payment_method,
      title: data?.payment_method_title,
      transactionId: data?.transaction_id,
      datePaid: data?.date_paid
    },
    coupons: data?.coupon_lines.map(coupon => ({
      id: coupon?.id,
      code: coupon?.code,
      discount: coupon?.discount,
      discountType: coupon?.discount_type,
      freeShipping: coupon?.free_shipping
    }))
  });
}