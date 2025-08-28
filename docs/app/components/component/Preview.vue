<script lang="ts" setup>
import type { Component } from 'vue'
import type { ZodObject } from 'zod'

const props = defineProps<{
  componentName: string
}>()

const module = await import(
  `../../../../packages/vue/src/components/${props.componentName.toLocaleLowerCase()}/index.ts`
)

const UComponent = module[`U${props.componentName}`] as Component

const propsSchema = module[`U${props.componentName}PropsSchema`] as ZodObject

const propsStruct = getPropsStruct(propsSchema)

const attrs = useAttrs()
const componentProps = ref<Record<string, any>>({
  ...Object.fromEntries(propsStruct.map(prop => [prop.key, prop.defaultValue])),
  ...attrs,
})
</script>

<template>
  <div class="border border-solid border-border rounded-xl not-prose">
    <div class="flex items-center flex-wrap gap-2 p-4">
      <ComponentProp
        v-for="prop in propsStruct"
        :key="prop.key"
        v-model="componentProps[prop.key]"
        :struct="prop"
      />
    </div>
    <hr class="!my-2 border-border">
    <div
      class="flex justify-center items-center p-4"
    >
      <component :is="UComponent" v-bind="componentProps">
        <slot />
      </component>
    </div>
  </div>
</template>
