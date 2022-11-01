<template>
  <section class="flex bg-lightGray p-5">
    <div class="w-full md:w-auto md:my-0 md:mx-auto md:max-w-max  flex-col lg:flex-row md:flex-col flex justify-center p-[1.875rem] ">
      <div
        v-for="(card, index) in stepsData"
        :key="card.title"
        class="lg:flex-row lg:flex lg:w-auto md:flex-col flex-col w-full  h-auto"
      >
        <div
          class="flex max-w-[251px] flex-col rounded-[6px] border border-peach bg-white"
        >
          <div
            class="flex items-center gap-[7px] border-peach  w-full border-b-[1px] p-6"
          >
            <img
              :src="`/accordion-icons/${card.imgName}.png`"
              alt="number"
            >
            <p class="text-peach leading-7 mb-0 text-[1.5rem]">
              {{ card.title }}
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-between gap-[0.813rem]"
          >
            <p class="text-[1.5rem] text-violet leading-7 p-6 mb-0 font-normal">
              {{ card.body }}
            </p>
          </div>
        </div>
        <div
          v-show="index !== 3"
          class="mx-10 lg:flex md:flex flex justify-center items-center md:py-[1.625rem] py-[1.625rem]"
        >
          <img
            class="rotate-90 lg:rotate-[270]"
            :src="'accordion-icons/arrow-right.png'"
            alt="arrowRight"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useScopedI18n } from "~/utils/scopedI18n"

export default {
  name: "StepsAccordionPartComponent",
  setup() {
    const { ts } = useScopedI18n('stepsAccordionPartComponent')
    const stepsData = [
      {
        title: ts('resume'),
        body: ts('resumeBody'),
        imgName: "one",
      },
      {
        title: ts('interview'),
        body: ts('interviewBody'),
        imgName: "two",
      },
      {
        title: ts('test'),
        body: ts('testBody'),
        imgName: "three",
      },
      {
        title: ts('practice'),
        body: ts('practiceBody'),
        imgName: "four",
      },
    ];
    return { stepsData };
  },
};
</script>

<style scoped></style>
