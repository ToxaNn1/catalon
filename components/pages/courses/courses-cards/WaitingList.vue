<template>
  <CModal :show="true">
    <div
      class="w-[300px] border-white rounded-md "
    >
      <div
        class="cross relative right-0 top-2 "
      >
        <div
          v-for="i in 2"
          :key="i"
          class="absolute right-1 h-[3px] bg-blue w-[15px] "
        />
      </div>
    </div>
  </CModal>
</template>

<script>
import {computed, ref, watch} from 'vue'
import {useSelectedCourse} from '~/store/selectedCourse'

export default {
  name: "WaitingList",

  setup() {
    const store = useSelectedCourse()
    const selectedCourse = computed(() => store.getSelectedCourse)
    const isModalVisible = ref(false)
    const formState = ref({
      firstName: '',
      lastName: '',
      email: '',
      datePicker: '',
      gender: '',
      education: '',
      course: '',
      allowPrivacy: true
    })
    const englishLevels = [{
      value: 'Elementary'
    },
    {
      value: 'PreIntermediate'
    }, {
      value: 'Intermediate'
    }, {
      value: 'Advanced'
    }]

    const showModal = () => {
      isModalVisible.value = true
    }

    const genders = [{
      value: 'Male',
    }, {
      value: 'Woman'
    }]
    const fileList = ref([])
    const options = [

      {value: 'BACK-END', label: 'BACK-END'},
      {value: 'MOBILE', label: 'MOBILE'},
      {value: 'UI/UX DESIGN', label: 'UI/UX DESIGN'},
      {value: 'FRONT-END', label: 'FRONT-END'},
      {value: 'QA', label: 'QA'},]

    watch(() => selectedCourse.value,
      (course) => {
        if (course) formState.value.course = course
      }, {immediate: true})

    return {englishLevels, isModalVisible, formState, genders, showModal, fileList, options, selectedCourse}
  }
}
</script>

<style scoped lang="scss">
.form-wrapper {
  :deep() {
    .ant-upload {
      flex-shrink: 0;

      &-list {
        border: 1px solid #261D3F;
        border-radius: 6px;
        width: 100%;
        margin-left: 40px;
        padding-bottom: 3px;

        &:has(div) {
          padding-bottom: 8px;
        }
      }
    }

    .ant-form-item-label > label::after {
      content: '';
    }

    .ant-form-item-control-input, .ant-picker {
      width: 100% !important;
    }

    .ant-form-item-required::after {
      content: '';
    }

    .ant-form-item-control-input-content > input, .ant-picker, {
      padding: 8px 12px;
      border-radius: 6px;
    }

    .ant-select-selector {
      border-radius: 6px;
    }

    .anticon {
      font-size: 18px;
      color: black;
    }

    .ant-row {
      display: block;
      width: 100%;
    }
  }

  .wrapper {
    margin-top: -150px;
  }

  #form_item_cover_letter {
    height: 5.625rem;
    padding: 8px 12px;
    border-radius: 6px;
  }

  .shadow-none {
    box-shadow: none;
  }
}
</style>
