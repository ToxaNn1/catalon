<template>
  <div
    v-if="show"
    class="modal overflow-auto bg-violet/60"
    @click.stop="hideDialog"
  >
    <div
      class="modal__content"
      @click.stop
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "CModal",
  props:{
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  setup(){
    const hideDialog = ()=>{
      console.log(10)
    }
    return {hideDialog}
  }
}
</script>

<style scoped lang="scss">
.modal{
  @apply top-0 bottom-0 left-0 right-0 fixed flex;
  z-index: 100;
  &__content{
    @apply m-auto bg-white rounded-lg sm:p-10 px-5 py-6 sm:max-w-[60vw] ; //w-full
    min-width: 250px;
  }
}
</style>
