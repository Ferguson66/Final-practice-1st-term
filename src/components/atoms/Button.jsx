import "./Button.css";

function Button({ variant = "primary", onClick, children }) {
  return (
    <button
      type="button"
      className={`button button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
