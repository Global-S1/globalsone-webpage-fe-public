"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Brain, Database, Layers, TrendingUp } from "lucide-react"

export function Empathy() {
    const t = useTranslations('home.empathy')
    const items = useTranslations('home.empathy.items')

    const problems = [
        { key: "profitability", icon: TrendingUp },
        { key: "chaos", icon: Database },
        { key: "silos", icon: Layers },
        { key: "uncertainty", icon: Brain },
        { key: "ceiling", icon: AlertCircle },
    ]

    return (
        <Section className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-brand-charcoal dark:text-white"
                >
                    {t('title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-muted-foreground"
                >
                    {t('description')}
                </motion.p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {problems.map((problem, index) => (
                    <motion.div
                        key={problem.key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm flex"
                    >
                        <Card className="flex flex-col h-full w-full border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 group cursor-default bg-white dark:bg-slate-900">
                            <CardHeader>
                                <div className="w-14 h-14 rounded-2xl bg-brand-red/5 group-hover:bg-brand-red/10 flex items-center justify-center mb-2 transition-colors duration-300">
                                    <problem.icon className="w-7 h-7 text-brand-red group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-brand-charcoal dark:text-slate-100 font-semibold text-lg leading-relaxed group-hover:text-brand-charcoal dark:group-hover:text-white transition-colors">
                                    {items(problem.key)}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
