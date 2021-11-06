import "./Input.css";

function InputText({
  type,
  id,
  placeholder,
  onInputChange,
  disabled,
  onClick,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onInputChange(e)}
      disabled={disabled}
      id={id}
      onClick={onClick}
    />
  );
}

export default InputText;
