<template>
  <div class="flex background-footer  lg:mt-[3.125rem] md:mt-0 mt-[3.75rem]">
    <div class="flex flex-col items-center mx-auto py-[6.25rem] gap-[1.875rem] lg:mx-auto md:px-auto px-[1.25rem]">
      <h2
        class="lg:text-[4rem] text-[2.37rem] lg:leading-[4.6rem] leading-[2.75rem] text-violet lg:w-2/3  w-full text-center mb-0"
      >
        {{ ts('applyToStart') }} <span class="text-blue">{{ ts('journeyIT') }} </span>
      </h2>
      <CButton
        class="bg-blue border-none text-white py-[18px] px-[95px] lg:w-auto w-full font-bold text-[1.25rem] uppercase"
      >
        <NuxtLink
          active-class="text-blue hover:text-white uppercase font-bold text-[1.125rem] leading-5"
          class="text-white  hover:text-white uppercase font-bold text-[1.125rem] leading-[1.313rem]"
          to="/form-course"
        >
          {{ ts('apply') }}
        </NuxtLink>
      </CButton>
    </div>
  </div>
</template>

<script>
import CButton from "~/components/universal/CButton";
import {useScopedI18n} from "~/utils/scopedI18n";
export default {
  name: "PreFooterComponent",
  components: { CButton },
  setup() {
    const { ts } = useScopedI18n('preFooterComponent')
    return {
      ts,
    }
  }
};
</script>

<style scoped>
.background-footer {
  background: url("/images/preFooterBg.png") no-repeat center center;
  background-size: cover;
}
</style>
