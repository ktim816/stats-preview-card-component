<template>
  <li :class="[$style.wrapper]">
    <div :class="[$style.count]">{{ count }}</div>
    <div :class="[$style.label]">{{ label }}</div>
  </li>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';

export interface Stat {
  id?: number;
  count: string;
  label: string;
}

const props = defineProps<Stat>();
</script>

<style lang="scss" module>
.wrapper {
  @apply space-y-0.5;
}
.count {
  @apply font-bold text-2xl;
}
.label {
  @apply font-display uppercase text-xs tracking-widest opacity-60;
}
</style>
