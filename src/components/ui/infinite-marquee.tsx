"use client"

import { cn } from "@/lib/utils"

interface InfiniteMarqueeProps {
    items: string[]
    speed?: number
    className?: string
    pauseOnHover?: boolean
}

export function InfiniteMarquee({
    items,
    speed = 40,
    className,
    pauseOnHover = false,
}: InfiniteMarqueeProps) {
    return (
        <div
            className={cn(
                "relative flex w-full overflow-hidden bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border-y border-slate-200/50 dark:border-slate-800/50 py-4 mb-10 select-none group",
                className
            )}
        >
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            {/* Wrapper to hold the rolling elements */}
            <div className={cn(
                "flex min-w-full shrink-0 gap-8 animate-marquee items-center",
                pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
                style={{ animationDuration: `${speed}s` }}
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm min-w-fit"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                        <span className="text-sm font-bold text-brand-charcoal dark:text-white uppercase tracking-wider whitespace-nowrap">
                            {item}
                        </span>
                    </div>
                ))}
            </div>

            <div
                aria-hidden="true"
                className={cn(
                    "flex min-w-full shrink-0 gap-8 animate-marquee items-center",
                    pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
                style={{ animationDuration: `${speed}s` }}
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm min-w-fit"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                        <span className="text-sm font-bold text-brand-charcoal dark:text-white uppercase tracking-wider whitespace-nowrap">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
