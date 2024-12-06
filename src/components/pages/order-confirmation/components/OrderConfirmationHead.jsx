import Icon from "@/components/general/Icon";


const ASSETS_DIR = '/assets/icons';


export default function OrderConfirmationHead({ className = "" }) {

  return (
    <div className={`order-confirmation-head flex flex-col items-center justify-center gap-5 ${className}`}>
      <Icon
        className="confirmation-symbol size-[45px] relative"
        icon={`${ASSETS_DIR}/confirmation.png`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="confirmation-message flex flex-col items-center justify-center text-center">
        <div className="text-lg font-medium xs:text-xl">
          Thank You
        </div>
        <div className="text-lg font-medium xs:text-xl">
          Your order has been received.
        </div>
        <div className="text-xs mt-5 xs:text-sm">
          We&apos;ll send tracking info when your order ships.
        </div>
      </div>
    </div>
  );
}
