<template>
  <section class="container mx-auto">
    <div class="flex flex-col lg:w-1/2 lg:gap-[2.5rem] gap-[1.875rem]  px-[1.25rem]">
      <h2
        class="font-bold  lg:text-[1.25rem] text-[0.875rem] mb-0 tracking-[0.32rem] text-peach uppercase"
      >
        {{ ts('values') }}
      </h2>
      <p class="lg:text-[2.25rem] text-[1.75rem] mb-0 font-medium text-violet lg:leading-[2.688rem] leading-[2.125rem]">
        {{ ts('weWillHelp') }}
        <span class="underline decoration-3 text-blue">{{ ts('iTIndustry') }}</span>
      </p>
    </div>
    <div
      class="mt-[3.125rem] lg:grid md:grid hidden grid-box grid-cols-[repeat(auto-fill,minmax(390px,1fr))]"
    >
      <OneValueCardComponent
        v-for="card in cardsValue"
        :key="card.body"
        :title="card.title"
        :img-name="card.imgName"
        :body="card.body"
      />
    </div>
    <a-carousel
      effect="fade"
      :draggable="true"
      class="lg:hidden md:hidden block mt-[1.625rem] lg:mx-auto md:px-auto px-[1.25rem] "
    >
      <OneValueCardComponent
        v-for="card in cardsValue"
        :key="card.body"
        :title="card.title"
        :img-name="card.imgName"
        :body="card.body"
      />
    </a-carousel>
  </section>
</template>

<script>
import {computed} from "vue";
import OneValueCardComponent from "./OneValueCardComponent";
import {useScopedI18n} from "~/utils/scopedI18n"

export default {
  name: "ValuesCardComponent",
  components: {OneValueCardComponent},
  setup() {
    const {ts} = useScopedI18n('valuesCardComponent')

    const cardsValue = computed(() => [
      {
        title: ts('support'),
        body: ts('supportBody'),
        imgName: "support",
      },
      {
        title: ts('honesty'),
        body: ts('honestyBody'),
        imgName: "honesty",
      },
      {
        title: ts('connect'),
        body: ts('connectBody'),
        imgName: "connect",
      },
      {
        title: ts('results'),
        body: ts('resultsBody'),
        imgName: "results",
      },
      {
        title: ts('respect'),
        body: ts('respectBody'),
        imgName: "respect",
      },
    ]);
    return {ts, cardsValue};
  },
};
</script>

<style scoped lang="scss">
.ant-carousel {
  padding: 20px  20px 0px 20px !important;
  & :deep(.slick-slide) {
    text-align: center;
    height: 290px;
    overflow: hidden;
  }
  & :deep(.slick-dots > li.slick-active > button){
    opacity: 1;
    background: #3E80FA !important;
  }

  & :deep(.slick-dots > li){
    margin-top: -20px !important;
    background: #B1CDFF !important;
  }
}
</style>
