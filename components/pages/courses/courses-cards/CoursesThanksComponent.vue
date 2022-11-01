<template>
  <CModal :show="store.getModalState">
    <div
      class="border-white rounded-md"
    >
      <div
        class="cross relative right-0 top-0 "
        @click="store.toggleModal()"
      >
        <div
          v-for="i in 2"
          :key="i"
          class="absolute  right-1 h-[3px] max-w-[39.438rem] bg-darkGray w-[15px] "
        />
      </div>
      <div class="flex   flex-col items-center justify-center lg:gap-[3.125rem] gap-[1rem] lg:gap-[1.875rem]">
        <p class="mb-0  text-center leading-10 lg:text-[2.25rem] text-[2rem] font-medium">
          {{ ts('thankForApplication') }}
        </p>
        <p class="mb-0 text-center font-light text-[#261D3F] max-w-[630px] px-8 lg:text-[1.375rem] text-[1.25rem] lg:leading-8 leading-7">
          {{ ts('coursesText') }}
        </p>
        <div class="lg:w-auto w-[286px]">
          <img
            src="/images/svgthank.svg"
            alt="thankImg"
          >
        </div>
        <CButton
          class="bg-blue text-white border-none px-[5rem] py-[0.8rem] "
          @click="redirectToHome"
        >
          {{ ts('home') }}
        </CButton>
      </div>
    </div>
  </CModal>
</template>

<script>
import CModal from "~/components/universal/CModal";
import CButton from "~/components/universal/CButton";
import {useModalState} from "~/store/modalState";
import {useRouter} from "nuxt/app";
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "CoursesThanksComponent", components: {CButton, CModal},
  setup(){
    const store = useModalState()
    const router = useRouter()

    const redirectToHome = ()=> {
      store.toggleModal()
      router.push('/')
    }
    const {ts} = useScopedI18n('coursesThanks')
    return {store, redirectToHome , ts}
  }
}
</script>

<style scoped lang="scss">
.cross {
  cursor: pointer;
  div {
    &:first-of-type {
      top: 0;
      transform: rotate(45deg);
    }

    &:last-of-type {
      transform: rotate(-45deg);
      top: 0;
    }

  }
}

</style>
