<script lang="ts" setup>
import type { Component } from 'vue'

const props = defineProps<{
  name: string
}>()

const module = await import(
  `../../../packages/vue/src/components/${props.name.toLocaleLowerCase()}/index.ts`
)

const UComponent = module[`U${props.name}`] as Component
</script>

<template>
  <div>
    <div class="flex justify-center items-center border border-solid border-border p-4 rounded-xl">
      <component :is="UComponent">
        <slot />
      </component>
    </div>
  </div>
</template>
