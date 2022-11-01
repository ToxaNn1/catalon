<template>
  <img
    v-for="icon in icons"
    :key="icon"
    :src="`/courses-icons/${icon}.svg`"
    alt="icon"
  >
</template>

<script>
export default {
  name: "CoursesCardsIcons",
  props: {
    icons: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped></style>
