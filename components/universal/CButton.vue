<template>
  <button
    type="button"
    class="rounded-[6px] border px-[45px] py-[13px] cursor-pointer button-shadow flex items-center justify-center"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "CButton",
};
</script>

<style scoped lang="scss">
.button-shadow {
  box-shadow: -14px 16px 50px rgba(62, 128, 250, 0.3);
}
</style>
