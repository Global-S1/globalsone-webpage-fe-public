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
        <Section className="bg-slate-50/50 dark:bg-slate-950/50 border-y border-slate-100 dark:border-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white">
                    {t('title')}
                </h2>
                <p className="text-xl text-muted-foreground">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {items.map((item, index) => (
                    <motion.div
                        key={item.key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Step Number Background (Subtle) */}
                        <div className="absolute top-4 right-4 text-6xl font-black text-slate-50 dark:text-slate-800 -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500 select-none">
                            {index + 1}
                        </div>

                        <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-800 text-brand-charcoal dark:text-white flex items-center justify-center mb-6 shadow-inner group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                            <item.icon className="w-8 h-8" />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-brand-charcoal dark:text-white group-hover:text-brand-red transition-colors">
                            {steps(`${item.key}.title`)}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {steps(`${item.key}.desc`)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
