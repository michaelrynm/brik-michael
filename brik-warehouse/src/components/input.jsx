import React from "react";

export default function Input(props) {
  const {
    label,
    type,
    placeholder,
    className,
    onChange,
    value,
    register,
    name,
    defaultValue,
  } = props;
  return (
    <div>
      <div>
        <label htmlFor="" className="font-medium">
          {label}
        </label>
      </div>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={`input input-bordered border-gray-200 rounded-md bg-white shadow-xl w-full ${className}`}
          value={value}
          onChange={onChange}
          name={name}
          {...(register
            ? register(name, {
                valueAsNumber: type === "number" ? true : false,
              })
            : {})}
        />
      </div>
    </div>
  );
}
