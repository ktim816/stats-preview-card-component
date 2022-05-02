<template>
  <main :class="[$style.wrapper]">
    <StatsPreviewCard
      :stats="stats"
      :preview="imageHeader"
      heading="Get <strong>insights</strong> that help your business grow."
      description="Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
    />
  </main>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import StatsPreviewCard from '@components/StatsPreviewCard.vue';
import {Stat} from '@components/StatsPreviewCardStat.vue';
import {getImage} from '@helpers/common';

const imageHeader = getImage('image-header.jpg');
const stats = ref<Stat[]>([
  {
    id: 1,
    count: '10k+',
    label: 'Companies',
  },
  {
    id: 2,
    count: '314',
    label: 'Templates',
  },
  {
    id: 3,
    count: '12M+',
    label: 'Queries',
  },
]);
</script>

<style lang="scss" module>
.wrapper {
  @apply flex justify-center items-center min-h-screen sm:p-8 p-6;
}
</style>
