'use client'

import * as React from 'react'
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

interface LeadMagnetDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title?: string
    description?: string
}

export function LeadMagnetDialog({
    open,
    onOpenChange,
    title = 'Kostenlose ISTQB-Checkliste',
    description = 'Sichere dir jetzt deinen Wissensvorsprung (PDF).',
}: LeadMagnetDialogProps) {
    const [email, setEmail] = React.useState('')
    const [consent, setConsent] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log('Lead Magnet Request:', { email })

        setIsLoading(false)
        onOpenChange(false)
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
                        </div>

                        <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                            <h4 className="font-semibold text-sm mb-2 text-foreground">
                                Inklusive kostenlosem Mini-Kurs:
                            </h4>
                            <ul className="text-sm space-y-1 text-foreground-muted">
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> 3 häufigste Prüfungsfehler
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> Lernplan-Vorlage
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-accent">✓</span> DiTeLe Demo-Zugang
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
                            {isLoading ? 'Senden...' : 'Jetzt kostenlos anfordern'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
