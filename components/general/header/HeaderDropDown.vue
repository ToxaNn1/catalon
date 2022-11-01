<template>
  <a-dropdown overlay-class-name="dropdown-styles">
    <template #overlay>
      <a-menu
        class="text-[50px]"
      >
        <a-menu-item
          v-for="item in items"
          :key="item.key"
          :disabled="currentLocale === item.label"
          @click="changeLocale(item.key)"
        >
          {{ item.label }}
        </a-menu-item>
      </a-menu>
    </template>
    <a-button>
      {{ currentLocale }}
      <DownOutlined />
    </a-button>
  </a-dropdown>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
const LanguageEnum = {
  EN: 'en',
  UA: 'ua',
}
import { LOCAL_STORAGE_LOCALE_KEY } from "~/utils/scopedI18n"

export default {
  name: "HeaderDropDown",
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const currentLocale = computed(() => locale.value.toUpperCase())
    const items = ref([
      {
        key: LanguageEnum.EN,
        label: LanguageEnum.EN.toUpperCase()
      },
      {
        key: LanguageEnum.UA,
        label: LanguageEnum.UA.toUpperCase()
      }
    ])

    const changeLocale = (l) => {
      locale.value = l
      localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, l)
    }

    return {
      items,
      currentLocale,
      changeLocale,
      LanguageEnum,
    }
  }
};
</script>

<style lang="scss">
.ant-btn,
.ant-dropdown-trigger {
  @apply text-blue text-[0.875rem] rounded-md border-blue font-semibold leading-[1rem] flex items-center py-[21px];
  background: transparent;
  &:hover,
  &:focus {
    background: transparent;
  }
}
</style>
