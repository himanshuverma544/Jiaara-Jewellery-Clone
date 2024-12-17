export default function CustomerDetails({ className = "", customer }) {

  return (
    <div className={`customer-details w-full flex flex-col gap-3 md:flex-row md:flex-between md:gap-16 ${className}`}>
      
      <div className="contact flex flex-col gap-2 md:w-1/2">
        <div className="heading text-sm font-medium xs:text-base">
          Contact
        </div>
        <div className="details flex flex-col gap-1 text-xs xs:text-sm">
          <div className="email flex flex-wrap justify-between">
            <span className="label">
              Email:
            </span>
            <span className="value">
              {customer?.contact?.email}
            </span>
          </div>
          <div className="contact-number flex flex-wrap justify-between">
            <span className="label">
              Contact Number:
            </span>
            <span className="value">
              {customer?.contact?.contactNumber}
            </span>
          </div>
        </div>
      </div>

      <div className="address flex flex-col gap-2 md:w-1/2">
        <div className="heading text-sm font-medium xs:text-base">
          Address
        </div>
        <div className="details flex flex-wrap gap-1 text-xs capitalize xs:text-sm">
          <span className="address">
            {`${customer?.address?.address},`}
          </span>
          {customer?.address?.additionalAddress &&
            <span className="additional-address normal-case">
              {`${customer?.address?.additionalAddress},`}
            </span>
          }
          <span className="city">
            {`${customer?.address?.city},`}
          </span>
          <span className="state">
            {`${customer?.address?.state},`}
          </span>
          <span className="country">
            {`${customer?.address?.country} - `}
          </span>
          <span className="pin-code">
            {customer?.address?.pinCode}
          </span>
        </div>
      </div>
    </div>
  );
}
