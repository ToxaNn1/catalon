<template>
  <section class="h-screen">
    <div class="flex flex-col form-wrapper  justify-center items-center h-full bg-white p-[1.5rem]">
      <p class="lg:text-[2.625rem] text-violet  text-[2rem] leading-10 paragraph font-semibold ">
        {{ ts('welcome') }}
      </p>

      <a-form
        :model="loginForm"
        name="loginForm"
        layout="inline"
        autocomplete="off"
        class="flex flex-col justify-center items-center gap-[1rem] "
        @finish="logInSystem"
      >
        <a-form-item
          name="email"
          :rules="[{ required: true, message: 'Please input your email!' }, {type: 'email', message: 'Email is not a valid!'}]"
        >
          <a-input
            v-model:value="loginForm.email"
            :placeholder="ts('email')"
          >
            <template #prefix>
              <MailOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            v-model:value="loginForm.password"
            :placeholder="ts('password')"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <CButton
            type="submit"
            class="button"
          >
            {{ $t('logIn') }}
          </CButton>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>

<script>
import {reactive} from "vue";
import CButton from "~/components/universal/CButton";
import {useRouter} from "nuxt/app";
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "AdminLogin",
  components: {CButton},
  setup() {
    const {ts} = useScopedI18n('adminLogin')
    const router = useRouter()
    const loginForm = reactive({
      email: '',
      password: '',
    });

    const logInSystem = ()=>{
      router.push('/user-cabinet')
    }

    return {
      loginForm,logInSystem, ts
    };
  },
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  &:deep(.ant-form-item) {
    width: 100%;
  }

  &:deep(.ant-form-item-control-input-content) {
    width: 100%;
    border-radius: 12px;
  }

  &:deep(.ant-input-affix-wrapper>input) {
    padding: 12px 16px;
  }

  &:deep(.ant-input-affix-wrapper) {
    border-radius: 6px;
  }

  &:deep(.ant-input-password ) {
    background: #F0F0F0;
  }

  &:deep(.ant-input-password > input ) {
    background: #F0F0F0;
  }

  .paragraph{
    @apply lg:mt-[2.75rem]  md:mt-[2.75rem] mt-0;
  }

  .button {
    @apply mt-[12px] w-full  lg:mb-[2.75rem] md:mb-[2.75rem] rounded-md bg-blue text-white font-bold   text-[1rem]  leading-7;
    box-shadow: none;
  }
}
</style>