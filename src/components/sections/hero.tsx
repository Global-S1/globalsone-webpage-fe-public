"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { InfiniteMarquee } from "@/components/ui/infinite-marquee"

export function Hero() {
    const t = useTranslations('home.hero')

    return (
        <section className="relative flex min-h-[90vh] items-center justify-center bg-background overflow-hidden pt-20 pb-20 md:pt-0 md:pb-0">

            {/* Container - Split Layout (Text left, Video/Visual right on Desktop ideally, but centered is good for strong statement) */}
            {/* Prompt suggests "Contexto general" and "Headline principal" - centered or strong split. 
          Given the "Video loop silencioso" description typically implies a full background or a large side component.
          "Elemento visual principal (CLAVE)... Video tipo Reel corporativo (desktop)". 
          Structure:
          1. Headline
          2. Subheadline
          3. Micro-proof (Capabilities)
          4. CTA
          
          I will implement a layout that places text firmly on the left/center over the video or side-by-side. 
          Prompt says: "El video debe reforzar el mensaje, no competir". 
          AND "Mobile... reemplazar por imagen".
      
          Let's go with a modern "Text Overlay on subtle video background" OR "Split Screen". 
          "El video... Caos -> Order -> Automation". This sounds like a high-quality background or a dedicated side-column.
          
          If I use it as a Background: It's very immersive.
          If I use it as a Side Element: It's more "SaaS" style.
          
          "Convertimos operaciones complejas..." -> This is a strong statement.
          Let's try a centered layout with the video as a subtle background (with overlay) OR a split layout. 
          Actually, "Video tipo 'reel' corporativo" often sits *next* to the text or *behind* it.
          Let's place it as a Background with heavy overlay for text readability ("Contrastes AA/AAA").
      */}

            {/* Video Background (Desktop Only) */}
            <div className="absolute inset-0 -z-10 hidden md:block select-none overflow-hidden">
                {/* Placeholder for Video - Users should replace '/background-video.mp4' */}
                <div className="absolute inset-0 bg-slate-900/20 z-10" /> {/* Overlay for contrast */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30 dark:opacity-20"
                    // preload="none" // Lazy-ish
                    aria-hidden="true"
                >
                    {/* 
                 TODO: Replace with actual asset. 
                 Using a simple color/gradient fallback for now in case video is missing 
              */}
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Fallback pattern if video fails or acts as placeholder */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff00_0%,#ffffff_100%)] dark:bg-[linear-gradient(to_bottom,#00000000_0%,#000000_100%)] z-20" />
            </div>

            {/* Mobile Background (Image Fallback) */}
            <div className="absolute inset-0 -z-10 md:hidden bg-gradient-to-br from-brand-blue-1/5 to-brand-red/5">
                {/* Could be an image here: <Image ... /> */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
            </div>


            <div className="container relative z-30 mx-auto px-4 md:px-6 flex flex-col items-center text-center max-w-5xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-charcoal dark:text-white leading-[1.1] mb-6">
                        {/* "Convertimos operaciones complejas en plataformas inteligentes que escalan tu negocio." */}
                        Convertimos operaciones complejas en <br className="hidden lg:block" />
                        <span className="text-brand-red"> plataformas inteligentes</span> que <br className="hidden lg:block" />
                        escalan tu negocio.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="max-w-3xl text-lg md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light"
                >
                    {t('subtitle')}
                </motion.p>

                {/* Capabilities - Infinite Marquee (Replaces Static Chips) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <div className="hidden md:block">
                        <InfiniteMarquee
                            items={[
                                "Plataformas a medida",
                                "BARO",
                                "GIA",
                                "IA Aplicada",
                                "Automatización",
                                "Escalabilidad",
                                "Seguridad"
                            ]}
                            speed={35}
                            pauseOnHover
                        />
                    </div>
                    {/* Mobile Fallback: Static Grid or specialized marquee for mobile if needed, but marquee works well on mobile too. */}
                    <div className="md:hidden">
                        <InfiniteMarquee
                            items={["Plataformas a medida", "BARO", "GIA", "IA", "Automatización"]}
                            speed={20}
                        />
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 rounded-md shadow-xl bg-brand-red hover:bg-brand-red/90 text-white font-semibold transition-all hover:scale-105"
                    >
                        {t('cta')}
                    </Button>
                </motion.div>
            </div>

        </section>
    )
}
