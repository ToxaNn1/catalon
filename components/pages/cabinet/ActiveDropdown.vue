<template>
  <a-dropdown>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <img
            src="/cabinet-icons/trash.svg"
            alt="pencil"
          ><span>{{ ts('delete') }}</span>
        </a-menu-item>
      </a-menu>
    </template>
    <img
      class="cursor-pointer hovered"
      src="/cabinet-icons/threeDots.svg"
    >
  </a-dropdown>
</template>

<script>
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "ActiveDropdown",
  setup(){
    const {ts} = useScopedI18n('activeDropdown')
    return {ts}
  }
}
</script>

<style scoped lang="scss">
.ant-dropdown-menu{
  .hovered:hover{
    filter: invert(76%) sepia(12%) saturate(4458%) hue-rotate(314deg) brightness(109%) contrast(89%);
  }
  @apply p-[1.25rem] -top-[1.25rem] right-[3px];
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