<template>
  <div
    class="flex flex-col lg:p-[1.875rem] p-[1.5rem]  lg:hover:scale-[1.15] lg:gap-[1.5rem] gap-[1.25rem]   lg:hover:border-none lg:hover:bg-white lg:duration-1000 lg:box-shadow rounded-[6px] cursor-pointer "
  >
    <div class="flex items-center gap-[1.563rem]">
      <img
        :src="`/cards-icons/${imgName}.png`"
        alt="cardsLogo"
      >
      <p class="leading-7 text-violet mb-0 text-[1.5rem] lg:font-bold font-medium">
        {{ title }}
      </p>
    </div>
    <div>
      <p class="lg:text-[1.188rem] lg:mt-0 md:mt-0 lg:px-[2.188rem] px-0 mt-[1.563rem] leading-6 text-violet mb-0 text-[1.25rem] lg:font-normal md:font-normal font-light">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneValueCard",
  props: {
    title: {
      required: true,
      type: String,
    },
    body: {
      required: true,
      type: String,
    },
    imgName: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.box-shadow:hover {
  box-shadow: 15px 15px 100px rgba(0, 0, 0, 0.1);
}
</style>
