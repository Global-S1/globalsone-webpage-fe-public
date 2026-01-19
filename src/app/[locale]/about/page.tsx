"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { team } from "@/content/team"
import { Users, Target, Rocket, Heart, Shield, Award } from "lucide-react"

export default function AboutPage() {
    const t = useTranslations('about')
    // Using direct translations for values mostly
    // Strategy: Map keys or hardcode structure based on copy provided

    return (
        <div className="pt-20 pb-20">
            {/* Mission / Vision */}
            <Section className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-20 space-y-16"
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-brand-red">Misión</h2>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-brand-charcoal dark:text-gray-200">
                            "{t('mission')}"
                        </p>
                    </div>
                    <div className="w-24 h-1 bg-brand-charcoal/10 mx-auto" />
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-brand-blue-3">Visión</h2>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-brand-charcoal dark:text-gray-200">
                            "{t('vision')}"
                        </p>
                    </div>
                </motion.div>
            </Section>

            {/* Culture */}
            <Section className="bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">{t('culture.title')}</h2>
                        <p className="text-lg text-muted-foreground">{t('culture.desc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 border-l-4 border-l-brand-red">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-brand-red" /> Confianza
                            </h3>
                            <p className="text-muted-foreground">{t('culture.values.trust')}</p>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-green-500">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Award className="w-5 h-5 text-green-500" /> Excelencia
                            </h3>
                            <p className="text-muted-foreground">{t('culture.values.excellence')}</p>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-blue-500">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-500" /> Colaboración
                            </h3>
                            <p className="text-muted-foreground">{t('culture.values.collaboration')}</p>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-amber-500">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-amber-500" /> Sostenibilidad
                            </h3>
                            <p className="text-muted-foreground">{t('culture.values.sustainability')}</p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Team */}
            <Section>
                <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo Líder</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 p-6 text-center hover:bg-white hover:shadow-xl transition-all border hover:border-brand-red/20">
                                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4 group-hover:scale-110 transition-transform overflow-hidden relative">
                                    {/* Placeholder for avatars */}
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-500 font-bold opacity-30">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mb-1 text-brand-charcoal dark:text-white">{member.name}</h3>
                                <p className="text-sm font-semibold text-brand-red mb-2">{member.role}</p>
                                <p className="text-xs text-muted-foreground">{member.focus}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
