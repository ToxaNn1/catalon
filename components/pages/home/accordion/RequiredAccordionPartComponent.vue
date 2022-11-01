<template>
  <section class="md:flex-row lg:flex-row flex-col flex bg-lightGray p-5 gap-5 w-full">
    <div
      v-for="card in cardsValue"
      :key="card.body"
      class="flex flex-col p-[1.875rem] gap-[1.5rem] bg-white rounded-[6px] lg:w-1/3 md:w-1/3 w-full"
    >
      <div class="flex items-center gap-[1.5rem]">
        <img
          :src="`/accordion-icons/${card.imgName}.png`"
          alt="cardsLogo"
        >
        <p class="leading-7 text-violet mb-0 text-[1.5rem] font-semibold">
          {{ card.title }}
        </p>
      </div>
      <div>
        <p class="text-[1.25rem] leading-7 font-light text-violet">
          {{ card.body }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useScopedI18n } from "~/utils/scopedI18n"

export default {
  name: "RequiredAccordionPartComponent",
  setup() {
    const { ts } = useScopedI18n('requiredAccordionPartComponent')

    const cardsValue = computed(() => [
      {
        title: ts('specialEducation'),
        body:  ts('specialEducationBody'),
        imgName: "education",
      },
      {
        title:  ts('english'),
        body:  ts('englishBody'),
        imgName: "english",
      },
      {
        title:  ts('desireToLearn'),
        body:  ts('desireToLearnBody'),
        imgName: "hat",
      },
    ]);
    return { cardsValue };
  },
};
</script>

<style scoped></style>
