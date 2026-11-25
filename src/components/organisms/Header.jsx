import Title from "../atoms/Title";
import Text from "../atoms/Text";
import "./Header.css";

function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="header__inner">
        <Title level={1} light>
          {title}
        </Title>
        {subtitle && (
          <Text light>{subtitle}</Text>
        )}
      </div>
    </header>
  );
}

export default Header;
