const TextBox = ({
  className = "",
  cols = 30,
  rows = 10,
  placeholder = "",
}) => {
  return (
    <textarea
      className={`bg-transparent border rounded border-bord-default focus:outline-brand-light p-2 focus:outline ${className}`}
      cols={`${cols}`}
      rows={`${rows}`}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextBox;
