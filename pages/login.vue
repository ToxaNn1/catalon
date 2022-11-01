<template>
  <section class="bg-lightIndigoBlue">
    <div class="flex justify-center pt-[5rem] items-center">
      <img
        src="/images/svglog.svg"
        alt="loginSvg"
      >
    </div>
    <div class="flex flex-col form-wrapper   justify-center items-center bg-white p-[1.5rem]">
      <p class="lg:text-[2.625rem] text-violet paragraph  text-[2rem] leading-10 font-semibold ">
        {{ ts('welcome') }}
      </p>
      <p class="lg:text-[1.5rem] text-[1.25rem] leading-7 font-light text-violet ">
        {{ ts('loginText') }}
      </p>
      <a-form
        :model="loginForm"
        name="loginForm"
        layout="inline"
        autocomplete="off"
        class="flex flex-col   justify-center items-center gap-[1rem] "
        @finish="loginInSystem"
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
        <p class="mb-0 text-start text-[1rem] leading-[1.75rem text-violet font-light">
          {{ ts('loginSubtext') }}
          <NuxtLink
            to="/courses"
            class="text-[1rem] leading-[1.75rem text-blue font-light"
          >
            {{ ts('loginLink') }}
          </NuxtLink>
        </p>
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
import {useAuth} from "~/store/autenfication";
import {useRouter} from "nuxt/app";
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "Login",
  components: {CButton},
  setup() {
    const router = useRouter()
    const store = useAuth()
    const loginForm = reactive({
      email: '',
      password: '',
    });

    const {ts} = useScopedI18n('login')

    const loginInSystem = ()=>{
      store.logIn()
      router.push('/user-cabinet')
    }

    return {
      loginForm,
      loginInSystem,
      ts
    };
  },
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  &:deep(.ant-form-item) {
    width: 100%;
  }

  &:deep(.ant-form-inline .ant-form-item){
    margin-right: 0;
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
    @apply lg:mt-[3.75rem]  md:mt-[3.75rem] mt-0;
  }

  .button {
    @apply mt-[12px] w-full  lg:mb-[3.75rem] md:mb-[3.75rem] rounded-md bg-blue text-white font-bold   text-[1rem]  leading-7;
    box-shadow: none;
  }
}
</style>