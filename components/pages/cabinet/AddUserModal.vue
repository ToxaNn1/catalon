<template>
  <CModal :show="store.getModalState">
    <section class="form-wrapper">
      <div
        class="cross relative right-0 -top-[10px]"
        @click="store.toggleModal()"
      >
        <div
          v-for="i in 2"
          :key="i"
          class="absolute  right-1 h-[3px] max-w-[39.438rem] bg-darkGray w-[15px] "
        />
      </div>

      <div
        class="flex relative flex-col items-center mx-auto container  w-full  wrapper bg-white rounded-md  "
      >
        <p class="text-violet font-semibold text-[2rem] leading-[2.469rem]">
          {{ ts('addUser') }}
        </p>
        <a-form
          :model="formState"
          name="basic"
          class="w-full"
        >
          <div class="flex-col lg:flex-row lg:gap-[1.25rem] gap-0 flex justify-between items-center  w-full">
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
          <div class="flex-col flex lg:flex-row lg:gap-[1.25rem] gap-0  justify-between items-center  w-full">
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
              :label="ts('job')"
              name="jobTitle"
            >
              <a-input
                v-model:value="formState.jobTitle"
                :placeholder="ts('jobP')"
              />
            </a-form-item>
          </div>
          <div class="flex-col flex lg:flex-row lg:gap-[1.25rem] gap-0  justify-between items-center  w-full">
            <a-form-item
              :name="ts('role')"
              label="Role"
              :placeholder="ts('roleP') "
              :rules="[{ required: true, message: ts('roleP') }]"
            >
              <a-select
                v-model:value="formState.role"
                :placeholder="ts('roleP') "
              >
                <a-select-option
                  v-for="role in roleVariants"
                  :key="role"
                  :value="role.value"
                >
                  {{ role.value }}
                </a-select-option>
              </a-select>
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
          <div class="flex flex-col lg:flex-row lg:gap-[1.25rem] gap-0 justify-between items-center  w-full">
            <a-form-item
              :label="ts('password')"
              name="password"
              :rules="[{ required: true, message: ts('passwordP')}]"
            >
              <a-input
                v-model:value="formState.password"
                :placeholder="ts('password')"
              />
            </a-form-item>
            <a-form-item
              :label="ts('confirmPassword')"
              name="confirmPassword"
              :rules="[{ required: true, message: ts('passwordP') }]"
            >
              <a-input
                v-model:value="formState.confirmPassword"
                :placeholder="ts('confirmPassword')"
              />
            </a-form-item>
          </div>
          <a-form-item>
            <CButton
              type="submit"
              class="bg-blue shadow-none flex justify-center items-center w-full px-[10rem] py-[1rem] text-white"
            >
              {{ ts('create') }}
            </CButton>
          </a-form-item>
        </a-form>
      </div>
    </section>
  </CModal>
</template>

<script>
import CModal from "~/components/universal/CModal";
import CButton from "~/components/universal/CButton";
import {ref} from 'vue'
import {useModalState} from "~/store/modalState";
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "AddUserModal",
  components: {CButton, CModal},
  setup(){
    const {ts} = useScopedI18n('sheduledAddUser')
    const store = useModalState()
    const formState = ref({
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      role: '',
      occupation: '',
      password: '',
      confirmPassword:''
    })

    const roleVariants = [
      {
        value: ts('roleUser')
      },
      {
        value: ts('roleAdmin')
      },
    ]

    const options = [
      {value: 'BACK-END', label: 'BACK-END'},
      {value: 'MOBILE', label: 'MOBILE'},
      {value: 'UI/UX DESIGN', label: 'UI/UX DESIGN'},
      {value: 'FRONT-END', label: 'FRONT-END'},
      {value: 'QA', label: 'QA'},]

    return {formState, store, ts, roleVariants, options}

  }
}
</script>

<style scoped  lang="scss">
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

    .ant-form-item-label > label::after{
      content: '';
    }
    .ant-form-item-control-input, .ant-picker {
      width: 100% !important;
    }
    .ant-form-item-required::after{
      content: '';
    }
    .ant-form-item-control-input-content > input , .ant-picker ,  {
      padding: 8px 12px;
      border-radius: 6px ;
    }
    .ant-select-selector{
      border-radius: 6px ;
    }
    .anticon{
      font-size: 18px;
      color: black;
    }
    .ant-row {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
    }
  }
  .shadow-none{
    box-shadow: none;
  }
}


</style>
