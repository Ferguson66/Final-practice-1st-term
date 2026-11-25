import "./Title.css";

function Title({ level = 2, light = false, children }) {
  const Tag = `h${level}`;
  const className = `title title--level-${level}${light ? " title--light" : ""}`;
  return <Tag className={className}>{children}</Tag>;
}

export default Title;
