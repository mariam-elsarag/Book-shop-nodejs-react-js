import React from "react";
import ErrorMessage from "./ErrorMessage";
const Textarea = ({
  id,
  label,
  value: inputValue,
  type,
  placeholder,
  error,
  handleChange,
  refrence,
  disabled = false,
}) => {
  return (
    <div className="grid gap-2 ">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <textarea
        ref={refrence}
        type={type}
        id={id}
        value={inputValue}
        className={`resize-none input ${error ? "input-error" : null} `}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Textarea;
