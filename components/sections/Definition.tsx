'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function Definition() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <ScrollReveal animation="fade-up" width="100%">
                    <div className="max-w-4xl mx-auto text-center md:text-left md:flex gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-foreground">
                                Was bringt dir der <span className="text-accent">ISTQB® CTFL 4.0</span>?
                            </h2>
                            <div className="prose prose-lg text-foreground-muted space-y-4">
                                <p>
                                    Der <strong>ISTQB® Certified Tester Foundation Level (CTFL) 4.0</strong> ist weit mehr als nur ein Zertifikat. Es ist der <strong>globale Industriestandard</strong>, der dir Türen zu Top-Positionen in der IT öffnet.
                                </p>
                                <p>
                                    Egal ob du Quereinsteiger bist oder dein Wissen professionalisieren willst: Dieser Kurs vermittelt dir das Fundament für <strong>moderne Qualitätssicherung</strong>. Von agilen Testmethoden über Testmanagement bis hin zu effizienten Teststrategien – du lernst die Sprache, die weltweit in IT-Projekten gesprochen wird.
                                </p>
                                <p className="font-medium text-foreground">
                                    Mit der Version 4.0 bist du auf dem neuesten Stand der Technik (inkl. Agile & DevOps Know-how).
                                </p>
                            </div>
                        </div>

                        {/* Certificate Visual */}
                        <div className="hidden md:flex flex-c justify-center items-center w-px h-auto bg-border mx-auto self-stretch" />

                        <div className="flex-1 mt-8 md:mt-0 flex flex-col items-center">
                            {/* Certificate Placeholder */}
                            <div className="w-64 h-auto aspect-[1/1.4] relative mb-6 group cursor-pointer transition-transform hover:scale-105 duration-300">
                                <img
                                    src="/WMA_Akkreditierung_ISTQB.png"
                                    alt="ISTQB® Accredited Training Provider - WAMOCON Academy"
                                    className="w-full h-full object-contain drop-shadow-xl"
                                />
                            </div>

                            <ul className="space-y-3 text-foreground-muted w-full max-w-sm">
                                <li className="flex gap-2 items-start">
                                    <span className="text-accent mt-1">✓</span>
                                    <span><strong>Karrieresprung:</strong> Zertifizierte Tester verdienen durchschnittlich mehr.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-accent mt-1">✓</span>
                                    <span><strong>Weltweiten Anerkennung:</strong> Gültig in über 130 Ländern.</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-accent mt-1">✓</span>
                                    <span><strong>Praxis-Garantie:</strong> Dank DiTeLe-Simulator wendest du Wissen sofort an.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
