<template>
  <section
    class="container mx-auto lg:my-[6.25rem] my-[3.75rem] flex flex-col justify-between lg:mx-auto md:px-auto px-[1.25rem] lg:gap-[2.5rem] md:gap-[2.5rem] gap-[1.875rem]"
  >
    <div class="flex flex-col md:w-1/2 lg:w-1/2 w-full gap-7">
      <h2
        class="font-bold  lg:text-[1.25rem] text-[0.875rem] tracking-[0.32rem] mb-0 text-peach uppercase"
      >
        {{ ts('projects') }}
      </h2>
      <p class="lg:text-[2.25rem] text-[1.75rem] mb-0 font-medium text-violet lg:leading-[2.688rem] leading-[2.125rem]">
        {{ ts('ourStudentsTookPart') }}
      </p>
    </div>
    <div class="md:flex lg:flex gap-[1.25rem] hidden">
      <div
        v-for="card in projectData"
        :key="card.title"
        class="flex flex-col w-1/3 "
      >
        <img
          :src="`/images/${card.imgName}.png`"
          alt="photo"
          class="w-full"
        >
        <p class="font-medium text-peach text-[1.5rem] leading-7">
          {{ card.title }}
        </p>
        <p class="text-[1.25rem] text-violet font-light leading-6">
          {{ card.body }}
        </p>
      </div>
    </div>
    <div class="flex gap-[1.25rem] ">
      <a-carousel
        effect="fade"
        :draggable="true"
        class="lg:hidden md:hidden block w-full"
      >
        <div
          v-for="card in projectData"
          :key="card.title"
        >
          <div>
            <img
              :src="`/images/${card.imgName}.png`"
              alt="photo"
            >
            <p class="font-medium text-peach text-[1.5rem] leading-7">
              {{ card.title }}
            </p>
            <p class="text-[1.25rem] text-violet font-light leading-6">
              {{ card.body }}
            </p>
          </div>
        </div>
      </a-carousel>
    </div>
  </section>
</template>

<script>
import { useScopedI18n } from "~/utils/scopedI18n"
import {computed} from "vue";

export default {
  name: "ProjectComponent",
  setup() {
    const { ts } = useScopedI18n('projectComponent')
    const projectData = computed(() =>[
      {
        title: ts('calatonSystems'),
        body: ts('calatonSystemsBody'),
        imgName: "CalatonSystems",
      },
      {
        title: ts('linguamillFlashcards'),
        body: ts('linguamillFlashcardsBody'),
        imgName: "Linguamill",
      },
      {
        title: ts('calatonStudio'),
        body: ts('calatonStudioBody'),
        imgName: "CalatonStudio",
      },
    ])
    return { ts, projectData };
  },
};
</script>

<style scoped lang="scss">
.ant-carousel{
  & :deep(.slick-dots > li.slick-active > button){
    opacity: 1;
    background: #3E80FA !important;
  }
  &:deep(.slick-dots-bottom) {
    bottom: -25px;
  }
  &:deep(.slick-dots > li){
  background: #B1CDFF !important;
  }
}
</style>
