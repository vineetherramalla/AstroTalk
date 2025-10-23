
import { useEffect } from "react";

export const ThemeSwitcher = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  
  return (
    <button
      type="button"
      className="transition-smooth hover:bg-primary/10 bg-transparent p-2 rounded"
      aria-label="Theme"
    >
      
    </button>
  );
};
