import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const badgeVariants = {
  variant: {
    default: "border-transparent bg-blue-900 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    secondary:
      "border-transparent py-1 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
    achivement:
      "border-transparent py-1 bg-blue-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700",
    outline: "text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700",
  },
}

export const Badge = forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        badgeVariants.variant[variant],
        className,
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

