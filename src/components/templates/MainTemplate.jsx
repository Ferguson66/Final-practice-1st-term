import Text from "../atoms/Text";
import "./MainTemplate.css";

// Page layout: header slot + main content + footer. No real data here.
function MainTemplate({ header, children }) {
  return (
    <div className="main-template">
      {header}
      <main className="main-template__content">{children}</main>
      <footer className="main-template__footer">
        <Text muted>
          Data from the unofficial Studio Ghibli API (ghibliapi.vercel.app).
        </Text>
      </footer>
    </div>
  );
}

export default MainTemplate;
