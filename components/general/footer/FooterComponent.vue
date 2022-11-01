<template>
  <footer class="bg-violet">
    <div
      class="container  md:px-auto px-[1.25rem]  mx-auto lg:flex-row md:flex-col flex flex-col gap-[1.25rem] md:gap-[1.25rem] lg:gap-0 justify-between items-center py-[3.125rem]"
    >
      <p class="text-white text-[1rem] leading-7 mb-0 text-center">
        © 2022 Calaton Academy, Inc. {{ ts('rightsReserved') }}.
        <NuxtLink to="#">
          <span class="underline cursor-pointer">{{ ts('privacyPolicy') }}</span>
        </NuxtLink>
      </p>
      <div class="flex items-center gap-[1.875rem]">
        <p class="text-white text-[1rem] leading-7 mb-0">
          {{ ts('followUs') }}
        </p>
        <img
          v-for="icon in icons"
          :key="icon.imgName"
          :src="`/social/${icon.imgName}.svg`"
          :alt="`${icon.imgName}`"
          class="w-[1.875rem] cursor-pointer image hovered"
        >
      </div>
    </div>
  </footer>
</template>

<script>
import {useScopedI18n} from "~/utils/scopedI18n"
export default {
  name: "FooterComponent",
  setup(){
    const icons = [{imgName: 'facebook'},{imgName: 'twitter'},{imgName: 'linkedin'}]
    const {ts} = useScopedI18n('footer')
    return {icons, ts}
  }
};
</script>

<style scoped lang="scss">
.image {
  filter: invert(100%) sepia(0%) saturate(7497%) hue-rotate(315deg) brightness(96%) contrast(104%);
}
.hovered:hover {
  transition-duration: 1s;
  transform: scale(1.1);
  filter: invert(41%) sepia(70%) saturate(3030%) hue-rotate(207deg) brightness(103%) contrast(96%);
}
</style>
