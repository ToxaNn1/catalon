<template>
  <div class="min-h-[100vh] flex flex-col">
    <HeaderComponent />
    <div class="flex-1">
      <NuxtPage />
    </div>
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from "~/components/general/header/HeaderComponent";
import { useScopedI18n } from "~/utils/scopedI18n"
import { onMounted } from 'vue'
import FooterComponent from "~/components/general/footer/FooterComponent";

export default {
  components: { FooterComponent, HeaderComponent },
  setup() {
    const { setInitialLocale } = useScopedI18n()
    onMounted(setInitialLocale)
  }
};
</script>
