import { useState, useEffect, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/Button"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  // Handle outside clicks to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Toggle dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  
  // Apply a theme and close dropdown
  const applyTheme = (selectedTheme) => {
    console.log("Applying theme:", selectedTheme)
    setTheme(selectedTheme)
    setIsOpen(false)
  }
  
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle button */}
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full" 
        onClick={toggleDropdown}
        aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 z-50 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              className={`w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === "light" ? "bg-gray-100 dark:bg-gray-700 font-medium" : ""
              }`}
              onClick={() => applyTheme("light")}
            >
              Light
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === "dark" ? "bg-gray-100 dark:bg-gray-700 font-medium" : ""
              }`}
              onClick={() => applyTheme("dark")}
            >
              Dark
            </button>
            <button
              className={`w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === "system" ? "bg-gray-100 dark:bg-gray-700 font-medium" : ""
              }`}
              onClick={() => applyTheme("system")}
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  )}