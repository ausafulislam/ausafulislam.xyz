"use client"
import { cn } from "@/lib/utils"
import type React from "react"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  ...props
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle className="stroke-black/10 stroke-1 dark:stroke-white/10" cx="50%" cy="50%" r={radius} fill="none" />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full",
          {
            reverse: reverse,
          },
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "flex h-full w-full transform-gpu items-center justify-center rounded-full border bg-black/10 dark:bg-white/10",
            "animate-orbit",
            { reverse: reverse },
          )}
          style={
            {
              "--duration": duration,
              "--radius": radius,
              "--delay": -delay,
            } as React.CSSProperties
          }
        >
          {children}
        </div>
      </div>
    </>
  )
}
