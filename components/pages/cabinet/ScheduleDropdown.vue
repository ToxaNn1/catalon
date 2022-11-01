<template>
  <a-dropdown>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <img
            src="#"
            alt="pencil"
          ><span>{{ ts('edit') }}</span>
        </a-menu-item>
        <a-menu-item>
          <img
            src="/cabinet-icons/paperPlane.svg"
            alt="paperPlane"
          ><span>{{ ts('publish') }}</span>
        </a-menu-item>
        <a-menu-item>
          <img
            src="/cabinet-icons/checkbox.svg"
            alt="checked"
          ><span>{{ ts('published') }}</span>
        </a-menu-item>
        <a-menu-item>
          <img
            src="/cabinet-icons/broom.svg"
            alt="broom"
          ><span>{{ ts('unPublished') }}</span>
        </a-menu-item>
      </a-menu>
    </template>
    <img
      class="cursor-pointer"
      src="/cabinet-icons/threeDots.svg"
      alt="threeDots"
    >
  </a-dropdown>
</template>

<script>
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "ScheduleDropdown",
  setup(){
    const {ts} = useScopedI18n('scheduleDropdown')
    return {ts}
  }
}
</script>

<style scoped lang="scss">
.ant-dropdown-menu{
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
