<template>
  <section
    class="md:flex-col lg:flex-row flex-col flex justify-between gap-[1.625rem] p-[1.3rem] bg-lightGray w-full"
  >
    <div
      v-for="card in pathData"
      :key="card.body"
      class="flex items-start justify-between gap-4 bg-white rounded-[6px] p-[1.4rem]  lg:w-1/4 w-full h-auto"
    >
      <p class="text-blue font-semibold text-[3rem] leading-[3.5rem]">
        {{ card.title }}
      </p>
      <p class="font-light text-[1.25rem] pt-[0.5rem] leading-7">
        {{ card.body }}
      </p>
    </div>
  </section>
</template>

<script>
import {useScopedI18n} from "~/utils/scopedI18n";
import {computed} from "vue";

export default {
  name: "PathAccordionPartComponent",
  setup() {
    const { ts } = useScopedI18n('pathAccordionPartComponent')
    const pathData = computed(() => [
      {
        title: "1",
        body: ts('body1')
      },
      {
        title: "2",
        body: ts('body2')
      },
      {
        title: "3",
        body: ts('body3')
      },
      {
        title: "4",
        body: ts('body4')
      },
    ])
    return {
      pathData,
    };
  },
};
</script>

<style scoped></style>
