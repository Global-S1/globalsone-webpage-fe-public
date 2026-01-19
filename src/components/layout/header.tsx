"use client"

import * as React from "react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { usePathname } from "@/i18n/routing"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { navigation } from "@/content/site/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import LocaleSwitcher from "@/components/shared/locale-switcher"
import { Button } from "@/components/ui/button"

export function Header() {
    const t = useTranslations('nav')
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tighter text-brand-charcoal dark:text-white">
                        Global S1
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-brand-red",
                                pathname === item.href
                                    ? "text-brand-red font-semibold"
                                    : "text-muted-foreground"
                            )}
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <ThemeToggle />
                    <LocaleSwitcher />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <LocaleSwitcher />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-b bg-background"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-medium py-2 transition-colors",
                                        pathname === item.href
                                            ? "text-brand-red font-semibold"
                                            : "text-foreground"
                                    )}
                                >
                                    {t(item.key)}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
