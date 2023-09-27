
<script setup>
import { useUserStore } from '~/stores/user'


//data
const { locale } = useI18n()
const colorMode = useColorMode()
const { user } = toRefs(useUserStore())
//meta
definePageMeta({
  title: 'Home',
  description: 'This is the home page',
  layout: 'custom',
})

</script>

<template>
  {{ user.name }}
  <br>
  <ColorScheme placeholder="..." tag="span">
    Color mode: <b>{{ $colorMode.preference }}</b>
    <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
  </ColorScheme>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="ar">ar</option>
      </select>
      <p>{{ $t('welcome') }}</p>
      <p>{{ $t('home') }}</p>
      <p>{{ $t('about') }}</p>

    </form>
  </div>
  <a-button :theme="$colorMode.preference" @click="handleMessage">
    button
  </a-button>

  <h1>Color mode: {{ $colorMode.value }}</h1>
  <select v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="sepia">Sepia</option>
  </select>
</template>

<style>
.idk {
  white-space: nowrap;
}
</style>