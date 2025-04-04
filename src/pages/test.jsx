import React from "react";
import { useTheme } from "../components/ThemeProvider";
import { Button } from "../components/ui/Button";
import { Moon, Sun, Laptop } from "lucide-react";
import { ModeToggle, FixedModeToggle } from "../components/ModeToggle";


export default function ThemeTestPage() {
    
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Simple direct theme setters
  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");
  const setSystemTheme = () => setTheme("system");

  return (
    <div className="min-h-screen transition-colors duration-200">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Theme Testing Page</h1>
        
        {/* Theme Information */}
        <div className="p-4 border rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Current Theme State:</h2>
          <p><strong>Theme setting:</strong> {theme}</p>
          <p><strong>Resolved theme:</strong> {resolvedTheme}</p>
          <p><strong>Local storage value:</strong> {typeof window !== 'undefined' ? localStorage.getItem("vite-ui-theme") : 'N/A'}</p>
          <p><strong>HTML root classes:</strong> {typeof document !== 'undefined' ? document.documentElement.classList.toString() : 'N/A'}</p>
        </div>

        {/* Theme Switchers */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Theme Controls:</h2>
          
          {/* Direct theme buttons */}
          <div className="flex gap-3 mb-4">
            <Button 
              onClick={setLightTheme} 
              variant={theme === "light" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <Sun size={16} />
              Light
            </Button>
            
            <Button 
              onClick={setDarkTheme} 
              variant={theme === "dark" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <Moon size={16} />
              Dark
            </Button>
            
            <Button 
              onClick={setSystemTheme} 
              variant={theme === "system" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <Laptop size={16} />
              System
            </Button>
          </div>
          
          {/* Original toggle button */}
          <div className="mb-4">
            <h3 className="text-lg mb-2">Your Toggle Button:</h3>
            <ModeToggle />
          </div>
          
          {/* Fixed toggle button */}
          <div>
            <h3 className="text-lg mb-2">Fixed Toggle Button:</h3>
            <FixedModeToggle />
          </div>
        </div>
        
        {/* Visual Test Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white">
            <h3 className="text-lg font-medium mb-2">Test Card 1</h3>
            <p>This card uses direct Tailwind dark mode classes.</p>
          </div>
          
          <div className="p-6 border rounded-lg bg-card text-card-foreground">
            <h3 className="text-lg font-medium mb-2">Test Card 2</h3>
            <p>This card uses theme CSS variables (if configured).</p>
          </div>
        </div>
      </div>
    </div>
  );
}

