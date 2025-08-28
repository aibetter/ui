import { z } from 'zod'

export const props = z.object({
  color: z.enum(
    [
      'primary',
      'accent',
      'info',
      'success',
      'warning',
      'error',
    ],
  ).default('primary'),
  variant: z.enum(
    [
      'solid',
      'outline',
      'ghost',
    ],
  ).default('solid'),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
  icon: z.string().optional(),
  iconReverse: z.boolean().default(false),
  loading: z.boolean().default(false),
  loadingIcon: z.string().default('icon-[line-md--loading-loop]'),
  disabled: z.boolean().default(false),
  block: z.boolean().default(false),
})

export interface Props {
  color?: 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconReverse?: boolean
  loading?: boolean
  loadingIcon?: string
  disabled?: boolean
  block?: boolean
}
