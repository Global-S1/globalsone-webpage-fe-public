"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"

export function Differentials() {
    const t = useTranslations('home.differentials')
    const items = useTranslations('home.differentials.items')

    const keys = ['experience', 'decisions', 'ip', 'responsibility']

    return (
        <Section className="bg-brand-charcoal text-white relative overflow-hidden">
            {/* Background Texture (Subtle Grid) */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-2 bg-brand-red mb-8 rounded-full shadow-[0_0_15px_rgba(210,38,51,0.5)]" />

                    {/* Optional: Add a subtle decorative quote or tagline here if desired later */}
                </motion.div>

                <div className="space-y-8">
                    {keys.map((key, index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex gap-4 group"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-brand-red" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-red transition-colors duration-300">
                                    {items(`${key}.title`)}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-lg">
                                    {items(`${key}.desc`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
