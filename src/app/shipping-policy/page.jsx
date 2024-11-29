export default function ShippingPolicy() {

  return (
    <div className="shipping-policy-page policy-page px-10 py-16 md:px-[10vw] bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">Shipping Policy</h1>
      <p className="mb-6">
        At Jiaara Jewellery, we strive to ensure a smooth and reliable delivery
        experience for all our customers. Please review our shipping terms and
        guidelines to understand how we handle domestic and international
        orders, delivery timelines, and payment options.
      </p>
      <hr className="my-8 border-gray-300" />
      
      <h2 className="text-2xl font-semibold mb-4">1. Shipping Within India:</h2>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>
          Shipping is free for orders above &#8377;599, and GST is already included in the MRP.
        </li>
        <li>
          Orders are usually shipped within 1-3 working days after payment
          confirmation. Once your order is processed, a personalised
          confirmation email will be sent.
        </li>
        <li>
          Our account executive will notify you promptly if an item is out of stock.
        </li>
      </ul>
      <hr className="my-8 border-gray-300" />
      
      <h2 className="text-2xl font-semibold mb-4">2. Delivery Timeframes:</h2>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>
          <strong>Metros (ROI):</strong> 2-5 working days (from the day after shipping).
        </li>
        <li>
          <strong>Remote Locations:</strong> 5-7 working days.
        </li>
        <li>
          While we ensure timely shipping, Jiaara Jewellery is not responsible
          for unexpected courier delays. However, we will actively assist in
          tracking and resolving delays.
        </li>
      </ul>
      <hr className="my-8 border-gray-300" />
      
      <h2 className="text-2xl font-semibold mb-4">3. Payment Options:</h2>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>
          <strong>Indian Customers:</strong> Pay via Razorpay, UPI, Credit/Debit Cards, or Net Banking during checkout.
        </li>
        <li>
          <strong>International Customers:</strong> Pay using Razorpay, Stripe, or Bank Transfer. Currently, international
          payments are processed via Bank Transfer only, in Indian currency, to our Indian bank account.
        </li>
      </ul>
      <hr className="my-8 border-gray-300" />
      
      <h2 className="text-2xl font-semibold mb-4">
        4. Important Notes for Indian Shipping:
      </h2>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>Actively track your parcels to ensure timely delivery.</li>
        <li>
          Ensure someone is available to receive the parcel at the delivery
          address. For non-residential addresses (e.g., offices, hotels),
          customers must coordinate with the relevant collection point or
          courier agency.
        </li>
        <li>
          If no one is available at the delivery address, the courier may not
          make calls. After 1-3 attempts, the parcel will be held at the
          nearest hub. Customers must arrange collection or request
          redelivery. Return-to-sender parcels will incur additional shipping
          costs for reshipment.
        </li>
        <li>
          Fill in the complete delivery address, including the PIN code and
          the correct state, to avoid delays.
        </li>
        <li>
          For delivery-related queries, email{" "}
          <a
            href="mailto:jiaaracreations@gmail.com"
            target="_blank"
            className="text-primaryFont underline"
          >
            jiaaracreations@gmail.com
          </a>{" "}
          or WhatsApp{" "}
          <a href="tel:+916396872895" className="text-primaryFont underline">
            +91-6396872895
          </a>
          . If you require delivery on a specific date, mention it in the
          &quot;Notes&quot; section while placing your order.
        </li>
      </ul>
      <hr className="my-8 border-gray-300" />
      
      <h2 className="text-2xl font-semibold mb-4">
        5. Shipping Terms – International Customers:
      </h2>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>Paid orders are processed within 3-5 working days.</li>
        <li>
          Any additional shipping costs will be communicated before dispatch
          and must be borne by the customer.
        </li>
        <li>
          Delivery dates are tentative and may vary due to external factors
          such as holidays or customs delays. Jiaara Jewellery is not liable
          for such delays but will provide the necessary support.
        </li>
        <li>
          Customers are responsible for any clearance fees, duties, or taxes
          levied at their destination, as well as additional charges for
          interior locations.
        </li>
        <li>
          Customers should handle parcel tracking and follow-up with the
          courier. We will assist and guide as needed.
        </li>
      </ul>
      <p className="mt-6 text-gray-700">
        For further assistance, reach out to us at{" "}
        <a
          href="mailto:jiaaracreations@gmail.com"
          target="_blank"
          className="text-primaryFont underline"
        >
          jiaaracreations@gmail.com
        </a>{" "}
        or WhatsApp at{" "}
        <a href="tel:+916396872895" className="text-primaryFont underline">
          +91-6396872895
        </a>
        .
      </p>
    </div>
  );
}