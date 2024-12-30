'use client';

import { useRouter } from 'next/navigation';

import { useEffect, useContext } from 'react';

import { context } from "@/context-API/context";
import { storeData } from "@/context-API/actions/action.creators";

import { useForm, FormProvider } from 'react-hook-form';

import AutoSelect from '@/components/general/AutoSelect';
import InputField from '@/components/general/InputField';

import { createOrder } from "@/utils/functions/api/cms/woocommerce/orders";

import { ORDER } from '@/routes';

import { indianStates } from '@/utils/constants';


export default function CheckoutForm({ className = "", currentItems = [], clearItems = () => {} }) {

  const router = useRouter();

  const { dispatch, data: { triggered } = {}, data: { objects } = {} } = useContext(context);

  const checkout = (triggered && objects?.checkout) || {};

  const methods = useForm({ mode: "onChange" });
  

  const theOnSubmitCheckoutForm = async (data) => {

    const formData = {
      first_name: data?.firstName,
      last_name: data?.lastName,
      email: data?.email,
      address_1: data?.address,
      address_2: data?.additionalAddress,
      city: data?.city,
      state: data?.state,
      postcode: data?.pinCode,
      country: 'IN',
      phone: data?.contactNumber
    };
    
    const couponCode =
      (
        checkout?.couponData &&
        Object.keys(checkout?.couponData).length > 0
      ) && checkout?.couponData?.couponCode;


    const orderData = {
      payment_method: 'cod',
      payment_method_title: 'Cash on delivery',
      set_paid: false,
      billing: formData,
      shipping: formData,
      line_items: currentItems?.map(currentItem => ({
        product_id: currentItem?.id,
        quantity: currentItem?.cartQtyCount
      }))
    };

    if (couponCode) {
      orderData.coupon_lines = [
        {
          code: couponCode
        }
      ];
    }

    try {
      const { data: { orderId } } = await createOrder(orderData);

      if (orderId) {

        dispatch(
          storeData({
            checkout: {
              ...checkout,
              orderNavigationFlag: true
            }
          }, "objects")
        );

        clearItems();
        router.push(ORDER.getPathname(orderId));
      }
    }
    catch(error) {
      console.error("Error receiving the order.", error);
    }
  }

  
  useEffect(() => {

    function storeComponentData() {

      const haveErrors = Object.keys(methods?.formState?.errors || {})?.length > 0;

      dispatch(
        storeData({
          checkout: {
            ...checkout,
            haveErrors,
            onSubmitCheckoutForm: methods?.handleSubmit(theOnSubmitCheckoutForm)
          }
        }, "objects")
      );
    }

    storeComponentData();

  }, [methods?.formState?.errors]);


  return (
    <FormProvider { ...methods}>
      <form
        id="the-checkout-form"
        className={`checkout-form flex flex-col gap-10 px-[8vw] ${className}`}
        onSubmit={methods?.handleSubmit(theOnSubmitCheckoutForm)}
      >
        <div className="form-group flex flex-col gap-5">
          <div className="form-group-heading text-xl text-primaryFont sm:text-2xl">
            Contact Information
          </div>

          <InputField
            input={{
              id: "first-name",
              inputName: "firstName",
              className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
              required: true
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "First Name"
            }}
            validation={{
              isEnabled: true,
              messages: {
                required: "First Name is required."
              }
            }}
          />

          <InputField
            input={{
              id: "last-name",
              inputName: "lastName",
              className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
              required: true
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "Last Name"
            }}
            validation={{
              isEnabled: true,
              messages: {
                required: "Last Name is required."
              }
            }}
          />

          <InputField
            input={{
              id: "email",
              inputName: "email",
              type: "email",
              className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
              required: true
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "Email"
            }}
            validation={{
              isEnabled: true,
              messages: {
                required: "Email is required.",
                invalidEmail: "Invalid email address."
              }
            }}
          />

          <InputField
            input={{
              id: "contact-number",
              inputName: "contactNumber",
              type: "number",
              className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
              min: 0,
              required: true,
              minLength: 10,
              maxLength: 13
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "Contact Number"
            }}
            validation={{
              isEnabled: true,
              messages: {
                required: "Contact Number is required.",
                minLength: "Below minimum length",
                maxLength: "Exceeds maximum length",
                min: "Value is too low."
              }
            }}
          />
        </div>

        <div className="form-group flex flex-col gap-5">
          
          <div className="form-group-heading text-xl text-primaryFont sm:text-2xl">
            Delivery Information
          </div>

          <InputField
            input={{
              id: "address",
              inputName: "address",
              className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
              required: true
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "Address"
            }}
            validation={{
              isEnabled: true,
              messages: {
                required: "Address is required."
              }
            }}
          />

          <InputField
            input={{
              id: "additional-address",
              inputName: "additionalAddress",
              className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "Apartment, suit, etc."
            }}
          />
          
          <InputField
            input={{
              id: "city",
              inputName: "city",
              className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
              required: true
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "City"
            }}
            validation={{
              isEnabled: true,
              messages: {
                required: "City is required."
              }
            }}
          />

          <AutoSelect
            className="w-full"
            input={{
              id: "states-auto-select",
              inputName: "state",
              className: "w-[inherit] border rounded-md p-3 text-sm border-quaternaryBackground input-selection-primaryFont hover:ring-secondaryBackground focus:ring-primaryFont",
              placeholder: "Select State",
              autoComplete: "off",
              required: true,
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "State"
            }}
            options={indianStates}
            dropdownClassName="max-h-[16rem] border rounded overflow-y-auto text-sm border-quaternaryBackground bg-white"
            optionClassName={{
              hover: "hover:bg-quinaryBackground",
              selection: "bg-primaryFont text-white hover:text-white"
            }}
            validation={{
              isEnabled: true,
              messages: {
                required: "State is required."
              }
            }}
          />

          <InputField
            input={{
              id: "pin-code",
              inputName: "pinCode",
              className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
              type: "number",
              min: 0,
              required: true
            }}
            label={{
              className: "text-sm text-primaryFont",
              text: "PIN Code"
            }}
            validation={{
              isEnabled: true,
              messages: {
                required: "PIN Code is required.",
                min: "Value is too low."
              }
            }}
          />
        </div>
      </form>
    </FormProvider>
  );
}
