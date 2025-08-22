import type z from 'zod'

interface PropStruct {
  key: string
  type: 'string' | 'number' | 'boolean' | 'enum' | 'array' | 'object' | 'unknown'
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
      type: value.def.innerType.def.type,
      defaultValue: value.def.defaultValue,
    }

    if (propStruct.type === 'enum') {
      propStruct.enumValues = Object.values(value.def.innerType.def.entries)
    }

    struct.push(propStruct as PropStruct)
  }

  return struct
}
