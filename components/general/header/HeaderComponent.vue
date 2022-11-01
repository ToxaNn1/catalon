<template>
  <header
    class="lg:flex-row flex   items-center absolute justify-between pt-[1.25rem] container mx-auto z-50 left-1/2 translate-x-[-50%] px-[1.25rem] lg:px-auto md:px-auto"
    :class="{'!justify-end !fixed': store.getActiveMenu , '!flex-row-reverse': authStore.getAuthStatus}"
  >
    <div
      v-if="authStore.getAuthStatus"
      class="flex items-center gap-[1.25rem]"
    >
      <template v-if="!store.getActiveMenu">
        <img
          src="/images/notifications.svg"
          alt="notification"
        >
        <img
          src="/cabinet-icons/user.svg"
          alt="user-icon"
          class="cursor-pointer w-[3.313rem] h-[3.313rem]"
          @click="redirectToCabinet"
        >
      </template>
    </div>
    <NuxtLink to="/">
      <div
        v-if="!store.getActiveMenu"
        class="flex items-center gap-[0.688rem]"
      >
        <img
          :src="'/images/logo.png'"
          alt="logo"
        >
        <div class="flex flex-col items-start justify-start gap-[3px]">
          <div>
            <img
              class="w-[90%]"
              src="/images/catalon.svg"
              alt="catalon"
            >
          </div>
          <p
            class="font-light text-[1.188rem] mb-[0px] leading-[1.3125rem] text-blue"
          >
            {{ $t('academy') }}
          </p>
        </div>
      </div>
    </NuxtLink>
    <nav
      class="flex items-center font-light text-[1.125rem] leading-[1.3125rem] text-violet gap-[4.063rem]  md:hidden hidden lg:flex"
    >
      <NuxtLink
        active-class="text-blue hover:text-blue font-medium text-[1.125rem] leading-5"
        to="/"
        class="text-violet font-light text-[1.125rem] leading-[1.313rem]  hover:text-blue"
      >
        {{ ts('home') }}
      </NuxtLink>
      <NuxtLink
        active-class="text-blue hover:text-blue font-medium text-[1.125rem] leading-5"
        to=""
        class="text-violet font-light text-[1.125rem] leading-[1.313rem]  hover:text-blue"
      >
        {{ ts('about') }}
      </NuxtLink>
      <NuxtLink
        active-class="text-blue hover:text-blue font-medium text-[1.125rem] leading-5"
        to="/courses"
        class="text-violet font-light text-[1.125rem] leading-[1.313rem]  hover:text-blue"
      >
        {{ ts('courses') }}
      </NuxtLink>
      <NuxtLink
        active-class="text-blue hover:text-blue font-medium text-[1.125rem] leading-5"
        to=""
        class="text-violet font-light text-[1.125rem] leading-[1.313rem]  hover:text-blue"
      >
        {{ ts('contactUs') }}
      </NuxtLink>
    </nav>
    <div class="flex items-center gap-[1.875rem]  md:hidden hidden lg:flex">
      <HeaderDropDown />
      <NuxtLink
        class="hover:text-violet text-violet"
        to="/login"
      >
        <CButton
          v-if="!authStore.getAuthStatus"
          class="font-semibold text-[0.875rem] leading-[1.026rem] hover:border-blue hover:text-blue duration-500"
        >
          {{ $t('logIn') }}
        </CButton>
      </NuxtLink>
    </div>

    <div class=" md:block block lg:hidden mt-[0.625rem] w-[2.1rem] h-[2.1rem] ">
      <div
        class="h-4 w-4 relative toggle-menu-btn cursor-pointer"
        :class="store.getActiveMenu && 'active'"
        @click="toggle"
      >
        <div
          v-for="i in 3"
          :key="i"
          class="absolute left-0 h-[1.5px] w-[1.75rem] bg-blue w-full transition-all duration-500 origin-center"
        />
      </div>
    </div>
  </header>
  <Transition
    name="fade"
    :duration="1500"
  >
    <div
      v-if="store.getActiveMenu"
      :class="{show: !store.getActiveMenu}"
      class="h-screen bg-white pb-8 z-[49] fixed w-full duration-1000"
    >
      <div
        class="flex flex-col items-center justify-between  h-full "
      >
        <div class="flex flex-col justify-center items-center pt-[7.188rem]">
          <nav
            class="flex flex-col items-center justify-center gap-[3.1rem] text-violet text-[1.875rem] leading-[2.875rem]"
          >
            <NuxtLink
              to="/"
              active-class="text-violet"
            >
              {{ ts('home') }}
            </NuxtLink>
            <NuxtLink
              to="#"
              active-class="text-violet"
            >
              Calendar
            </NuxtLink>
            <NuxtLink
              to="#"
              active-class="text-violet"
            >
              {{ ts('aboutUs') }}
            </NuxtLink>
          </nav>
          <NuxtLink
            to="/login"
            active-class="text-violet"
          >
            <CButton
              class="text-[1.5rem] mt-[3.688rem] bg-white button-shadow border-blue text-blue shadow-0"
            >
              {{ $t('logIn') }}
            </CButton>
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center gap-[1.188rem]">
          <p class="text-violet text-[1.125rem]  leading-[1.875rem] mb-0">
            {{ ts('followUs') }}
          </p>
          <div class="flex gap-[1.5rem]">
            <img
              src="/images/facebook.svg"
              alt="facebook"
            >
            <img
              src="/images/twitter.svg"
              alt="twitter"
            >
            <img
              src="/images/linkedin.svg"
              alt="linkedin"
            >
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import HeaderDropDown from "~/components/general/header/HeaderDropDown";
import CButton from "~/components/universal/CButton";
import {useScopedI18n} from "~/utils/scopedI18n"
import {useHamburgerMenu} from '~/store/hamburgerMenu'
import {useAuth} from "~/store/autenfication";
import {useRouter} from "nuxt/app";

export default {
  name: "HeaderComponent",
  components: {CButton, HeaderDropDown},
  setup() {
    const authStore = useAuth()
    const store = useHamburgerMenu()
    const router = useRouter()

    const toggle = () => {
      store.toggleMenu()
    }

    const redirectToCabinet = (()=>{
      router.push('/UserCabinet')
    })

    const {ts} = useScopedI18n('header')

    return {
      ts,
      redirectToCabinet,
      store,
      toggle,
      authStore
    }
  }
};
</script>

<style scoped lang="scss">
.toggle-menu-btn {
  div {
    &:first-of-type {
      @apply top-0;
    }

    &:nth-of-type(2) {
      @apply top-1/2 -translate-y-1/2;
    }

    &:last-of-type {
      @apply bottom-0;
    }
  }

  &.active div {
    &:first-of-type {
      @apply rotate-45 top-1/2 -translate-y-1/2 h-[2px] w-[1.75rem];
    }

    &:nth-of-type(2) {
      @apply opacity-0;
    }

    &:last-of-type {
      @apply -rotate-45 translate-y-1/2 bottom-1/2 h-[2px] w-[1.75rem];
    }
  }
}

.show {
  display: none;
}

.button-shadow {
  box-shadow: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
