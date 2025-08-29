<script lang="ts" setup>
import { UInput, USelect } from '@vue-ui'

defineProps<{
  struct: PropStruct
}>()

const model = defineModel<unknown>()
</script>

<template>
  <div class="flex items-center border border-solid border-border rounded-md text-sm">
    <div class="bg-secondary-100 px-1">
      {{ struct.key }}
    </div>
    <div class="px-1">
      <USelect
        v-if="struct.type === 'enum' || (Array.isArray(struct.type) && struct.type.includes('enum'))"
        v-model="model"
        :options="(struct.enumValues as PropertyKey[]).map((value: PropertyKey) => ({ label: value as string, value }))"
        size="sm"
        :ui="{
          slots: {
            root: '!border-none',
          },
        }"
      />
      <USelect
        v-else-if="struct.type === 'boolean'"
        v-model="model"
        :options="[{ label: 'true', value: true }, { label: 'false', value: false }]"
        size="sm"
        :ui="{
          slots: {
            root: '!border-none',
          },
        }"
      />
      <UInput
        v-else-if="struct.type === 'string'"
        v-model="model as string"
        size="sm"
        :ui="{
          slots: {
            root: '!border-none',
          },
        }"
      />
      <UInput
        v-else-if="struct.type === 'number'"
        v-model.number="model as number"
        size="sm"
        :ui="{
          slots: {
            root: '!border-none',
          },
        }"
      />
    </div>
  </div>
</template>
