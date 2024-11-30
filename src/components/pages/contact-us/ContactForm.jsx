'use client';

import { useForm } from 'react-hook-form';

import InputField from "@/components/general/InputField";


export default function ContactForm({ className = "" }) {

  const onSubmit = data => {
    console.log(data);
  };

  const { handleSubmit } = useForm();
  

  return (
    <form
      className={`flex flex-col gap-5 ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-heading text-2xl font-semibold sm:text-2xl">
        Have an enquiry?
      </div>

      <InputField
        input={{
          id: "first-name",
          className: "w-full px-3 py-2 border rounded-md border-gray-500 input-selection-black focus:ring-black hover:ring-gray-700",
          required: true
        }}
        label={{
          className: "text-sm",
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
          className: "w-full px-3 py-2 border rounded-md border-gray-500 input-selection-black focus:ring-black hover:ring-gray-700",
          required: true
        }}
        label={{
          className: "text-sm",
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
          className: "w-full px-3 py-2 border rounded-md border-gray-500 input-selection-black focus:ring-black hover:ring-gray-700",
          required: true
        }}
        label={{
          className: "text-sm",
          text: "Email Address"
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
          className: "w-full px-3 py-2 border rounded-md border-gray-500 input-selection-black focus:ring-black hover:ring-gray-700",
          min: 0,
          required: true
        }}
        label={{
          className: "text-sm",
          text: "Contact Number"
        }}
        validation={{
          isEnabled: true,
          messages: {
            required: "Contact Number is required."
          }
        }}
      />

      <InputField
        input={{
          id: "message",
          type: "textarea",
          inputName: "message",
          className: "w-full px-3 py-2 border rounded-md border-gray-500 input-selection-black focus:ring-black hover:ring-gray-700",
          rows: 5,
          required: true
        }}
        label={{
          className: "text-sm",
          text: "Your Message"
        }}
        validation={{
          isEnabled: true,
          messages: {
            required: "Message is required."
          }
        }}
      />

      <button
        className="w-fit flex px-3 py-2 rounded-md text-sm bg-black text-white"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}