import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      id="theme-toggle"
      className="btn btn-outline-light btn-sm ms-2"
      onClick={toggleTheme}
    >
      <i
        className={theme === "light" ? "bi bi-moon-fill" : "bi bi-sun-fill"}
      ></i>
    </button>
  );
};
