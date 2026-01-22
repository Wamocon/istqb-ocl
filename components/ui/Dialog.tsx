'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

// Dialog Root
const Dialog = DialogPrimitive.Root

// Dialog Trigger
const DialogTrigger = DialogPrimitive.Trigger

// Dialog Portal
const DialogPortal = DialogPrimitive.Portal

// Dialog Close
const DialogClose = DialogPrimitive.Close

// Dialog Overlay
const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm',
            'data-[state=open]:animate-dialog-overlay-in',
            'motion-reduce:animate-none',
            className
        )}
        {...props}
    />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// Size variants
const sizeVariants = {
    sm: 'max-w-[400px]',
    md: 'max-w-[500px]',
    lg: 'max-w-[640px]',
    xl: 'max-w-[800px]',
    full: 'max-w-[90vw]',
}

// Dialog Content
interface DialogContentProps
    extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    size?: keyof typeof sizeVariants
}

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    DialogContentProps
>(({ className, children, size = 'md', ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                'fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%]',
                'bg-background-card border border-border rounded-lg shadow-lg',
                'data-[state=open]:animate-dialog-content-in',
                'motion-reduce:animate-none',
                'focus:outline-none',
                sizeVariants[size],
                className
            )}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

// Dialog Header
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    showCloseButton?: boolean
}

const DialogHeader = ({
    className,
    showCloseButton = true,
    children,
    ...props
}: DialogHeaderProps) => (
    <div
        className={cn(
            'flex flex-col gap-1.5 p-6 pb-4 border-b border-border/50',
            'relative',
            className
        )}
        {...props}
    >
        {children}
        {showCloseButton && (
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-foreground-muted"
                >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Schließen</span>
            </DialogPrimitive.Close>
        )}
    </div>
)
DialogHeader.displayName = 'DialogHeader'

// Dialog Title
const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            'text-lg font-semibold text-foreground leading-none tracking-tight',
            className
        )}
        {...props}
    />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

// Dialog Description
const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn('text-sm text-foreground-muted', className)}
        {...props}
    />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

// Dialog Body
const DialogBody = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('px-6 py-4 max-h-[60vh] overflow-y-auto', className)}
        {...props}
    />
)
DialogBody.displayName = 'DialogBody'

// Dialog Footer
const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'flex flex-col-reverse sm:flex-row sm:justify-end gap-3 p-6 pt-4 border-t border-border/50',
            className
        )}
        {...props}
    />
)
DialogFooter.displayName = 'DialogFooter'

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogTitle,
    DialogDescription,
}
