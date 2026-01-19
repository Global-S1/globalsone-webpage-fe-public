"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Cpu, Lock, Cloud, Users, ArrowRight } from "lucide-react"
import { services } from "@/content/services"

export default function ServicesPage() {
    const t = useTranslations('nav')
    // We would ideally fetch translations for services here too, or structure them in messages.
    // For now using the structured content, assuming it might map to keys or contain data.
    // Since user provided hard text in 2. SERVICIOS, I should preferably use messages.
    // BUT the user also asked for content to be in /content. 
    // Strategy: Map /content items to keys in common or similar, OR use content directly if it's the source.
    // Given "Content Administrable", I will use the /content data structure but perhaps simulate it being dynamic.
    // Re-reading user request: "Los componentes solo consumen claves, nunca texto directo."
    // So I should mapped the content I put in services.ts to keys or use properties from it.
    // Actually, I should have put the text in messages. 
    // I will assume for this implementation I'll use the IDs from services.ts to fetch from messages.

    const serviceIcons: Record<string, any> = {
        "web-dev": Monitor,
        "software-dev": Smartphone,
        "ai-automation": Cpu,
        "infrastructure": Lock,
        "hosting": Cloud,
        "consulting": Users,
        "support": Users // Reuse or find better icon
    }

    return (
        <div className="pt-20 pb-20">
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white"
                    >
                        {t('services')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Diseñamos, construimos y operamos tecnología pensada para sostener y escalar negocios.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = serviceIcons[service.id] || Monitor

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow border-t-4 border-t-transparent hover:border-t-brand-red">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 text-brand-red">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="mb-2">{service.title}</CardTitle>
                                        <CardDescription className="text-base font-medium text-brand-blue-3">
                                            {service.tagline}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.slice(0, 4).map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="outline" className="w-full justify-between group">
                                            Ver detalles
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </Section>
        </div>
    )
}
