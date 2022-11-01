<template>
  <div class="hidden wrapper lg:block">
    <p class="text-sm text-violet inline-block mt-[8.125rem] ml-[1rem] ">
      {{ ts('filter') }}
    </p>
    <img
      class="inline-block ml-[8px] cursor-pointer"
      :src="'/images/filter.svg'"
      alt="filter"
      @click="openFilter"
    >
    <CModal :show="filter">
      <div
        class="w-[300px] border-white rounded-md "
      >
        <div
          class="cross relative right-0 top-2 "
          @click="closeFilter"
        >
          <div
            v-for="i in 2"
            :key="i"
            class="absolute right-1 h-[3px] bg-blue w-[15px] "
          />
        </div>
        <div class="flex flex-col ">
          <p class="text-center leading-6 font-medium text-violet text-[1.25rem]">
            {{ ts('filter') }}
          </p>
          <span class="text-[1rem] text-violet leading-4 mb-[10px]">{{ ts('selectOccupation') }}</span>
          <hr class="bg-gray">
          <div class="flex flex-col justify-center pl-[10px] mt-[10px] mb-[30px] gap-[6px]">
            <a-checkbox
              v-for="checkbox in occupationCheckbox"
              :key="checkbox"
            >
              {{ checkbox.label }}
            </a-checkbox>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-[1rem] text-violet leading-4 mb-[10px]">{{ ts('selectQuarter') }}</span>
          <hr>
          <div
            class="flex flex-col leading-5 text-violet text-[0.875rem] justify-center pl-[10px] mt-[10px] mb-[30px] gap-[6px]"
          >
            <a-checkbox
              v-for="checkbox in quarterCheckbox"
              :key="checkbox"
            >
              {{ checkbox.label }}
            </a-checkbox>
          </div>
        </div>
        <div class="flex justify-between">
          <CButton class="shadow-reset">
            Reset
          </CButton>
          <CButton class="bg-blue shadow-reset text-white">
            Apply
          </CButton>
        </div>
      </div>
    </CModal>
  </div>
</template>

<script>
import {ref,computed} from 'vue'
import CButton from "~/components/universal/CButton";
import CModal from "~/components/universal/CModal";
import {useScopedI18n} from "~/utils/scopedI18n"
export default {
  name: "FilterPartComponent",
  components: { CModal, CButton},
  setup() {
    const filter = ref(false)

    const {ts} = useScopedI18n('filter')

    const occupationCheckbox = [{label: 'Front-End'}, {label: 'Back-End'}, {label: 'Mobile'},
      {label: 'UI/UX Design'},
      {label: 'QA'},]
    const quarterCheckbox = computed(()=>[{label: ts('january')}, {label: ts('april')}, {label: ts('july')}, {label: ts('october')}])

    const openFilter = () => {
      filter.value = !filter.value
    }
    const closeFilter = () => {
      filter.value = false
    }
    const value = ref(false)

    return {openFilter, filter, closeFilter, occupationCheckbox, ts,  quarterCheckbox ,value}
  }
}
</script>


<style scoped lang="scss">
.wrapper {
  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0px;
  }
  .ant-select-selector{
    border-radius: 6px !important;
  }
  .shadow-reset {
    box-shadow: none;
  }

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
}


</style>