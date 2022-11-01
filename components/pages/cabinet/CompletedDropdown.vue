<template>
  <a-dropdown>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <img
            src="/cabinet-icons/eye.svg"
            alt="pencil"
          ><span>{{ ts('viewDetails') }}</span>
        </a-menu-item>
      </a-menu>
    </template>
    <img
      class="cursor-pointer"
      src="/cabinet-icons/threeDots.svg"
    >
  </a-dropdown>
</template>

<script>
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "CompletedDropdown",
  setup(){
    const {ts} = useScopedI18n('completedDropdown')
    return {ts}
  }
}
</script>

<style scoped lang="scss">
.ant-dropdown-menu{
  @apply p-[1.25rem] -top-[1.25rem] right-[3px];
  box-shadow: 15px 15px 100px rgba(0, 0, 0, 0.1);
  &:deep( .ant-dropdown-menu-item){
    @apply p-0 rounded-md flex flex-col items-start gap-[1.5rem] justify-center;
    &>span{
      @apply flex gap-[1rem];
      &>span{
        @apply text-veryDarkGray text-[1rem] leading-[2.375rem]
      }
    }
  }
}
</style>