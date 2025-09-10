import type { TVOptions } from '../../utils/ui'
import { z } from 'zod'

export const props = z.object({
  icon: z.string().default('icon-[lucide--check]'),
  disabled: z.boolean().default(false),
})

export interface Props {
  icon?: string
  disabled?: boolean
  ui?: TVOptions
}
