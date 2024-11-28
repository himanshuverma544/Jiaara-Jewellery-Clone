import { useForm } from 'react-hook-form';

import Icon from "./Icon";

const Content = Icon;


export default function InputField({
  className = "",
  onClick = () => {},

  input = {
    ref: null,
    id: "",
    inputName: "",
    type: "text",
    className: "",
    placeholder: "",
    value: "",
    icon: {
      className: "",
      theIcon: <></>
    },
    options: [{
      inputGroupClassName: "",
      value: "",
      label: {
        className: "",
        textClassName: "",
        text: "",
      },
      disabled: false
    }],
    autoComplete: "on",
    autoFocus: false,
    required: false,
    maxLength: undefined,
    min: undefined,
    max: undefined,
    readOnly: false,
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
    ...(input?.required && {
      required: validation?.messages?.required
    }),

    ...(input?.type === "email" && {
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: validation?.messages?.invalidEmail
      }
    }),

    ...(input?.maxLength && {
      maxLength: {
        value: input?.maxLength,
        message: validation?.messages?.maxLength
      }
    }),

    ...(input?.min !== undefined && {
      min: {
        value: input?.min,
        message: validation?.messages?.min
      }
    }),

    ...(input?.max !== undefined && {
      max: {
        value: input?.max,
        message: validation?.messages?.max
      }
    })
  };

  return (
    <div
      className={`input-group flex flex-col gap-2 ${className}`}
      onClick={onClick}
    >
      {label?.text &&
        <label className={`${label?.className}`} htmlFor={input?.id}>
          {label?.text}
        </label>
      }
      
      {/* Checkbox and Radio */}
      {input?.type === "checkbox" || input?.type === "radio" ? (

        input?.options.map(option => 
          <div key={option?.value} className={`flex items-center ${option.inputGroupClassName}`}>
            <input
              ref={input?.ref}
              id={option?.value}
              name={input?.inputName}
              type={input?.type}
              value={option?.value}
              className={`${input?.className}`}
              disabled={option.disabled}
              {...(validation?.isEnabled && register(option?.value, {
                required: input?.required && validation?.messages?.required
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
        <div className="wrapper w-full relative flex items-center">
          <input
            ref={input?.ref}
            id={input?.id}
            name={input?.inputName}
            type={input?.type}
            className={`${input?.className} outline-none hover:ring-1 focus:ring-1`}
            placeholder={input?.placeholder}
            value={input?.value}
            autoComplete={input?.autoComplete}
            autoFocus={input?.autoFocus}
            onChange={input?.onChange}
            readOnly={input?.readOnly}
            {...(validation?.isEnabled && register(input?.id, validationRules))}
          />
          {input?.icon?.theIcon &&
            <Icon
              className={`${input?.icon?.className} absolute right-[0.8rem]`}
              icon={input?.icon?.theIcon}
            />
          }
        </div>
      )}

      {errors[input?.inputName] && (
        <p className={`error ${validation?.className}`}>
          {errors[input?.inputName].message}
        </p>
      )}
    </div>
  );
}