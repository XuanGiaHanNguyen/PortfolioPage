import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/Button"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  
  // Toggle between light and dark mode
  const toggleTheme = () => {
    console.log("Toggle clicked. Current resolvedTheme:", resolvedTheme);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="rounded-full" 
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">
        {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
      </span>
    </Button>
  );
}

// Fixed toggle component
export function FixedModeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Toggle between light, dark, and system modes
  const toggleTheme = () => {
    console.log("Fixed toggle clicked. Current theme:", theme);
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };
  
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="rounded-full" 
      onClick={toggleTheme}
      aria-label={`Current mode: ${theme}. Click to cycle modes.`}
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Laptop className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">
        {theme === "light" ? "Light mode" : theme === "dark" ? "Dark mode" : "System mode"}
      </span>
    </Button>
  );
}