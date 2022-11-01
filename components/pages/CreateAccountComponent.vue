<template>
  <div class="wrapper">
    <CModal :show="modalStore.getModalState">
      <div
        class="cross relative -right-[0.625rem] -top-[0.5rem] "
        @click="modalStore.toggleModal()"
      >
        <div
          v-for="i in 2"
          :key="i"
          class="absolute right-1 h-[3px] bg-blue w-[15px] "
        />
      </div>
      <a-form
        layout="vertical"
        :model="formState"
        name="basic"
        class="w-full"
        @finish="formApprove"
      >
        <div
          class="flex-col lg:flex-row lg:gap-[1.25rem] md:gap-[1.25rem] gap-[0rem] flex justify-between items-center  w-full"
        >
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
        <div class="flex-col flex lg:gap-[1.25rem] md:gap-[1.25rem] gap-[0rem] justify-between items-center  w-full">
          <a-form-item
            :label="ts('email')"
            name="email"
            :rules="[{ required: true, message: ts('emailP') }, {type: 'email', message: ts('emailP')}]"
          >
            <a-input
              v-model:value="formState.email"
              :placeholder="ts('emailP')"
            />
          </a-form-item>
          <a-form-item
            name="gender"
            :label="ts('gender')"
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
        <div
          class="flex-col flex lg:flex-row lg:gap-[1.25rem] md:gap-[1.25rem] gap-[0rem] justify-between items-center  w-full"
        >
          <a-form-item
            :label="ts('socialLink')"
            name="socialLink"
            :rules="[{ required: true, message: ts('socialLinkP') }]"
          >
            <a-input
              v-model:value="formState.socialLink"
              :placeholder="ts('socialLinkP')"
            />
          </a-form-item>
          <a-form-item
            name="course"
            :label="ts('course')"
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
        <div class="mt-4">
          <a-form-item
            class="!hidden sm:!block"
            name="allowPrivacy"
            :style="{display: 'flex'}"
            :rules="[{ required: true, message: 'Please Allow  this rules!' }]"
          >
            <a-radio
              v-model:checked="formState.allowPrivacy"
            >
              {{ ts('privacy') }}
              <NuxtLink>{{ ts('privacyLink') }}</NuxtLink>
              <p
                v-if="error"
                class="mb-0 text-error text-[1.2rem] text-semibold"
              >
                {{ ts('error') }}
              </p>
            </a-radio>
          </a-form-item>
        </div>
        <a-form-item class="flex justify-center items-center">
          <CButton
            type="submit"
            class="bg-blue shadow-none w-full sm:w-auto px-[10rem] py-[1rem] text-white"
          >
            {{ ts('submit') }}
          </CButton>
        </a-form-item>
      </a-form>
    </CModal>
  </div>
</template>

<script>
import CModal from "~/components/universal/CModal";
import {computed, ref, watch} from "vue";
import CButton from "~/components/universal/CButton";
import {useSelectedCourse} from '~/store/selectedCourse'
import {useModalState} from '~/store/modalState'
import {useRouter} from "nuxt/app";
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "CreateAccountComponent",
  components: {CModal, CButton},
  setup() {
    const modalStore = useModalState()
    const store = useSelectedCourse()
    const selectedCourse = computed(() => store.getSelectedCourse)
    const router = useRouter()
    const {ts} = useScopedI18n('createAccount')

    const formState = ref({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      course: '',
      allowPrivacy: false,
      socialLink: ''
    })

    const genders = computed(()=>[{
      value: ts('male'),
    }, {
      value: ts('woman')
    }])

    const error = ref(false)

    const formApprove = (e)=>{
      if(e.allowPrivacy===true){
        modalStore.toggleModal()
        router.push('/')
        error.value = false
      }else{
        error.value = true
      }

    }

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

    return {formState, genders, error,  modalStore, ts,  formApprove , options, selectedCourse}
  }
}
</script>

<style scoped lang="scss">
.wrapper {
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

  .ant-form-item-label > label::after {
    content: '';
  }

  .ant-form-item-control-input, .ant-picker {
    width: 100% !important;
  }

  .ant-form-item-required::after {
    content: '';
  }

   &:deep(.ant-form-item-control-input-content){
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .ant-form-item-control-input-content > input, .ant-picker, ant-select-selector {
    padding: 8px 12px;
    border-radius: 6px;
  }

  .ant-select {
    &:deep(.ant-select-selector){
      border-radius: 6px !important;
  }
}

.anticon {
  font-size: 18px;
  color: black;
}

.ant-row {
  display: block;
  width: 100%;
  margin-bottom: 0.738rem;
}

}
</style>