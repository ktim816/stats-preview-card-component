<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.content]">
      <div :class="[$style.info]">
        <h1 v-html="heading" />
        <p>{{ description }}</p>
      </div>
      <ul :class="[$style.stats]">
        <StatsPreviewCardStat
          :key="stat.id"
          :class="[$style.stat]"
          v-for="stat in stats"
          :count="stat.count"
          :label="stat.label"
        />
      </ul>
    </div>
    <div :class="[$style.preview]">
      <div
        :class="[$style.image]"
        :style="{backgroundImage: `url(${preview})`}"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {Stat} from '@components/StatsPreviewCardStat.vue';
import StatsPreviewCardStat from '@components/StatsPreviewCardStat.vue';

const props = defineProps<{
  heading: string;
  preview: string;
  description: string;
  stats: Stat[];
}>();
</script>

<style lang="scss" module>
.wrapper {
  @apply flex lg:flex-row flex-col-reverse w-full lg:max-w-[1110px] sm:max-w-[568px] max-w-[327px] rounded-lg overflow-hidden;
  box-shadow: 0px 20px 20px -10px rgba(23, 25, 41, 0.203087);
}
.content {
  @apply bg-yankees-blue lg:text-left text-center lg:w-[51.5%] sm:pt-[72px] pt-10 sm:pl-[72px] pl-8 sm:pr-[84px] pr-8 sm:pb-[59px] pb-8;
}
.info {
  @apply sm:space-y-[25px] space-y-4 lg:pr-6;

  h1 strong {
    @apply text-rich-lilac;
  }
}
.stats {
  @apply grid sm:grid-cols-3 sm:gap-x-3 grid-cols-1 gap-y-6 sm:mt-[71px] mt-10;
}
.preview {
  @apply relative lg:w-[48.5%] lg:h-auto sm:h-[320px] h-[240px] bg-rich-lilac;

  .image {
    @apply absolute inset-0 opacity-75 mix-blend-multiply bg-cover bg-center;
  }
}
</style>
