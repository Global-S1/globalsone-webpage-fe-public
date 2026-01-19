"use client"

import { useTranslations } from "next-intl"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"

export function Differentials() {
    const t = useTranslations('home.differentials')
    const items = useTranslations('home.differentials.items')

    const keys = ['experience', 'decisions', 'ip', 'responsibility']

    return (
        <Section className="bg-brand-charcoal text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                        {t('title')}
                    </h2>
                    <div className="w-20 h-2 bg-brand-red mb-8" />
                </div>

                <div className="space-y-8">
                    {keys.map((key) => (
                        <div key={key} className="flex gap-4">
                            <CheckCircle2 className="w-8 h-8 text-brand-red flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    {items(`${key}.title`)}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {items(`${key}.desc`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
