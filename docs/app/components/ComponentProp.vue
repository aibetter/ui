<script lang="ts" setup>
import type { PropStruct } from '../utils/component'

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
      <select v-if="struct.type === 'enum' || (Array.isArray(struct.type) && struct.type.includes('enum'))" v-model="model">
        <option
          v-for="value in struct.enumValues"
          :key="value as PropertyKey"
          :value="value"
        >
          {{ value }}
        </option>
      </select>
      <select v-else-if="struct.type === 'boolean'" v-model="model">
        <option :value="true">
          true
        </option>
        <option :value="false">
          false
        </option>
      </select>
      <input v-else-if="struct.type === 'string'" v-model="model">
      <input v-else-if="struct.type === 'number'" v-model.number="model">
    </div>
  </div>
</template>
