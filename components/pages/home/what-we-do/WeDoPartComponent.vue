<template>
  <section
    class="container mx-auto lg:my-[6.25rem] lg:mx-auto md:px-auto px-[1.25rem] my-[3.75rem] flex  flex-col lg:flex-row items-center justify-between"
  >
    <div class="flex flex-col lg:w-1/2 lg:gap-[2.5rem] gap-[1.875rem]">
      <h2
        class="font-bold  lg:text-[1.25rem] text-[0.875rem] tracking-[0.32rem] mb-0 text-peach uppercase"
      >
        {{ ts('whatWeDo') }}
      </h2>
      <p class="lg:text-[2.25rem] text-[1.75rem] mb-0 font-medium text-violet lg:leading-[2.688rem] leading-[2.125rem]">
        {{ ts('weImproveOptimize') }}
        <span class="underline decoration-3 text-blue">
          {{ ts('byBuildingEfficient') }}
        </span>
        {{ ts('solutions') }}
      </p>
      <p class="font-light color-violet mb-0 lg:text-[1.375rem] text-[1.25rem] lg:leading-[2rem] leading-[1.75rem]">
        {{ ts('ourTeam') }}
      </p>
    </div>
    <div>
      <CircleComponent />
    </div>
  </section>
</template>

<script>
import CircleComponent from '~/components/pages/home/what-we-do/CircleComponent'
import { useScopedI18n } from "~/utils/scopedI18n"

export default {
  name: "WeDoPartComponent",
  components: {CircleComponent},
  setup() {
    const { ts } = useScopedI18n('whatWeDoPartComponent')
    return {
      ts,
    }
  }
};
</script>

<style scoped></style>
