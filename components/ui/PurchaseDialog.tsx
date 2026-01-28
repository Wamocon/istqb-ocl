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

interface PurchaseDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    productName: string
    price: number
}

interface PurchaseFormData {
    anrede: 'Herr' | 'Frau' | 'Divers'
    vorname: string
    nachname: string
    email: string
    strasse: string
    hausnummer: string
    plz: string
    ort: string
    land: 'Deutschland' | 'Österreich' | 'Schweiz'
    firma?: string
    ustIdNr?: string
    zahlungsart: 'einmalzahlung' | 'ratenzahlung'
    agbAkzeptiert: boolean
    widerrufsbelehrungAkzeptiert: boolean
    datenschutzAkzeptiert: boolean
}

const initialData: PurchaseFormData = {
    anrede: 'Herr',
    vorname: '',
    nachname: '',
    email: '',
    strasse: '',
    hausnummer: '',
    plz: '',
    ort: '',
    land: 'Deutschland',
    zahlungsart: 'einmalzahlung',
    agbAkzeptiert: false,
    widerrufsbelehrungAkzeptiert: false,
    datenschutzAkzeptiert: false,
}

export function PurchaseDialog({
    open,
    onOpenChange,
    productName,
    price,
}: PurchaseDialogProps) {
    const [formData, setFormData] = React.useState<PurchaseFormData>(initialData)
    const [isLoading, setIsLoading] = React.useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log('Purchase Data:', formData)

        setIsLoading(false)
        onOpenChange(false)
        // Here you would trigger a success dialog
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent size="lg">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Kaufabschluss</DialogTitle>
                        <DialogDescription>
                            {productName} - {price}€
                        </DialogDescription>
                    </DialogHeader>

                    <DialogBody className="space-y-6">
                        {/* Persönliche Daten */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-foreground border-b border-border pb-2">
                                1. Persönliche Daten
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="anrede" className="label">Anrede</label>
                                    <select
                                        id="anrede"
                                        name="anrede"
                                        value={formData.anrede}
                                        onChange={handleChange}
                                        className="input-field"
                                        required
                                    >
                                        <option value="Herr">Herr</option>
                                        <option value="Frau">Frau</option>
                                        <option value="Divers">Divers</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="vorname" className="label">Vorname</label>
                                    <input
                                        type="text"
                                        id="vorname"
                                        name="vorname"
                                        value={formData.vorname}
                                        onChange={handleChange}
                                        className="input-field"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nachname" className="label">Nachname</label>
                                    <input
                                        type="text"
                                        id="nachname"
                                        name="nachname"
                                        value={formData.nachname}
                                        onChange={handleChange}
                                        className="input-field"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="label">E-Mail Adresse</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                />
                            </div>
                        </div>

                        {/* Rechnungsadresse */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-foreground border-b border-border pb-2">
                                2. Rechnungsadresse
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="md:col-span-3">
                                    <label htmlFor="strasse" className="label">Straße</label>
                                    <input
                                        type="text"
                                        id="strasse"
                                        name="strasse"
                                        value={formData.strasse}
                                        onChange={handleChange}
                                        className="input-field"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="hausnummer" className="label">Nr.</label>
                                    <input
                                        type="text"
                                        id="hausnummer"
                                        name="hausnummer"
                                        value={formData.hausnummer}
                                        onChange={handleChange}
                                        className="input-field"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="plz" className="label">PLZ</label>
                                    <input
                                        type="text"
                                        id="plz"
                                        name="plz"
                                        value={formData.plz}
                                        onChange={handleChange}
                                        className="input-field"
                                        pattern="[0-9]{5}"
                                        title="Bitte geben Sie eine gültige 5-stellige PLZ ein"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ort" className="label">Ort</label>
                                    <input
                                        type="text"
                                        id="ort"
                                        name="ort"
                                        value={formData.ort}
                                        onChange={handleChange}
                                        className="input-field"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="land" className="label">Land</label>
                                    <select
                                        id="land"
                                        name="land"
                                        value={formData.land}
                                        onChange={handleChange}
                                        className="input-field"
                                        required
                                    >
                                        <option value="Deutschland">Deutschland</option>
                                        <option value="Österreich">Österreich</option>
                                        <option value="Schweiz">Schweiz</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Firma (Optional) */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-foreground border-b border-border pb-2">
                                3. Firma (Optional)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firma" className="label">Firmenname</label>
                                    <input
                                        type="text"
                                        id="firma"
                                        name="firma"
                                        value={formData.firma}
                                        onChange={handleChange}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ustIdNr" className="label">USt-IdNr.</label>
                                    <input
                                        type="text"
                                        id="ustIdNr"
                                        name="ustIdNr"
                                        value={formData.ustIdNr}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="DE123456789"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Zahlungsart */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-foreground border-b border-border pb-2">
                                4. Zahlungsart
                            </h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 p-3 border border-border rounded-md hover:bg-white/5 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="zahlungsart"
                                        value="einmalzahlung"
                                        checked={formData.zahlungsart === 'einmalzahlung'}
                                        onChange={handleChange}
                                        className="text-accent focus:ring-accent"
                                    />
                                    <span>Einmalzahlung ({price}€)</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 border border-border rounded-md hover:bg-white/5 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="zahlungsart"
                                        value="ratenzahlung"
                                        checked={formData.zahlungsart === 'ratenzahlung'}
                                        onChange={handleChange}
                                        className="text-accent focus:ring-accent"
                                    />
                                    <span>Ratenzahlung (5 x {Math.round(price / 5 + 0.6)}€)</span>
                                </label>
                            </div>
                        </div>

                        {/* Rechtliches */}
                        <div className="space-y-3 pt-2">
                            <label className="flex items-start gap-2 text-sm text-foreground-muted cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agbAkzeptiert"
                                    checked={formData.agbAkzeptiert}
                                    onChange={handleChange}
                                    className="mt-1 text-accent focus:ring-accent rounded"
                                    required
                                />
                                <span>
                                    Ich habe die <a href="/agb" className="text-accent underline">AGB</a> gelesen und akzeptiere diese.
                                </span>
                            </label>
                            <label className="flex items-start gap-2 text-sm text-foreground-muted cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="widerrufsbelehrungAkzeptiert"
                                    checked={formData.widerrufsbelehrungAkzeptiert}
                                    onChange={handleChange}
                                    className="mt-1 text-accent focus:ring-accent rounded"
                                    required
                                />
                                <span>
                                    Ich habe die <a href="/widerruf" className="text-accent underline">Widerrufsbelehrung</a> zur Kenntnis genommen.
                                </span>
                            </label>
                            <label className="flex items-start gap-2 text-sm text-foreground-muted cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="datenschutzAkzeptiert"
                                    checked={formData.datenschutzAkzeptiert}
                                    onChange={handleChange}
                                    className="mt-1 text-accent focus:ring-accent rounded"
                                    required
                                />
                                <span>
                                    Ich stimme zu, dass meine E-Mail für die Zusendung der Materialien und weiterer Informationen verwendet wird. Abmeldung jederzeit möglich. <a href="/widerruf" className="text-accent underline"> Datenschutz</a>
                                </span>
                            </label>
                        </div>
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
                        <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                            {isLoading ? 'Wird verarbeitet...' : 'Kostenpflichtig bestellen'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
