<template>
  <section
    class="pt-[6.25rem] pb-[3.75rem] container mx-auto flex flex-col cabinet-wrapper lg:px-auto md:px-auto px-[1.875rem]"
  >
    <div class="flex flex-col gap-[1.625rem]">
      <p class="text-[1.5rem] text-violet leading-[1.8rem] font-medium">
        {{ ts('profile') }}
      </p>
      <div class="flex items-start justify-between w-full gap-[1rem]">
        <img
          class="w-[4.5rem] shrink-0"
          src="/cabinet-icons/user.svg"
          alt="userIcon"
        >
        <a-form
          :model="formState"
          name="draggeble"
        >
          <a-form-item>
            <a-form-item
              name="dragger"
              no-style
            >
              <a-upload-dragger
                v-model:file-list="formState.fileList"
                name="files"
                action="/upload.do"
              >
                <p class="ant-upload-drag-icon flex justify-center items-center">
                  <img
                    src="/cabinet-icons/iconupload.svg"
                    alt="upload"
                  >
                </p>
                <p class="ant-upload-text text-center text-[0.75rem] text-violet font-bold">
                  {{ ts('upload') }} <span class=" text-[0.75rem] text-veryDarkGray ant-upload-hint">
                    {{ ts('uploadContinue') }}
                  </span>
                </p>
              </a-upload-dragger>
            </a-form-item>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="mt-[1rem]">
      <a-form
        :layout="'vertical'"
        :model="formState"
        name="basic"
        class="w-full flex flex-col gap-[1rem]"
      >
        <div class="flex-col lg:flex-row gap-[1.25rem] flex justify-between items-center  w-full">
          <a-form-item
            :label="ts('firstName')"
            name="firstName"
          >
            <a-input
              v-model:value="formState.firstName"
              :placeholder="ts('firstNameP')"
            />
          </a-form-item>
          <a-form-item
            :label="ts('lastName')"
            name="lastName"
          >
            <a-input
              v-model:value="formState.lastName"
              :placeholder="ts('lastNameP')"
            />
          </a-form-item>
        </div>
        <div class="flex-col lg:flex-row gap-[1.25rem] flex justify-between items-center  w-full">
          <a-form-item
            :label="ts('email')"
            name="email"
          >
            <a-input
              v-model:value="formState.email"
              :placeholder="ts('emailP')"
            />
          </a-form-item>
          <a-form-item
            :label="ts('role')"
            name="role"
          >
            <a-input
              v-model:value="formState.role"
            />
          </a-form-item>
        </div>
        <div class="flex gap-[1rem] mt-[0.625rem] justify-between">
          <a-form-item>
            <CButton
              class="shadow-none  py-[8px] font-semibold text-[1.125rem] leading-[1.625rem] border-none bg-lightGray text-violet"
            >
              {{ ts('cancel') }}
            </CButton>
          </a-form-item>
          <a-form-item>
            <CButton
              class="shadow-none bg-blue font-semibold text-[1.125rem] leading-[1.625rem]  py-[8px]  border-none text-white"
            >
              {{ ts('save') }}
            </CButton>
          </a-form-item>
        </div>
      </a-form>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue'
import CButton from "~/components/universal/CButton";
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "UserCabinet",
  components: {CButton},

  setup() {
    const formState = ref({
      fileList: [],
      firstName: '',
      lastName: '',
      email: '',
      role: ''
    })
    const {ts} = useScopedI18n('cabinet')
    return {formState , ts}
  }
}
</script>

<style scoped lang="scss">
.cabinet-wrapper {
  :deep() {
    .ant-upload-drag > span{
      padding: 14px 16px 14px 16px !important;
    }
    .ant-form-item .ant-upload.ant-upload-drag {
      @apply border-solid border-lightGray rounded-md;
    }

    .ant-form-item-label > label {
      @apply text-violet text-[1.125rem] leading-[1.625rem]
    }

    .ant-form-item-label > label::after {
      content: '';
    }

    .ant-form-item-control-input, {
      width: 100% !important;
    }

    .ant-form-item-required::after {
      content: '';
    }

    .ant-form-item-control-input-content > input, {
      padding: 8px 22px;
      border-radius: 6px;
    }

    .anticon {
      font-size: 18px;
      color: black;
    }

    .ant-row {
      display: block;
      width: 100%;

      & .ant-form-item-label {
        margin-left: 22px !important;
      }

      @media (max-width: 375px) {
        margin: 0;
      }
    }
  }

  .shadow-none {
    box-shadow: none;
  }
}
</style>