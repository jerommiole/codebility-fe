"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"


import { cn } from "@/lib/utils"


const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden rounded-full justify-center items-center",
      className
    )}
    {...props}

  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName













export { Avatar }
