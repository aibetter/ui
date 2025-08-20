import type { TVOptions } from '../../utils/ui'
import { z } from 'zod'

export const props = z.object({
  name: z.string(),
  size: z.union([z.enum(['sm', 'md', 'lg']), z.number()]).optional(),
})

export interface Props {
  name: string
  size?: 'sm' | 'md' | 'lg' | number
  ui?: TVOptions
}
