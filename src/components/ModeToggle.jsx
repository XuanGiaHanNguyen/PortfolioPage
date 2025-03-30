import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/Button"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  
  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }
  
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
  )
}