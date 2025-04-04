import { createContext, useContext, useEffect, useState } from "react"

// Create theme context with default values
const ThemeContext = createContext({
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "light",
})

export function ThemeProvider({ 
  children, 
  defaultTheme = "system", 
  storageKey = "vite-ui-theme", 
  ...props 
}) {

  
  // Initialize theme state from localStorage or default
  const [theme, setTheme] = useState(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      // Try to get theme from localStorage
      const storedTheme = localStorage.getItem(storageKey)
      return storedTheme || defaultTheme
    }
    return defaultTheme
  })
  
  // Track the resolved theme (actual light/dark value)
  const [resolvedTheme, setResolvedTheme] = useState("light")
  
  // Function to determine the resolved theme (either direct theme or system preference)
  const resolveTheme = (currentTheme) => {
    if (currentTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return currentTheme
  }
  
  // Apply theme effect
 // Apply theme effect
useEffect(() => {
  // Get the document root element
  const root = window.document.documentElement
  
  // Determine the actual theme to use
  const newResolvedTheme = resolveTheme(theme)
  setResolvedTheme(newResolvedTheme)
  
  // Debug - log current state
  console.log("Current theme:", theme)
  console.log("Resolved theme:", newResolvedTheme)
  
  // Remove both theme classes
  root.classList.remove("light", "dark")
  
  // Add the appropriate class
  root.classList.add(newResolvedTheme)
  
  // Force stylesheet update - ADD THIS LINE
  document.body.style.colorScheme = newResolvedTheme
  
  // Store theme preference in localStorage
  localStorage.setItem(storageKey, theme)
}, [theme, storageKey])
  
  // Listen for system theme changes
  useEffect(() => {
    if (theme !== "system") return
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    // Handle media query change
    const handleChange = () => {
      const root = window.document.documentElement
      const newResolvedTheme = mediaQuery.matches ? "dark" : "light"
      
      setResolvedTheme(newResolvedTheme)
      root.classList.remove("light", "dark")
      root.classList.add(newResolvedTheme)
      
      console.log("System theme changed to:", newResolvedTheme)
    }
    
    // Listen for changes
    mediaQuery.addEventListener("change", handleChange)
    
    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])
  
  // Create context value object
  const value = {
    theme,
    setTheme: (newTheme) => {
      console.log("Setting theme to:", newTheme)
      setTheme(newTheme)
    },
    resolvedTheme,
  }
  
  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook for accessing theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}