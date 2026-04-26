import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { bulb_on } from "../assets/icons";

const Theme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <section
      id="theme"
      className="card col-span-1 row-span-2"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      <img
        className="icon"
        src={theme == "dark" ? bulb_on : bulb_on}
        alt="theme"
      />
    </section>
  );
};

export default Theme;
