const Button = ({ children, variant = "standard", className="" }) => {
  const css = {
    standard: "bg-brand-default hover:bg-brand-light text-white font-medium",
    outlined:
      "text-brand-default border-brand-default hover:text-brand-lighter hover:border-brand-lighter border",
  };
  return (
    <button
      className={`${css[variant]} ${className} px-4 py-2 block rounded transition hover:font-semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
