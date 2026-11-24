import "./Text.css";

function Text({ muted = false, light = false, clamp = false, children }) {
  let className = "text";
  if (muted) className += " text--muted";
  if (light) className += " text--light";
  if (clamp) className += " text--clamp";
  return <p className={className}>{children}</p>;
}

export default Text;
