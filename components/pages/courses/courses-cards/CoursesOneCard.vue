<template>
  <div class="flex-col flex items-center justify-between">
    <div class="lg:hidden flex w-[300px] items-center rounded-md  justify-between bg-lightGray mb-[1.5rem]">
      <div class="flex items-center ml-[1rem] gap-[1.125rem] ">
        <img
          src="/courses-icons/level.svg"
          alt="level"
        >
        <p class="mb-0 font-bold text-violet text-[1.118rem] leading-5">
          {{ ts('entryLevel') }}
        </p>
      </div>
      <button class="!px-[1.375rem] py-[1.118rem] bg-peach uppercase text-white font-bold rounded-md">
        {{ ts('free') }}
      </button>
    </div>
    <img
      :src="`/courses-img/${img}.svg`"
      alt="ImageCourse"
    >
    <div class="flex flex-col items-center mt-[1.875rem] gap-[0.875rem]">
      <p class="text-violet text-2xl font-semibold lg:mb-auto mb-0">
        {{ title }}
      </p>
      <p class="text-violet text-sm text-center hidden lg:block mb-0 ">
        {{ body }}
      </p>
      <p class="lg:hidden text-violet text-[1.25rem] leading-7 text-center mb-0">
        {{ date }}
      </p>
    </div>
  </div>
</template>

<script>
import {useScopedI18n} from "~/utils/scopedI18n";

export default {
  name: "CoursesOneCard",
  props:{
    date:{
      type:String,
    },
    body:{
      type:String
    },
    title:{
      type:String
    },
    img:{
      type:String
    }
  },
  setup(){
    const {ts} = useScopedI18n('courses')
    return {ts}
  }
};
</script>

<style scoped></style>
