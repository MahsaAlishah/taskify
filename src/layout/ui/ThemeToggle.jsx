import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <HiOutlineSun className="w-5 h-5 text-primary-900 text-yellow-500" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-900 text-yellow-500" />
      )}
    </button>
  );
}
