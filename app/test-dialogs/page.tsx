'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    Button,
    ConfirmDialog,
    AlertDialog,
    FormDialog,
} from '@/components/ui'

export default function TestDialogsPage() {
    const [basicOpen, setBasicOpen] = useState(false)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [alertOpen, setAlertOpen] = useState(false)
    const [formOpen, setFormOpen] = useState(false)
    const [alertType, setAlertType] = useState<'info' | 'success' | 'warning' | 'error'>('info')

    return (
        <div className="min-h-screen bg-background p-12">
            <div className="max-w-2xl mx-auto space-y-8">
                <h1 className="text-display-sm font-bold text-foreground mb-8">
                    Dialog System Test Page
                </h1>

                {/* Basic Dialog */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground">Basic Dialog</h2>
                    <Dialog open={basicOpen} onOpenChange={setBasicOpen}>
                        <DialogTrigger asChild>
                            <Button>Open Basic Dialog</Button>
                        </DialogTrigger>
                        <DialogContent size="md">
                            <DialogHeader>
                                <DialogTitle>Einstellungen</DialogTitle>
                                <DialogDescription>
                                    Passe deine Lernerfahrung an deine Bedürfnisse an.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogBody>
                                <p className="text-foreground-muted">
                                    Dies ist der Inhalt des Dialogs. Hier könnten Formulare,
                                    Informationen oder andere interaktive Elemente stehen.
                                </p>
                            </DialogBody>
                            <DialogFooter>
                                <Button variant="tertiary" onClick={() => setBasicOpen(false)}>
                                    Abbrechen
                                </Button>
                                <Button onClick={() => setBasicOpen(false)}>Speichern</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </section>

                {/* Confirm Dialog */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground">Confirm Dialog</h2>
                    <div className="flex gap-4">
                        <Button onClick={() => setConfirmOpen(true)}>
                            Open Confirm Dialog
                        </Button>
                    </div>
                    <ConfirmDialog
                        open={confirmOpen}
                        onOpenChange={setConfirmOpen}
                        title="Fortschritt zurücksetzen?"
                        description="Diese Aktion kann nicht rückgängig gemacht werden. Dein gesamter Lernfortschritt wird gelöscht."
                        variant="destructive"
                        onConfirm={async () => {
                            await new Promise((resolve) => setTimeout(resolve, 1500))
                            console.log('Confirmed!')
                        }}
                        confirmLabel="Ja, zurücksetzen"
                        cancelLabel="Nein, abbrechen"
                    />
                </section>

                {/* Alert Dialog */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground">Alert Dialog</h2>
                    <div className="flex flex-wrap gap-4">
                        {(['info', 'success', 'warning', 'error'] as const).map((type) => (
                            <Button
                                key={type}
                                variant="tertiary"
                                onClick={() => {
                                    setAlertType(type)
                                    setAlertOpen(true)
                                }}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </Button>
                        ))}
                    </div>
                    <AlertDialog
                        open={alertOpen}
                        onOpenChange={setAlertOpen}
                        type={alertType}
                        title={
                            alertType === 'success'
                                ? 'Erfolgreich gespeichert!'
                                : alertType === 'error'
                                    ? 'Fehler aufgetreten'
                                    : alertType === 'warning'
                                        ? 'Achtung'
                                        : 'Information'
                        }
                        description={
                            alertType === 'success'
                                ? 'Deine Änderungen wurden erfolgreich gespeichert.'
                                : alertType === 'error'
                                    ? 'Es ist ein Fehler aufgetreten. Bitte versuche es erneut.'
                                    : alertType === 'warning'
                                        ? 'Diese Aktion hat möglicherweise Auswirkungen auf deinen Lernfortschritt.'
                                        : 'Hier ist eine wichtige Information für dich.'
                        }
                    />
                </section>

                {/* Form Dialog */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground">Form Dialog</h2>
                    <Button onClick={() => setFormOpen(true)}>Open Form Dialog</Button>
                    <FormDialog
                        open={formOpen}
                        onOpenChange={setFormOpen}
                        title="Feedback geben"
                        description="Teile uns mit, wie wir den Kurs verbessern können."
                        onSubmit={async (e) => {
                            const formData = new FormData(e.currentTarget)
                            console.log('Form submitted:', Object.fromEntries(formData))
                            await new Promise((resolve) => setTimeout(resolve, 1500))
                        }}
                    >
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 bg-primary-light border border-border rounded-md text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-accent"
                                    placeholder="Dein Name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-primary-light border border-border rounded-md text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                                    placeholder="Dein Feedback..."
                                />
                            </div>
                        </div>
                    </FormDialog>
                </section>
            </div>
        </div>
    )
}
