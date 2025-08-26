import type { Arrayable } from 'type-fest'
import type z from 'zod'

type PropStructType = 'string' | 'number' | 'boolean' | 'enum' | 'array' | 'object' | 'union' | 'unknown'

export interface PropStruct {
  key: string
  type: Arrayable<PropStructType>
  defaultValue: unknown
  enumValues: unknown[]
}
export function getPropsStruct(props: z.ZodObject<any>) {
  const shape = props.shape
  const struct: PropStruct[] = []

  for (const key in shape) {
    const value = shape[key]

    const propStruct: Partial<PropStruct> = {
      key,
      defaultValue: value.def.defaultValue,
    }

    if (value.def.innerType) {
      propStruct.type = value.def.innerType.def.type
    }
    else {
      propStruct.type = value.def.type
    }

    if (propStruct.type === 'enum') {
      propStruct.enumValues = Object.values(value.def.innerType.def.entries)
    }

    if (propStruct.type === 'union') {
      const unionTypes: PropStructType[] = []

      value.def.innerType.def.options.forEach((option: any) => {
        unionTypes.push(option.def.type)

        if (option.def.type === 'enum') {
          propStruct.enumValues = Object.values(option.def.entries)
        }
      })

      propStruct.type = unionTypes
    }

    struct.push(propStruct as PropStruct)
  }

  return struct
}
