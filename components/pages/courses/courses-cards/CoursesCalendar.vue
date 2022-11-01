<template>
  <div class="flex items-center wrapper relative bg-lightGray gap-8 py-4 px-6 rounded-md">
    <div class="flex gap-2">
      <img
        :src="'/courses-icons/marker.svg'"
        alt="location"
      >
      {{ ts('remote') }}
    </div>
    <div
      class="flex cursor-pointer  gap-2"
      @click="openCalendar"
    >
      <img
        :src="'/courses-icons/calendar.svg'"
        alt="calendar"
      >
      {{ current }}
    </div>
    <div class="absolute w-[300px] top-14">
      <a-calendar
        v-if="calendar"
        :fullscreen="false"
        @select="closeCalendar"
      />
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import dayjs from "dayjs";
import {useScopedI18n} from "~/utils/scopedI18n"

export default {
  name: "CoursesCalendar",
  props: {
    dateDekstop: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const calendar = ref(false)
    const current = ref(props.dateDekstop)
    const {ts} = useScopedI18n('courses')

    const openCalendar = () => {
      calendar.value = !calendar.value
    }

    const closeCalendar = (date) => {
      calendar.value = false
      current.value = dayjs(date.$d).format('D MMMM YYYY')
    }
    return {calendar, current, ts, openCalendar, closeCalendar}
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  &:deep(.ant-radio-button-wrapper .ant-radio-button-wrapper-checked) {
    border-radius: 6px 0px 0px 6px;
  }
}
</style>