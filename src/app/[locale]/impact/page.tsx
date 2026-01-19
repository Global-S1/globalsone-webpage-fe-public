"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/content/projects"
import { ArrowUpRight, BarChart3, ShieldCheck, Zap } from "lucide-react"

export default function ImpactPage() {
    const t = useTranslations('nav') // Using nav key for title 'Impact Real' if available, or hardcode/add to messages. 
    // User didn't strictly provide a 'Impact' key in nav in my initial setup, let's check messages. 
    // I put "impact" in standard structure? No, I put "casos reales" in copy but maybe not navigation key?
    // I will use "Impacto Real" hardcoded or add to messages if I can. 
    // For now I will stick to "Impacto Real" text or try to fetch from messages if I update it.

    return (
        <div className="pt-20 pb-20">
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white"
                    >
                        Impacto Real
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Los proyectos desarrollados por Global S1 no se quedan en etapas conceptuales. Son plataformas digitales en producción.
                    </motion.p>
                </div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border-none shadow-xl bg-slate-50 dark:bg-slate-900/50">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                                    {/* Content Side */}
                                    <div className="md:col-span-12 p-8 md:p-12">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                            <div>
                                                <Badge variant="outline" className="mb-2 border-brand-red text-brand-red">Caso de Éxito</Badge>
                                                <CardTitle className="text-2xl md:text-3xl font-bold text-brand-charcoal dark:text-white">
                                                    {project.title}
                                                </CardTitle>
                                            </div>
                                            <div className="hidden md:block">
                                                <ArrowUpRight className="w-10 h-10 text-muted-foreground/20" />
                                            </div>
                                        </div>

                                        <p className="text-lg font-medium text-brand-blue-3 mb-4">{project.subtitle}</p>
                                        <p className="text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                                            {project.description}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-brand-blue-3">
                                                    <Zap className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-medium">{project.features[0]}</span>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-brand-purple-1">
                                                    <ShieldCheck className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-medium">{project.features[1]}</span>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-green-600">
                                                    <BarChart3 className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-medium">{project.features[2]}</span>
                                            </div>
                                        </div>

                                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-l-brand-charcoal">
                                            <p className="font-bold text-sm text-brand-charcoal dark:text-gray-200">Impacto Generado:</p>
                                            <p className="text-sm text-muted-foreground">{project.impact}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
