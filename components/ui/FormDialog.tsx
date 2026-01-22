'use client'

import * as React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogBody,
} from './Dialog'
import { Button } from './Button'

interface FormDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>
    title: string
    description?: string
    children: React.ReactNode
    submitLabel?: string
    cancelLabel?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function FormDialog({
    open,
    onOpenChange,
    onSubmit,
    title,
    description,
    children,
    submitLabel = 'Speichern',
    cancelLabel = 'Abbrechen',
    size = 'md',
}: FormDialogProps) {
    const [isLoading, setIsLoading] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = onSubmit(e)
        if (result instanceof Promise) {
            setIsLoading(true)
            try {
                await result
                onOpenChange(false)
            } finally {
                setIsLoading(false)
            }
        } else {
            onOpenChange(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent size={size}>
                <form onSubmit={handleSubmit}>
                    <DialogHeader showCloseButton={!isLoading}>
                        <DialogTitle>{title}</DialogTitle>
                        {description && (
                            <DialogDescription>{description}</DialogDescription>
                        )}
                    </DialogHeader>
                    <DialogBody>{children}</DialogBody>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="tertiary"
                            onClick={() => onOpenChange(false)}
                            disabled={isLoading}
                        >
                            {cancelLabel}
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <svg
                                        className="animate-spin h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        />
                                    </svg>
                                    Wird gespeichert...
                                </span>
                            ) : (
                                submitLabel
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
