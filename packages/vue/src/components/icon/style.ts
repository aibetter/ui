import type { TVOptions } from '../../utils/ui'

export const initUI: TVOptions = {
  slots: {
    root: 'inline-block',
  },
  variants: {
    size: {
      sm: {
        root: 'text-[1.5rem]',
      },
      md: {
        root: 'text-[2rem]',
      },
      lg: {
        root: 'text-[2.5rem]',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
}
