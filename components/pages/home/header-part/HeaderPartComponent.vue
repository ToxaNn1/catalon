<template>
  <div class="background-home">
    <div
      class="lg:flex-row md:flex-row flex flex-col justify-between item-center container mx-auto h-full pt-[4.6rem] px-[1.25rem] lg:px-auto md:px-auto"
    >
      <div class="flex flex-col self-center lg:w-4/12 md:w-full w-full gap-[10px] sm:gap-[1.7rem]">
        <h2 class="font-semibold sm:mt-0 mt-6 md:mb-0 lg:mb-[1rem] lg:text-[3rem] md:text-[2.375rem] text-[2.375rem] text-violet md:leading-[3.5rem] lg:leading-[3.5rem] leading-[2.875rem]">
          {{ ts('becomeAPart') }}
          <span class="underline decoration-3 text-blue">{{ ts('itCompany') }}</span>
        </h2>
        <p class="lg:text-[1.375rem] lg:block md:hidden mb-0 md:text-[1.375rem] text-[1.25rem] text-violet lg:leading-8 md:leading-8 leading-7">
          {{ ts('info') }}
        </p>
        <div>
          <CButton
            class="bg-blue border-none text-white !py-[1.125rem] px-[5.938rem] font-bold text-[1.125rem] lg:text-[1.25rem] md:text-[1.25rem] uppercase md:w-auto lg:w-auto w-full"
          >
            <NuxtLink
              active-class="text-blue hover:text-white uppercase font-bold text-[1.125rem] leading-5"
              class="text-white  hover:text-white uppercase font-bold text-[1.125rem] leading-[1.313rem]"
              to="/courses"
            >
              {{ ts('apply') }}
            </NuxtLink>
          </CButton>
        </div>
      </div>
      <div class="flex">
        <img
          class="hidden sm:block"
          :src="'/images/youngCouple.png'"
          alt="youngCouple"
        >
        <img
          class="block sm:hidden"
          :src="'/images/youngCoupleMobile.png'"
          alt="youngCouple"
        >
      </div>
    </div>
  </div>
</template>

<script>
import CButton from "~/components/universal/CButton";
import {ref} from 'vue'
import {useScopedI18n} from "~/utils/scopedI18n"

export default {
  name: "HeaderPartComponent",
  components: {CButton},
  setup() {
    const {ts} = useScopedI18n('headerPartComponent')
    const activeMenu = ref(false)
    const changeActiveMenu = () => {
      activeMenu.value = !activeMenu.value
    }
    return {ts, activeMenu, changeActiveMenu}
  }
};
</script>

<style scoped>
.background-home {
  background: url("/images/bg.png") no-repeat;
  background-size: cover;
}
</style>
