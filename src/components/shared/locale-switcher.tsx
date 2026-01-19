"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTransition } from "react";

const locales = ['es', 'en', 'pt', 'fr', 'ja'] as const;

export default function LocaleSwitcher() {
    const t = useTranslations('nav'); // Use 'nav' or appropriate namespace
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function onSelectChange(nextLocale: string) {
        startTransition(() => {

            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" disabled={isPending}>
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {locales.map((cur) => (
                    <DropdownMenuItem
                        key={cur}
                        onClick={() => onSelectChange(cur)}
                        className={locale === cur ? "bg-accent" : ""}
                    >
                        {cur.toUpperCase()}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
