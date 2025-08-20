import type { TVOptions } from '../../utils/ui'

export const initUI: TVOptions = {
  slots: {
    root: 'inline-flex items-center gap-2 cursor-pointer transition-colors',
  },
  variants: {
    color: {
      primary: {
        root: '',
      },
      secondary: {
        root: '',
      },
      accent: {
        root: '',
      },
      info: {
        root: '',
      },
      success: {
        root: '',
      },
      warning: {
        root: '',
      },
      error: {
        root: '',
      },
    },
    variant: {
      solid: {
        root: '',
      },
      outline: {
        root: '',
      },
      soft: {
        root: '',
      },
      subtle: {
        root: '',
      },
      ghost: {
        root: '',
      },
    },
    size: {
      sm: {
        root: 'h-6 text-sm px-1.5 rounded-sm',
      },
      md: {
        root: 'h-8 text-root px-3 py-1 rounded-md',
      },
      lg: {
        root: 'h-10 text-xl px-4 rounded-lg',
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class: {
        root: 'text-foreground-reverse bg-primary-600 hover:bg-primary-700 active:bg-primary-800',
      },
    },
    {
      color: 'primary',
      variant: 'ghost',
      class: {
        root: 'text-primary-500 hover:bg-primary-100 active:bg-primary-200',
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
  },
}
