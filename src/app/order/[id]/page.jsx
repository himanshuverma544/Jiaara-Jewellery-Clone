import ManageOrderConfirmation from "@/components/pages/order-confirmation/ManageOrderConfirmation";


export default function Order({ params }) {

  return (
    <div className="order-confirmation-page p-5">
      <ManageOrderConfirmation
        className="p-5 xs:p-10 rounded-md bg-white"
        params={params}
      />
    </div>
  );
}
