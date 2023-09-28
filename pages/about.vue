<template>
    <div>
        {{ translate('home') }}
    </div>
</template>

<script setup>
import { useUtils } from '~/composables/useUtils'

//functions
const { translate } = useUtils()

</script>
