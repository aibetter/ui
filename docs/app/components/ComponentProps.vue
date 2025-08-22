<script lang="ts" setup>
import type { ZodObject } from 'zod'

const props = defineProps<{
  name: string
}>()

const module = await import(
  `../../../packages/vue/src/components/${props.name.toLocaleLowerCase()}/index.ts`
)

const propsSchema = module[`U${props.name}PropsSchema`] as ZodObject

const propsStruct = getPropsStruct(propsSchema)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="prop in propsStruct" :key="prop.key">
        <td>{{ prop.key }}</td>
        <td>{{ prop.type }}</td>
        <td>{{ prop.defaultValue }}</td>
      </tr>
    </tbody>
  </table>
</template>
