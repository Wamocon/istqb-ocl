'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
} from './Dialog'
import { Button } from './Button'
import { createLead } from '@/lib/api'

interface LeadMagnetDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title?: string
    description?: string
}

export function LeadMagnetDialog({
    open,
    onOpenChange,
    title = 'Kostenloser IT Karriere Selbsttest',
    description = 'Finde heraus, ob du bereit bist für deinen nächsten Schritt.',
}: LeadMagnetDialogProps) {
    const [email, setEmail] = React.useState('')
    const [consent, setConsent] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            // Save lead to Supabase
            const lead = await createLead({
                email,
                source: 'selbsttest',
                consent_given: consent,
                consent_text: 'Ich stimme zu, dass meine E-Mail für die Zusendung der Materialien und weiterer Informationen verwendet wird. Abmeldung jederzeit möglich.',
            })

            // Store lead ID in sessionStorage for linking with selbsttest results
            if (lead?.id) {
                sessionStorage.setItem('leadId', lead.id)
                sessionStorage.setItem('leadEmail', email)
            }

            setIsLoading(false)
            onOpenChange(false)

            // Redirect to self-test page
            router.push('/selbsttest')
        } catch (err) {
            console.error('Error creating lead:', err)
            setError('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.')
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent size="sm">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>

                    <DialogBody className="space-y-4">
                        {/* Leon Story Teaser */}
                        <div className="bg-background-alt/50 p-4 rounded-lg border border-border">
                            <p className="text-sm text-foreground-muted leading-relaxed">
                                Leon hatte einen guten Abschluss. Trotzdem: unzählige Bewerbungen, keine Zusage.
                                Was ihm fehlte? <span className="text-foreground font-medium">Der Beweis, dass er es kann.</span>
                            </p>
                            <p className="text-sm text-foreground-muted mt-2">
                                Heute ist er ISTQB Certified Tester mit echter IT Karriere.
                            </p>
                        </div>

                        <div>
                            <label htmlFor="lead-email" className="label">
                                E-Mail Adresse
                            </label>
                            <input
                                type="email"
                                id="lead-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field"
                                placeholder="deine@email.de"
                                required
                            />
                            {error && (
                                <p className="text-red-500 text-sm mt-2">{error}</p>
                            )}
                        </div>

                        <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                            <h4 className="font-semibold text-sm mb-2 text-foreground">
                                Du erhältst:
                            </h4>
                            <ul className="text-sm space-y-1.5 text-foreground-muted">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent flex-shrink-0">+</span>
                                    <span>Ehrlicher 9 Punkte Selbsttest für deine IT Karriere</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent flex-shrink-0">+</span>
                                    <span>Aktuelle Zahlen zum deutschen IT Arbeitsmarkt 2026</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent flex-shrink-0">+</span>
                                    <span>Was erfolgreiche Quereinsteiger anders machen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent flex-shrink-0">+</span>
                                    <span>Exklusive Einblicke in DiTeLe</span>
                                </li>
                            </ul>
                        </div>

                        <label className="flex items-start gap-2 text-xs text-foreground-muted cursor-pointer">
                            <input
                                type="checkbox"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                className="mt-0.5 text-accent focus:ring-accent rounded"
                                required
                            />
                            <span>
                                Ich stimme zu, dass meine E-Mail für die Zusendung der Materialien und weiterer Informationen verwendet wird.
                                Abmeldung jederzeit möglich. <a href="/datenschutz" className="text-accent underline">Datenschutz</a>.
                            </span>
                        </label>
                    </DialogBody>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="tertiary"
                            onClick={() => onOpenChange(false)}
                            disabled={isLoading}
                        >
                            Abbrechen
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? 'Wird geladen...' : 'Jetzt kostenlos anfordern'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
