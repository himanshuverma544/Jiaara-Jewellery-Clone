import { useForm } from 'react-hook-form';

import Icon from "./Icon";

const Content = Icon;


export default function InputField({
  className = "",

  input = {
    id: "",
    inputName: "",
    type: "text",
    className: "",
    placeholder: "",
    value: "",
    options: [{
      inputGroupClassName: "",
      value: "",
      label: {
        className: "",
        textClassName: "",
        text: "",
      },
    }],
    autoComplete: "on",
    autoFocus: false,
    required: false,
    maxLength: undefined,
    min: undefined,
    max: undefined,
    onChange: () => {}
  },

  label = {
    className: "",
    text: ""
  },

  validation = {
    isEnabled: false,
    className: "",
    messages: {
      required: "This field is required",
      invalidEmail: "Invalid email address",
      maxLength: "Exceeds maximum length",
      min: "Value is too low",
      max: "Value is too high"
    }
  }
}) {

  const { register, formState: { errors } } = useForm();

  const validationRules = {
    ...(input.required && {
      required: validation.messages.required
    }),

    ...(input.type === "email" && {
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: validation.messages.invalidEmail
      }
    }),

    ...(input.maxLength && {
      maxLength: {
        value: input.maxLength,
        message: validation.messages.maxLength
      }
    }),

    ...(input.min !== undefined && {
      min: {
        value: input.min,
        message: validation.messages.min
      }
    }),

    ...(input.max !== undefined && {
      max: {
        value: input.max,
        message: validation.messages.max
      }
    })
  };

  return (
    <div className={`input-group flex flex-col gap-2 ${className}`}>
      {label.text &&
        <label className={`${label.className}`} htmlFor={input.id}>
          {label.text}
        </label>
      }

      {input.type === "checkbox" || input.type === "radio" ? (

        input.options.map(option => 
          <div key={option?.value} className={`flex items-center ${option.inputGroupClassName}`}>
            <input
              id={option?.value}
              name={input.inputName}
              type={input.type}
              value={option?.value}
              className={`${input.className}`}
              {...(validation.isEnabled && register(option?.value, {
                required: input.required && validation.messages.required
              }))}
            />
            <label
              htmlFor={option?.value}
              className={`${option?.label?.className}`}
            >
              <Content
                className={`${option?.label?.textClassName}`}
                icon={option?.label?.text}
              />
            </label>
          </div>
        )

      ) : (
        <input
          id={input.id}
          name={input.inputName}
          type={input.type}
          className={`${input.className} outline-none hover:ring-1 focus:ring-1`}
          placeholder={input.placeholder}
          value={input.value}
          autoComplete={input.autoComplete}
          autoFocus={input.autoFocus}
          onChange={input.onChange}
          {...(validation.isEnabled && register(input.id, validationRules))}
        />
      )}

      {errors[input.inputName] && (
        <p className={`error ${validation.className}`}>
          {errors[input.inputName].message}
        </p>
      )}
    </div>
  );
}