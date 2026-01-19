import * as React from "react"
import { cn } from "@/lib/utils"

const Heading1 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className
        )}
        {...props}
    />
))
Heading1.displayName = "Heading1"

const Heading2 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            className
        )}
        {...props}
    />
))
Heading2.displayName = "Heading2"

const Heading3 = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className
        )}
        {...props}
    />
))
Heading3.displayName = "Heading3"

const Paragraph = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
    />
))
Paragraph.displayName = "Paragraph"

export { Heading1, Heading2, Heading3, Paragraph }
