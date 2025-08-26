<script lang="ts" setup>
import type { Component } from 'vue'
import type { ZodObject } from 'zod'

const props = defineProps<{
  name: string
}>()

const module = await import(
  `../../../packages/vue/src/components/${props.name.toLocaleLowerCase()}/index.ts`
)

const UComponent = module[`U${props.name}`] as Component

const propsSchema = module[`U${props.name}PropsSchema`] as ZodObject

const propsStruct = getPropsStruct(propsSchema)

const componentProps = ref<Record<string, any>>(Object.fromEntries(propsStruct.map(prop => [prop.key, prop.defaultValue])))
</script>

<template>
  <div class="border border-solid border-border rounded-xl">
    <div class="flex items-center flex-wrap gap-2 p-4">
      <ComponentProp
        v-for="prop in propsStruct"
        :key="prop.key"
        v-model="componentProps[prop.key]"
        :struct="prop"
      />
    </div>
    <hr class="!my-2 bg-border">
    <div class="flex justify-center items-center p-4">
      <component :is="UComponent" v-bind="componentProps">
        <slot />
      </component>
    </div>
  </div>
</template>
