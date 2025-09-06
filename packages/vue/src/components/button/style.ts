import type { TVOptions } from '../../utils/ui'

export const initUI: TVOptions = {
  slots: {
    root: 'inline-flex justify-center items-center gap-1',
    icon: '',
  },
  variants: {
    size: {
      sm: {
        root: 'h-6 text-sm rounded-sm',
        icon: '!text-xl',
      },
      md: {
        root: 'h-8 text-base rounded-md',
        icon: '!text-2xl',
      },
      lg: {
        root: 'h-10 text-xl rounded-lg',
        icon: '!text-3xl',
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
    // size
    {
      size: 'sm',
      iconOnly: false,
      class: {
        root: 'px-1.5 py-0',
      },
    },
    {
      size: 'sm',
      iconOnly: true,
      class: {
        root: 'w-6 p-0',
      },
    },
    {
      size: 'md',
      iconOnly: false,
      class: {
        root: 'px-3 py-1',
      },
    },
    {
      size: 'md',
      iconOnly: true,
      class: {
        root: 'w-8 p-0',
      },
    },
    {
      size: 'lg',
      iconOnly: false,
      class: {
        root: 'px-4 py-0',
      },
    },
    {
      size: 'lg',
      iconOnly: true,
      class: {
        root: 'w-10 p-0',
      },
    },
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
    iconOnly: false,
    block: false,
  },
}
