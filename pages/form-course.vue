<template>
  <section class="form-wrapper">
    <div class="background-form ">
      <div
        class="flex flex-col  container mx-auto items-center mx-auto py-[9.25rem] gap-[1.875rem] lg:mx-auto md:px-auto px-[1.25rem]"
      >
        <h2
          class="lg:text-[4rem] text-[2.37rem] lg:leading-[4.6rem] leading-[2.75rem] text-violet lg:w-2/3 mb-[3.75rem] w-full text-center"
        >
          {{ ts('applyToStart') }}
          <span class="text-blue">{{ ts('journey') }}</span>
        </h2>
      </div>
    </div>
    <div
      class="flex relative flex-col items-center mx-auto container lg:p-[5rem] md:p-[5rem] p-[1.25rem] w-full  wrapper bg-white rounded-md mb-[6.25rem] "
    >
      <a-form
        :model="formState"
        name="basic"
        class="w-full"
        @finish="modalStore.toggleModal()"
      >
        <div class="flex-col lg:flex-row gap-[1.25rem] flex justify-between items-center  w-full">
          <a-form-item
            :label="ts('firstName')"
            name="firstName"
            :rules="[{ required: true, message: ts('firstNameP') }]"
          >
            <a-input
              v-model:value="formState.firstName"
              :placeholder="ts('firstNameP')"
            />
          </a-form-item>
          <a-form-item
            :label="ts('lastName')"
            name="lastName"
            :rules="[{ required: true, message: ts('lastNameP') }]"
          >
            <a-input
              v-model:value="formState.lastName"
              :placeholder="ts('lastNameP')"
            />
          </a-form-item>
        </div>
        <div class="flex-col flex lg:flex-row gap-[1.25rem] justify-between items-center  w-full">
          <a-form-item
            :label="ts('email')"
            name="email"
            :rules="[{ required: true, message: ts('emailP') }, {type: 'email', message: 'Email is not a valid!'}]"
          >
            <a-input
              v-model:value="formState.email"
              :placeholder="ts('emailP')"
            />
          </a-form-item>
          <a-form-item
            name="datePicker"
            :label="ts('dateOfBirth')"
          >
            <a-date-picker
              v-model:value="formState.datePicker"
              :placeholder="ts('dateOfBirthP')"
              value-format="YYYY-MM-DD"
            />
          </a-form-item>
        </div>
        <div class="flex-col flex lg:flex-row gap-[1.25rem] justify-between items-center  w-full">
          <a-form-item
            name="gender"
            :label="ts('gender')"
            :rules="[{ required: true, message: ts('genderP') }]"
          >
            <a-select
              v-model:value="formState.gender"
            >
              <a-select-option
                v-for="gender in genders"
                :key="gender"
                :value="genders.value"
              >
                {{ gender.value }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            :label="ts('country')"
            name="country"
          >
            <a-input
              v-model:value="formState.country"
              :placeholder="ts('countryP')"
            />
          </a-form-item>
        </div>
        <div class="flex justify-between items-center flex-col lg:flex-row gap-[1.25rem] w-full">
          <a-form-item
            :label="ts('city')"
            name="city"
          >
            <a-input
              v-model:value="formState.city"
              :placeholder="ts('cityP')"
            />
          </a-form-item>
          <a-form-item
            :label="ts('education')"
            name="education"
            :rules="[{ required: true, message: ts('educationP') }]"
          >
            <a-input
              v-model:value="formState.education"
              :placeholder="ts('educationP')"
            />
          </a-form-item>
        </div>
        <div class="flex flex-col lg:flex-row gap-[1.25rem] justify-between items-center  w-full">
          <a-form-item
            name="dateStartEducation"
            :label="ts('startEducation')"
          >
            <a-date-picker
              v-model:value="formState.dateStartEducation"
              value-format="YYYY-MM-DD"
              :placeholder="ts('startEducationP')"
            />
          </a-form-item>
          <a-form-item
            name="dateEndEducation"
            :label="ts('endEducation')"
          >
            <a-date-picker
              v-model:value="formState.dateEndEducation"
              value-format="YYYY-MM-DD"
              :placeholder="ts('endEducationP')"
            />
          </a-form-item>
        </div>
        <div class="flex flex-col lg:flex-row gap-[1.25rem] justify-between items-center  w-full">
          <a-form-item
            name="englishLevel"
            :label="ts('englishLevel')"
            :rules="[{ required: true, message: ts('englishP') }]"
          >
            <a-select
              v-model:value="formState.englishLevel"
            >
              <a-select-option
                v-for="english in englishLevels"
                :key="english"
                :value="english.value"
              >
                {{ english.value }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            :label="ts('course')"
            label="Course"
            :rules="[{ required: true, message: ts('courseP') }]"
          >
            <a-select
              v-model:value="formState.course"
            >
              <a-select-option
                v-for="course in options"
                :key="course"
                :value="course.value"
              />
            </a-select>
          </a-form-item>
        </div>
        <div class="mb-3">
          <a-form-item
            name="textarea"
            :label="ts('letter')"
            class="text-area"
          >
            <a-textarea v-model:value="formState.textarea" />
          </a-form-item>
        </div>
        <div class="flex items-center justify-start flex-col md:flex-row mb-4 sm:mb-0">
          <div class="w-full mb-4 sm:mb-0 md:w-5/12 flex flex-col items-start justify-start">
            <div class="mb-0 text-xl">
              {{ ts('attach') }}
            </div>
            <div class="text-base font-light sm:font-normal">
              {{ ts('attachLimit') }}
            </div>
          </div>

          <div class="w-full md:w-7/12">
            <a-upload
              v-model:file-list="fileList"
              class="flex w-full justify-between items-center"
              :show-upload-list="true"
            >
              <div class="flex items-center">
                <div class="text-blue mr-[8px] text-base whitespace-nowrap">
                  {{ ts('attachFile') }}
                </div>
                <img
                  src="/images/plus-icon.svg"
                  alt="plus-icon"
                >
              </div>
            </a-upload>
          </div>
        </div>
        <div class="mt-4">
          <a-form-item
            name="privacy_policy"
            :style="{display: 'flex' , justifyContent:'start'}"
          >
            <a-radio
              v-model:checked="formState.allowPrivacy"
            >
              {{ ts('privacy') }}
              <NuxtLink>{{ ts('privacyLink') }}</NuxtLink>
            </a-radio>
          </a-form-item>
        </div>
        <a-form-item>
          <CButton
            type="submit"
            class="bg-blue shadow-none w-full sm:w-auto   py-[1.125rem] text-white"
          >
            {{ ts('submit') }}
          </CButton>
        </a-form-item>
      </a-form>
      <CoursesThanksComponent>
        <div class="absolute top-0 -mt-[25px]">
          <img
            src="/images/arrowcircle.svg"
            alt="arrowCircle"
          >
        </div>
      </coursesthankscomponent>
    </div>
  </section>
</template>

<script>
import {computed, ref, watch} from 'vue'
import CButton from "~/components/universal/CButton";
import {useSelectedCourse} from '~/store/selectedCourse'
import {useModalState} from '~/store/modalState'
import CoursesThanksComponent from "~/components/pages/courses/courses-cards/CoursesThanksComponent";
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "FormCourse",
  components: {CoursesThanksComponent, CButton},

  setup() {
    const store = useSelectedCourse()
    const modalStore = useModalState()

    const selectedCourse = computed(() => store.getSelectedCourse)
    const {ts} = useScopedI18n('formCourse')

    const formState = ref({
      firstName: '',
      lastName: '',
      email: '',
      datePicker: '',
      gender: '',
      country: '',
      city: '',
      education: '',
      dateStartEducation: '',
      dateEndEducation: '',
      englishLevel: '',
      course: '',
      textarea: '',
      allowPrivacy: false
    })

    const englishLevels = computed(() => [
      {
        value: ts('elementary')
      },
      {
        value: ts('preIntermediate')
      }, {
        value: ts('intermediate')
      }, {
        value: ts('advanced')
      }])


    const genders = computed(()=>[{
      value: ts('male')
    }, {
      value: ts('woman')
    }])

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

    return {englishLevels, ts, formState, genders, modalStore, fileList, options, selectedCourse}
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

    .ant-form-item-control-input-content {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;

      & > button {
        width: 23.688rem !important;
        margin-top: 1.875rem;
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
    margin-top: -9.375rem;
  }

  #form_item_cover_letter {
    height: 5.625rem;
    padding: 8px 12px;
    border-radius: 6px;
  }

  .background-form {
    background: url("/images/preFooterBg.png") no-repeat center center;
    background-size: cover;
  }

  .shadow-none {
    box-shadow: none;
  }
}
</style>
