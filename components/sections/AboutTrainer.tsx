'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const trainers = [
    {
        name: "Waleri Moretz",
        role: "Akkreditierter ISTQB®-Trainer",
        image: "/WMA_Waleri_Moretz_Profilfoto.png",
        imagePosition: "object-center",
        badges: ["17+ Jahre Praxis", "Akkreditierter ISTQB®-Trainer", "Geschäftsführer WAMOCON Academy"],
        bio: [
            "Als Gründer der **WAMOCON Academy** und passionierter Software-Ingenieur habe ich es mir zur Aufgabe gemacht, komplexe IT-Themen verständlich und praxisnah zu vermitteln.",
            "Mit meiner Erfahrung aus über 50 internationalen IT-Projekten weiß ich genau, worauf es in der Praxis ankommt. Theorie ist die Basis, aber erst die Anwendung macht einen exzellenten Softwaretester aus.",
            "Mein Ziel: Dich nicht nur sicher durch die Prüfung zu bringen, sondern dich zu einem selbstbewussten QA-Experten zu machen, der vom ersten Tag an echten Mehrwert liefert."
        ]
    },
    {
        name: "Daniel Moretz",
        role: "Akkreditierter ISTQB®-Trainer",
        image: "/WMA_Daniel_Moretz_Profilfoto.JPG",
        imagePosition: "object-top",
        badges: ["10+ Jahre Erfahrung", "Testautomatisierungsentwickler", "Akkreditierter ISTQB®-Trainer"],
        bio: [
            "Daniel ist **ISTQB®-Testmanager** und **Testautomatisierer** mit Fokus auf **Praxisnähe** und der konkreten Anwendung **risikobasierter Teststrategien**. Bei ihm lernst du, wie man Testmethoden effizient im Projektalltag einsetzt.",
            "Als fachlicher Verantwortlicher und Koordinator für **DiTeLe** hat er großen Wert auf **einfache und praxisorientierte Übungen** gelegt. Er sorgt dafür, dass du komplexe Zusammenhänge spielerisch verstehst und sofort anwenden kannst.",
            "Mit seiner Erfahrung aus über **10 Jahren Projektarbeit** und Zertifizierungen auf ISTQB Advanced Level bringt er tiefes technisches Know-how direkt in deinen Kurs."
        ]
    }
]

export function AboutTrainer() {
    return (
        <section className="py-20 bg-background-alt border-t border-border">
            <div className="container mx-auto px-6">
                <ScrollReveal animation="fade-up" width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Deine Trainer</h2>

                    <div className="space-y-20">
                        {trainers.map((trainer, index) => (
                            <div key={trainer.name} className={`max-w-5xl mx-auto flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                                {/* Image */}
                                <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-background-card border-4 border-accent/20 rounded-full overflow-hidden relative shadow-xl">
                                    <img
                                        src={trainer.image}
                                        alt={`${trainer.name} - ${trainer.role}`}
                                        className={`w-full h-full object-cover ${trainer.imagePosition}`}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-accent');
                                            e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl text-white font-bold">TM</span>';
                                        }}
                                    />
                                </div>

                                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                                    <h4 className="text-lg text-accent font-semibold mb-6">{trainer.role}</h4>

                                    <div className={`flex flex-wrap justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} gap-3 mb-6`}>
                                        {trainer.badges.map((badge, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20">
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-4 text-foreground-muted leading-relaxed">
                                        {trainer.bio.map((paragraph, idx) => (
                                            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
