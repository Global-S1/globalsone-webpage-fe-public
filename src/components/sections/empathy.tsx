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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problems.map((problem, index) => (
                    <motion.div
                        key={problem.key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center mb-4">
                                    <problem.icon className="w-6 h-6 text-brand-red" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground font-medium leading-relaxed">
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
