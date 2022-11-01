<template>
  <section class="container mx-auto flex flex-col lg:mx-auto md:px-auto px-[1.25rem]">
    <div class="flex flex-col">
      <div class="flex flex-col ld:w-1/2 md:w-1/2 w-full gap-7 mb-[2.5rem]">
        <h2
          class="font-bold  lg:text-[1.25rem] text-[0.875rem] tracking-[0.32rem] mb-0 text-peach uppercase"
        >
          {{ ts('testimonials') }}
        </h2>
        <p
          class="lg:text-[2.25rem] text-[1.75rem] mb-0 font-medium text-violet lg:leading-[2.688rem] leading-[2.125rem]"
        >
          {{ ts('thisIsWhat') }}
          <span class="underline decoration-3 text-blue">{{ ts('ourStudents') }}</span>
          {{ ts('thinkAboutProgram') }}
        </p>
      </div>
      <a-carousel
        arrows
        :dots="false"
        :slides-to-show="3"
        :draggable="true"
        class="hidden  md:block lg:block"
      >
        <template #prevArrow>
          <div
            class="custom-slick-arrow hidden md:block lg:block lg:!left-[94%] md:!left-[90%] !top-[-4.5rem] "
          >
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div
            class="custom-slick-arrow !right-2 hidden md:block lg:block !top-[-4.5rem]"
          >
            <right-circle-outlined />
          </div>
        </template>
        <div
          v-for="(item, index) in carouselData"
          :key="index"
        >
          <div
            class="pt-[3rem] relative"
          >
            <div
              class="flex  items-end flex-col card  items-center gap-[1.5rem] px-[1.6rem] pb-[1.25rem]"
            >
              <div class="absolute top-0  ">
                <img
                  :src="`/carousel/${item.imgName}.png`"
                  :alt="item.alt"
                >
              </div>
              <p class="mb-0 mt-16 text-peach leading-6 text-[18px] font-bold">
                {{ item.name }}
              </p>
              <p class="text-center mb-0 text-violet leading-6 text-[18px] font-light">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </a-carousel>
      <a-carousel
        :draggable="true"
        class="block md:hidden  lg:hidden"
      >
        <div
          v-for="(item) in carouselData"
          :key="item.name"
        >
          <div
            class="pt-[3rem] relative"
          >
            <div
              class="flex  items-end flex-col  rounded-md border  border-lightGray bg-white  items-center gap-[1.5rem] px-[1.6rem] pb-[1.25rem]"
            >
              <div class="absolute top-0 ">
                <img
                  :src="`/carousel/${item.imgName}.png`"
                  :alt="item.alt"
                >
              </div>
              <p class="mb-0 mt-16 text-peach leading-6 text-[18px] font-bold">
                {{ item.name }}
              </p>
              <p class="text-center mb-0 text-violet leading-6 text-[18px] font-light">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </a-carousel>
    </div>
  </section>
</template>
<script>
import {computed} from 'vue'
import {useScopedI18n} from "~/utils/scopedI18n"

export default {
  name: "TestimonalsComponent",
  setup() {
    const {ts} = useScopedI18n('testimonialsComponent')
    const carouselData = computed(() => [
      {
        name: ts('user1'),
        text: ts('user1Body'),
        imgName: 'yulia',
        alt: 'yulia'
      },
      {
        name: ts('user2'),
        text: ts('user2Body'),
        imgName: 'gleb',
        alt: 'glebHuman'
      },
      {
        name: ts('user3'),
        text: ts('user3Body'),
        imgName: 'dmytro',
        alt: 'dmytro'
      },
      {
        name: ts('user4'),
        text: ts('user4Body'),
        imgName: 'kateryna',
        alt: 'kateryna'
      }])

    return {ts, carouselData}
  }
};
</script>
<style lang="scss" scoped>

.anticon {
  @apply text-[#000];
  font-size: 27px;
}

.ant-carousel {
  &:deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    color: black;
    position: absolute;
    opacity: 0.3;
    z-index: 1;
  }

  &:deep(.slick-dots > li.slick-active > button) {
    opacity: 1;
    background: #3E80FA !important;
  }

  &:deep(.slick-dots > li) {
    background: #B1CDFF !important;
  }

  &:deep(.slick-dots-bottom) {
    bottom: -50px;
  }
  & .slick-current + div {
    .card {
      @apply rounded-md border-lightGray mb-[50px];
      box-shadow: 15px 15px 100px rgba(0, 0, 0, 0.1);
    }
  }
}


.shadow-card {
  box-shadow: 15px 15px 100px rgba(0, 0, 0, 0.1);
}

.slick-arrow .slick-next {
  display: none !important;
}
</style>
