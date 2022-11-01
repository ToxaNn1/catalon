<template>
  <section class="flex-col bg-lightGray lg:p-5 md:p-5 p-0">
    <h2 class="text-violet font-light text-[1.375rem] leading-8 p-[1.25rem]">
      {{ ts('stepByStep') }}
    </h2>
    <div class="flex flex-col lg:flex-row items-center  justify-between p-[1.875rem] md:my-0 md:mx-auto md:items-stretch md:max-w-max ">
      <div
        v-for="(card, index) in cardsData"
        :key="card.title"
        class="lg:flex-row  flex-col lg:items-stretch md:items-stretch  items-center flex w-full"
        :class="index === 2 && 'max-w-[267px]'"
      >
        <div
          class="flex max-w-[267px] flex-col justify-between rounded-[6px] md:w-full py-[2.5rem] px-[2rem] h-auto bg-white gap-[1.25rem]"
        >
          <p
            class="text-peach border border-[peach] text-center text-[0.75rem] md:font-normal font-bold uppercase md:px-[2.5rem] mb-0 rounded-[6px] tracking-[0.5rem]  px-[1.875rem] py-[1rem]"
          >
            {{ card.title }}
          </p>
          <div
            class="flex flex-col items-center justify-between gap-[0.813rem]"
          >
            <img
              :src="`/accordion-icons/${card.imgName}.png`"
              alt="student"
            >
            <p class="text-[1.5rem] text-center text-violet leading-7 font-bold">
              {{ card.body }}
            </p>
          </div>
          <CButton
            class="bg-peach shadow-none border-none text-white font-bold leading-6 text-[1.125rem]  py-[0.75rem] w-full"
          >
            {{ card.buttonText }}
          </CButton>
        </div>
        <div
          v-if="index !== 2"
          class="mx-14 items-center flex justify-center md:py-[1.625rem] py-[1.625rem]"
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
import { computed } from "vue";
import CButton from "~/components/universal/CButton";
import { useScopedI18n } from "~/utils/scopedI18n"

export default {
  name: "StagesAccordionPartComponent",
  components: { CButton },
  setup() {
    const { ts } = useScopedI18n('stagesAccordionPartComponent')
    const cardsData = computed(() => {
      return [
        {
          title: ts('firstStage'),
          body: ts('student'),
          buttonText: ts('threeFourMonth'),
          imgName: "student",
        },
        {
          title: ts('secondStage'),
          body: ts('trainee'),
          buttonText: ts('threeSixMonth'),
          imgName: "trainee",
        },
        {
          title: ts('thirdStage'),
          body: ts('junior'),
          buttonText: ts('oneTwoYears'),
          imgName: "junior",
        },
      ];
    });
    return { ts, cardsData };
  },
};
</script>

<style scoped>
.shadow-none {
  box-shadow: none;
}
</style>
