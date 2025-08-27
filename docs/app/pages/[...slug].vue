<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div>
    <header class="h-16 px-4 flex items-center justify-between">
      <div>
        <NuxtLink to="/" class="text-2xl font-bold">
          UI
        </NuxtLink>
      </div>
    </header>
    <main class="flex">
      <menu class="w-48 px-4">
        <ul>
          <li>
            <NuxtLink to="/components/button">
              Button
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/components/icon">
              Icon
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/components/select">
              Select
            </NuxtLink>
          </li>
        </ul>
      </menu>
      <article class="flex-1 prose">
        <ContentRenderer v-if="page" :value="page" />
      </article>
    </main>
    <footer><!-- ... --></footer>
  </div>
</template>
