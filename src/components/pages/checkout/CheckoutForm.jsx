'use client';

import { useForm } from 'react-hook-form';
import AutoSelect from '@/components/general/AutoSelect';

import InputField from '@/components/general/InputField';


const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];


export default function CheckoutForm({ className = "" }) {

  const onSubmit = data => {
    console.log(data);
  };

  const { handleSubmit } = useForm();

  return (
    <form
      className={`contact-form flex flex-col gap-10 px-[8vw] ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-group flex flex-col gap-5">
        <div className="form-group-heading text-xl text-primaryFont sm:text-2xl">
          Contact Information
        </div>

        <InputField
          input={{
            id: "first-name",
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
              required: "Email is required."
            }
          }}
        />

        <InputField
          input={{
            id: "contact-number",
            type: "number",
            className: "w-full px-3 py-2 border rounded-md border-quaternaryBackground input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
            min: 0,
            required: true
          }}
          label={{
            className: "text-sm text-primaryFont",
            text: "Contact Number"
          }}
          validation={{
            isEnabled: true,
            messages: {
              required: "Contact Number is required."
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
            className: "w-[inherit] border rounded-md p-3 text-sm border-quaternaryBackground input-selection-primaryFont hover:ring-secondaryBackground focus:ring-primaryFont",
            placeholder: "Select State",
            autoComplete: "off",
            required: true,
          }}
          options={indianStates}
          dropdownClassName="border rounded overflow-y-auto text-sm border-quaternaryBackground bg-white"
          optionClassName={{
            hover: "hover:bg-quinaryBackground",
            selection: "bg-primaryFont text-white hover:bg-primaryFont hover:text-white"
          }}
        />

        <InputField
          input={{
            id: "pin-code",
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
              required: "PIN Code is required."
            }
          }}
        />
      </div>
    </form>
  );
}
