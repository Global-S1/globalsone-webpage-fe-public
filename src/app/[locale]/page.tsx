import { Hero } from "@/components/sections/hero";
import { Empathy } from "@/components/sections/empathy";
import { Solutions } from "@/components/sections/solutions";
import { Differentials } from "@/components/sections/differentials";
import { setRequestLocale } from 'next-intl/server';

export default async function HomePage({
    params
}: {
    params: { locale: string };
}) {
    const { locale } = params;
    setRequestLocale(locale);
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <Empathy />
            <Solutions />
            <Differentials />
        </main>
    );
}
