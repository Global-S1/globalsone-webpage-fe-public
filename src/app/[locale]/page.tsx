import { Hero } from "@/components/sections/hero";
import { Empathy } from "@/components/sections/empathy";
import { Solutions } from "@/components/sections/solutions";
import { Differentials } from "@/components/sections/differentials";

export default function HomePage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <Empathy />
            <Solutions />
            <Differentials />
        </main>
    );
}
