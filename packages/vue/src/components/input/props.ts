import type { TVOptions } from '../../utils/ui'
import { z } from 'zod'

export const props = z.object({
  placeholder: z.string().default('Input'),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
  disabled: z.boolean().default(false),
})

export interface Props {
  placeholder?: string
  size?: 'sm' | 'md' | 'lg' | number
  disabled?: boolean
  ui?: TVOptions
}
