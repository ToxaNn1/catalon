<template>
  <section
    class="lg:max-h-[367px] container mx-auto lg:my-[6.25rem] md:my-[2.5rem] mt-[2.5rem] mb-0 lg:my-[2.5rem] lg:mx-auto md:px-auto px-[1.25rem] flex  flex-col-reverse lg:flex-row  justify-between"
  >
    <div class="lg:w-1/2 flex-col">
      <div class="lg:w-2/3 relative max-h-[367px] lg:h-[367px] md:h-[367px] h-[320px] lg:mt-0 mt-[1.625rem]">
        <img
          class="md:my-0 md:mx-auto"

          :src="'/images/officeCompany.png'"
          alt="officeCompany"
        >
        <div
          class="flex lg:right-0 lg:mr-[-10px] lg:absolute items-center justify-center mt-[-20px] lg:bottom-0 lg:mb-[-10px] lg:flex-col flex-row gap-[10px]"
        >
          <div
            class="flex items-center justify-between rounded-[6px] bg-white shadow-block gap-2 px-[10px] py-[10px]"
          >
            <img
              :src="'/what-will-icons/bag.png'"
              alt="bagIcon"
            >
            <p class="mb-0 font-bold leading-4 text-violet text-[0.875rem] leading-[1rem] text-center">
              {{ ts('10job') }}
            </p>
          </div>
          <div
            class="flex items-center justify-between rounded-[6px] bg-white shadow-block gap-2 px-[10px] py-[10px]"
          >
            <img
              :src="'/what-will-icons/person.png'"
              alt="personIcon"
            >
            <p class="mb-0 font-bold leading-4 text-violet text-[0.875rem] leading-[1rem] text-center">
              {{ ts('bestMentor') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:w-1/2 lg:gap-[2.5rem] gap-[1.875rem]">
      <h2
        class="font-bold  lg:text-[1.25rem] text-[0.875rem] mb-0 tracking-[0.32rem] text-peach uppercase"
      >
        {{ ts('whatWillDo') }}
      </h2>
      <p class="lg:text-[2.25rem] text-[1.75rem] mb-0 font-medium text-violet lg:leading-[2.688rem] leading-[2.125rem]">
        {{ ts('onTheProgram') }}
        <span class="underline decoration-3 mb-0 text-blue">{{ ts('practicalTasks') }}</span>
        {{ ts('onTheProgramRest') }}
      </p>
      <p class="font-light color-violet mb-0 lg:text-[1.375rem] text-[1.25rem] lg:leading-[2rem] leading-[1.75rem]">
        {{ ts('youWillGain') }}
      </p>
    </div>
  </section>
</template>

<script>
import { useScopedI18n } from "~/utils/scopedI18n"

export default {
  name: "WhatWillDoComponent",
  setup() {
    const { ts } = useScopedI18n('whatWillDoComponent')
    return {
      ts
    }
  }
};
</script>

<style scoped>
.shadow-block {
  box-shadow: 21px 26px 40px rgba(0, 0, 0, 0.1);
}
</style>
