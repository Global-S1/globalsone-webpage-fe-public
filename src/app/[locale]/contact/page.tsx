"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
    const t = useTranslations('contact')

    return (
        <div className="pt-20 pb-20">
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* SEO Message side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white">
                            {t('title')}
                        </h1>

                        <Card className="bg-brand-charcoal text-white border-none shadow-xl mb-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10" />
                            <CardContent className="pt-8 pb-8 px-8 relative z-10">
                                <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-6">
                                    "{t('message')}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center font-bold text-lg">
                                        P
                                    </div>
                                    <div>
                                        <p className="font-bold">Patricia Rioja</p>
                                        <p className="text-sm text-gray-400">CEO Global S1</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-4 text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-red" />
                                <span>contacto@globals1.com</span>
                            </div>
                            {/* Add more contact info if provided */}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-6 md:p-8">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">{t('form.name')}</Label>
                                    <Input id="name" placeholder="Tu nombre" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">{t('form.email')}</Label>
                                    <Input id="email" type="email" placeholder="tu@empresa.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">{t('form.phone')}</Label>
                                    <Input id="phone" type="tel" placeholder="+51 999 999 999" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">{t('form.message')}</Label>
                                    <Textarea id="message" placeholder="Cuéntanos sobre tus desafíos..." className="min-h-[120px]" />
                                </div>
                                <Button className="w-full text-lg h-12" size="lg">
                                    <Send className="w-4 h-4 mr-2" />
                                    {t('form.submit')}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                </div>
            </Section>
        </div>
    )
}
