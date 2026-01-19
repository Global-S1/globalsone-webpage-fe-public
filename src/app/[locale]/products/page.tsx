"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check } from "lucide-react"
import { products } from "@/content/products"

export default function ProductsPage() {
    const t = useTranslations('nav')

    return (
        <div className="pt-20 pb-20">
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white"
                    >
                        {t('products')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Plataformas propias diseñadas para operar, escalar y generar impacto real.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-xl transition-shadow overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-brand-red to-brand-purple-1" />
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                                        <Badge variant="secondary" className="bg-brand-blue-1/10 text-brand-blue-3 hover:bg-brand-blue-1/20">
                                            SaaS
                                        </Badge>
                                    </div>
                                    <p className="font-semibold text-brand-blue-3 min-h-[3rem]">
                                        {product.tagline}
                                    </p>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Características</h4>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-sm mb-1 text-brand-charcoal dark:text-gray-200">Valor para el negocio:</h4>
                                        <p className="text-sm text-muted-foreground italic">"{product.value}"</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-3 pt-6 border-t bg-slate-50/50 dark:bg-slate-900/20">
                                    <Button className="w-full group">
                                        {product.cta}
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
