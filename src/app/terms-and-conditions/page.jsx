export default function TermsAndConditions() {

  return (
    <div className="terms-and-conditions-page policy-page no-pb px-10 py-16 md:px-[10vw] bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8">
        Terms and Conditions
      </h1>

      <p className="mb-6">
        Welcome to Jiaara Jewellery. By accessing and using our website,
        <a href="/" className="text-primaryFont hover:underline ml-1">
          www.jiaarajewellery.com
        </a>
        , you agree to comply with and be bound by the following terms and
        conditions. Please read them carefully before engaging in any
        transactions or using our services.
      </p>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
        <ul className="space-y-4">
          <li>
            <strong className="font-semibold">Ownership:</strong> The website is
            owned and operated by Jiaara Jewellery.
          </li>
          <li>
            <strong className="font-semibold">Eligibility:</strong> By using
            this website, you confirm that you are at least 18 years old or have
            parental/guardian consent.
          </li>
          <li>
            <strong className="font-semibold">Changes to Terms:</strong> Jiaara
            Jewellery reserves the right to update these terms at any time.
            Changes will be effective immediately upon being posted on the
            website.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          2. Products and Services
        </h2>
        <ul className="space-y-4">
          <li>
            <strong className="font-semibold">Product Descriptions:</strong> We
            strive to provide accurate information about our products. However,
            minor variations in colour or appearance may occur due to
            photography or screen display differences.
          </li>
          <li>
            <strong className="font-semibold">Pricing:</strong> All prices are
            listed in INR and include GST unless otherwise stated. Jiaara
            Jewellery reserves the right to modify prices without prior notice.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Orders and Payments</h2>
        <ul className="space-y-4">
          <li>
            <strong className="font-semibold">Payment Options:</strong>
          </li>
          <ul className="ml-8 list-disc space-y-2">
            <li>Indian Customers: UPI, Credit/Debit Cards, and Net Banking.</li>
            <li>
              International Customers: Stripe or Bank Transfer (processed in
              INR).
            </li>
          </ul>
          <li>
            <strong className="font-semibold">Order Confirmation:</strong>{" "}
            Orders are confirmed only after payment is received.
          </li>
          <li>
            <strong className="font-semibold">Cancellation:</strong> Orders
            cannot be cancelled once placed. Please review carefully before
            confirming.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          4. Shipping and Delivery
        </h2>
        <ul className="space-y-4">
          <li>
            <strong className="font-semibold">Shipping:</strong>
          </li>
          <ul className="ml-8 list-disc space-y-2">
            <li>
              Free shipping is available for orders above ₹599 within India.
            </li>
            <li>
              Domestic orders are shipped within 1-3 working days after payment
              confirmation.
            </li>
            <li>International orders are processed within 3-5 working days.</li>
          </ul>
          <li>
            <strong className="font-semibold">Delivery Timelines:</strong>
          </li>
          <ul className="ml-8 list-disc space-y-2">
            <li>Metros: 2-5 working days after dispatch.</li>
            <li>Remote locations: 5-7 working days.</li>
          </ul>
          <li>
            <strong className="font-semibold">Responsibility:</strong> While we
            ensure timely dispatch, we are not liable for courier delays but
            will assist in tracking and resolving issues.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          5. Return, Refund, and Cancellation Policy
        </h2>
        <ul className="space-y-4">
          <li>
            <strong className="font-semibold">Returns:</strong>
          </li>
          <ul className="ml-8 list-disc space-y-2">
            <li>
              Customers can request a return within 7 days of receiving the
              product by contacting{" "}
              <a
                href="mailto:jiaaracreations@gmail.com"
                className="text-primaryFont hover:underline"
              >
                jiaaracreations@gmail.com
              </a>
              .
            </li>
            <li>Return requests made after 7 days will not be accepted.</li>
          </ul>
          <li>
            <strong className="font-semibold">Refunds:</strong>
          </li>
          <ul className="ml-8 list-disc space-y-2">
            <li>
              Approved refunds are issued as store credit redeemable for future
              purchases.
            </li>
            <li>
              Direct refunds to bank accounts are not provided, except for
              damaged products where the item is out of stock.
            </li>
          </ul>
          <li>
            <strong className="font-semibold">Damaged Products:</strong>
          </li>
          <ul className="ml-8 list-disc space-y-2">
            <li>
              A clear unboxing video is mandatory to validate claims for damaged
              items.
            </li>
            <li>
              If valid, a replacement or refund will be issued based on stock
              availability.
            </li>
          </ul>
        </ul>
      </section>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          6. Privacy and Data Usage
        </h2>
        <ul className="space-y-4">
          <li>
            <strong className="font-semibold">Data Collection:</strong> We
            collect personal information such as name, contact details, and
            payment information to process orders and improve services.
          </li>
          <li>
            <strong className="font-semibold">Data Security:</strong> We
            implement safeguards to protect your data from unauthorised access
            or disclosure.
          </li>
          <li>
            <strong className="font-semibold">Cookies:</strong> Cookies are used
            to enhance your browsing experience. You can manage cookie
            preferences through browser settings.
          </li>
          <li>
            For detailed information, refer to our{" "}
            <a href="/privacy-policy" className="text-primaryFont hover:underline">
              Privacy Policy
            </a>
            .
          </li>
        </ul>
      </section>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          7. Liability and Disclaimer
        </h2>
        <ul className="space-y-4">
          <li>
            <strong className="font-semibold">Limitation of Liability:</strong>{" "}
            Jiaara Jewellery is not responsible for:
          </li>
          <ul className="ml-8 list-disc space-y-2">
            <li>Any indirect, incidental, or consequential damages.</li>
            <li>
              Issues arising from the use of third-party services integrated
              with our website.
            </li>
          </ul>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
        <ul className="space-y-4">
          <li>
            All content on the website, including images, text, logos, and designs, is the property of Jiaara Jewellery and is protected by applicable copyright and trademark laws.
          </li>
          <li>
            Reproduction, distribution, or unauthorized use of any content is strictly prohibited.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">9. Governing Law and Jurisdiction</h2>
        <ul className="space-y-4">
          <li>
            These terms and conditions are governed by and construed in accordance with the laws of India.
          </li>
          <li>
            Any disputes arising out of or related to the use of this website will be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan, India.
          </li>
        </ul>
      </section>

      <hr className="border-gray-300 my-6" />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
        <ul className="space-y-4">
          <li>
            For any queries or assistance, you can contact us at:
            <a href="mailto:jiaaracreations@gmail.com" className="text-primaryFont hover:underline ml-1">jiaaracreations@gmail.com</a>
          </li>
          <li>
            Alternatively, reach out to us via our social media channels or the contact form available on our website.
          </li>
        </ul>
      </section>
    </div>
  );
}