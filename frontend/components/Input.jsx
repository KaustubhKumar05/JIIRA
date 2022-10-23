const Input = ({
  type = "text",
  className = "",
  placeholder = "",
  required = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className={`rounded bg-transparent border border-bord-default focus:outline-brand-light p-2 focus:outline text-white px-4 py-2 ${className}`}
    />
  );
};

export default Input;
