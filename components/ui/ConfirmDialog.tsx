'use client'

import * as React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from './Dialog'
import { Button } from './Button'

interface ConfirmDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onConfirm: () => void | Promise<void>
    title: string
    description: string
    confirmLabel?: string
    cancelLabel?: string
    variant?: 'default' | 'destructive'
    loading?: boolean
}

export function ConfirmDialog({
    open,
    onOpenChange,
    onConfirm,
    title,
    description,
    confirmLabel = 'Bestätigen',
    cancelLabel = 'Abbrechen',
    variant = 'default',
    loading = false,
}: ConfirmDialogProps) {
    const [isLoading, setIsLoading] = React.useState(false)

    const handleConfirm = async () => {
        const result = onConfirm()
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

    const isProcessing = loading || isLoading

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent size="sm">
                <DialogHeader showCloseButton={!isProcessing}>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="tertiary"
                        onClick={() => onOpenChange(false)}
                        disabled={isProcessing}
                    >
                        {cancelLabel}
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        disabled={isProcessing}
                        className={
                            variant === 'destructive'
                                ? 'bg-red-600 hover:bg-red-700 text-white'
                                : undefined
                        }
                    >
                        {isProcessing ? (
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
                                Wird verarbeitet...
                            </span>
                        ) : (
                            confirmLabel
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
