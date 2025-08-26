import type { TVOptions } from '../../utils/ui'

export const initUI: TVOptions = {
  slots: {
    root: 'justify-center items-center gap-1',
    icon: '',
  },
  variants: {
    size: {
      sm: {
        root: 'h-6 text-sm px-1.5 rounded-sm',
      },
      md: {
        root: 'h-8 text-base px-3 py-1 rounded-md',
      },
      lg: {
        root: 'h-10 text-xl px-4 rounded-lg',
      },
    },
    iconReverse: {
      true: {
        icon: 'order-last',
      },
      false: {
        icon: 'order-none',
      },
    },
    block: {
      true: {
        root: 'flex w-full',
      },
      false: {
        root: 'inline-flex',
      },
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed pointer-events-none opacity-75',
      },
      false: {
        root: 'cursor-pointer transition-colors pointer-events-auto',
      },
    },
  },
  compoundVariants: [
    // Primary variants
    {
      color: 'primary',
      variant: 'solid',
      class: {
        root: 'text-foreground-reverse bg-primary-600 hover:bg-primary-700 active:bg-primary-800',
      },
    },
    {
      color: 'primary',
      variant: 'outline',
      class: {
        root: 'text-primary-500 border border-solid border-primary-500 hover:bg-primary-50 active:bg-primary-100',
      },
    },
    {
      color: 'primary',
      variant: 'ghost',
      class: {
        root: 'text-primary-500 hover:bg-primary-100 active:bg-primary-200',
      },
    },
    // Secondary variants
    {
      color: 'secondary',
      variant: 'solid',
      class: {
        root: 'text-foreground-reverse bg-secondary-600 hover:bg-secondary-700 active:bg-secondary-800',
      },
    },
    {
      color: 'secondary',
      variant: 'outline',
      class: {
        root: 'text-secondary-500 border border-solid border-secondary-500 hover:bg-secondary-50 active:bg-secondary-100',
      },
    },
    {
      color: 'secondary',
      variant: 'ghost',
      class: {
        root: 'text-secondary-500 hover:bg-secondary-100 active:bg-secondary-200',
      },
    },
    // Accent variants
    {
      color: 'accent',
      variant: 'solid',
      class: {
        root: 'text-foreground-reverse bg-accent-600 hover:bg-accent-700 active:bg-accent-800',
      },
    },
    {
      color: 'accent',
      variant: 'outline',
      class: {
        root: 'text-accent-500 border border-solid border-accent-500 hover:bg-accent-50 active:bg-accent-100',
      },
    },
    {
      color: 'accent',
      variant: 'ghost',
      class: {
        root: 'text-accent-500 hover:bg-accent-100 active:bg-accent-200',
      },
    },
    // Info variants
    {
      color: 'info',
      variant: 'solid',
      class: {
        root: 'text-foreground-reverse bg-info-600 hover:bg-info-700 active:bg-info-800',
      },
    },
    {
      color: 'info',
      variant: 'outline',
      class: {
        root: 'text-info-500 border border-solid border-info-500 hover:bg-info-50 active:bg-info-100',
      },
    },
    {
      color: 'info',
      variant: 'ghost',
      class: {
        root: 'text-info-500 hover:bg-info-100 active:bg-info-200',
      },
    },
    // Success variants
    {
      color: 'success',
      variant: 'solid',
      class: {
        root: 'text-foreground-reverse bg-success-600 hover:bg-success-700 active:bg-success-800',
      },
    },
    {
      color: 'success',
      variant: 'outline',
      class: {
        root: 'text-success-500 border border-solid border-success-500 hover:bg-success-50 active:bg-success-100',
      },
    },
    {
      color: 'success',
      variant: 'ghost',
      class: {
        root: 'text-success-500 hover:bg-success-100 active:bg-success-200',
      },
    },
    // Warning variants
    {
      color: 'warning',
      variant: 'solid',
      class: {
        root: 'text-foreground-reverse bg-warning-600 hover:bg-warning-700 active:bg-warning-800',
      },
    },
    {
      color: 'warning',
      variant: 'outline',
      class: {
        root: 'text-warning-500 border border-solid border-warning-500 hover:bg-warning-50 active:bg-warning-100',
      },
    },
    {
      color: 'warning',
      variant: 'ghost',
      class: {
        root: 'text-warning-500 hover:bg-warning-100 active:bg-warning-200',
      },
    },
    // Error variants
    {
      color: 'error',
      variant: 'solid',
      class: {
        root: 'text-foreground-reverse bg-error-600 hover:bg-error-700 active:bg-error-800',
      },
    },
    {
      color: 'error',
      variant: 'outline',
      class: {
        root: 'text-error-500 border border-solid border-error-500 hover:bg-error-50 active:bg-error-100',
      },
    },
    {
      color: 'error',
      variant: 'ghost',
      class: {
        root: 'text-error-500 hover:bg-error-100 active:bg-error-200',
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    size: 'md',
    block: false,
  },
}
