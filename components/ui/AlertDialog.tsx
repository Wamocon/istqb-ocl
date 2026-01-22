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

type AlertType = 'info' | 'success' | 'warning' | 'error'

interface AlertDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    description: string
    type?: AlertType
    actionLabel?: string
}

const iconMap: Record<AlertType, React.ReactNode> = {
    info: (
        <svg
            className="h-6 w-6 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    ),
    success: (
        <svg
            className="h-6 w-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    ),
    warning: (
        <svg
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
        </svg>
    ),
    error: (
        <svg
            className="h-6 w-6 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    ),
}

export function AlertDialog({
    open,
    onOpenChange,
    title,
    description,
    type = 'info',
    actionLabel = 'OK',
}: AlertDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent size="sm">
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        {iconMap[type]}
                        <DialogTitle>{title}</DialogTitle>
                    </div>
                </DialogHeader>
                <DialogBody>
                    <DialogDescription className="text-foreground-muted">
                        {description}
                    </DialogDescription>
                </DialogBody>
                <DialogFooter>
                    <Button onClick={() => onOpenChange(false)}>{actionLabel}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
