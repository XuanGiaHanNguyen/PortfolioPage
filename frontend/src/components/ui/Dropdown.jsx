import { forwardRef } from "react"
import { cn } from "../../lib/utils"

export const Dropdown = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50",
      className,
    )}
    {...props}
  />
))
Dropdown.displayName = "Dropdown"
