
<script setup>
import { useUserStore } from '~/stores/user'
import { useUtils } from '~/composables/useUtils'


//data
const { locale } = useI18n()
const siwtchLang = useSwitchLocalePath()
const b = useLocalePath()
const colorMode = useColorMode()
const { user } = toRefs(useUserStore())

//function 
const { translate } = useUtils()

//meta
definePageMeta({
  title: 'Home',
  description: 'This is the home page',
  layout: 'custom',
})

</script>

<template>
  <NuxtLink :to="b('/about')">
    to about
  </NuxtLink>

  {{ user.name }}
  <br>
  <ColorScheme placeholder="..." tag="span">
    Color mode: <b>{{ $colorMode.preference }}</b>
    <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
  </ColorScheme>
  <div>
    <form>
      <select v-model="locale">
        <option value="en" @click="siwtchLang('en')">
          en
        </option>
        <option value="fr" @click="siwtchLang('fr')">
          fr
        </option>
        <option @click="siwtchLang('ar')">
          ar
        </option>
      </select>
      <p>{{ translate('home') }}</p>


    </form>
  </div>


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