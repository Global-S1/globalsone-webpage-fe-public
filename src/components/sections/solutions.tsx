"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

export function Solutions() {
    const t = useTranslations('home.solutions')
    const steps = useTranslations('home.solutions.steps')

    const items = [
        { key: "understand", icon: Search },
        { key: "design", icon: PenTool },
        { key: "implement", icon: Code2 },
        { key: "accompany", icon: Rocket },
    ]

    return (
        <Section className="bg-background">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white">
                    {t('title')}
                </h2>
                <p className="text-xl text-muted-foreground">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                {items.map((item, index) => (
                    <motion.div
                        key={item.key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col items-center text-center bg-background p-4"
                    >
                        <div className="w-24 h-24 rounded-full bg-brand-charcoal text-white flex items-center justify-center mb-6 shadow-lg relative z-10 border-4 border-background">
                            <item.icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-brand-charcoal dark:text-white">
                            {steps(`${item.key}.title`)}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {steps(`${item.key}.desc`)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
