import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export function Footer() {
    const t = useTranslations('nav')
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="text-center md:text-left">
                        <span className="text-lg font-bold tracking-tighter text-brand-charcoal dark:text-white">
                            Global S1
                        </span>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Global S1. All rights reserved.
                            {process.env.NEXT_PUBLIC_APP_VERSION && (
                                <span className="ml-2 text-xs opacity-70">
                                    v{process.env.NEXT_PUBLIC_APP_VERSION}
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {/* Simple footer links for now */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
