import { useState } from "react";
import "./Image.css";

// Shows a placeholder if there is no src or the image fails to load.
function Image({ src, alt, shape = "poster" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`image image--${shape} image--placeholder`} role="img" aria-label={alt}>
        No image
      </div>
    );
  }

  return (
    <img
      className={`image image--${shape}`}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default Image;
