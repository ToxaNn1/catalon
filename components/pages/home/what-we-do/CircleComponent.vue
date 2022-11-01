<template>
  <div class="circle-animate w-[323px] lg:mt-0 md:mt-0 mt-[2.5rem] lg:overflow-visible overflow-hidden h-[323px] relative flex justify-center items-center">
    <div class="circle-animate-center w-fit absolute">
      <img
        :src="'/circle-icons/union.svg'"
        alt="Union logo"
      >
    </div>

    <div class="rotate circle-animate__line absolute h-full w-full border border-dashed rounded-full" />
    <div class="rotate-back circle-animate__line absolute h-[75%] w-[75%] border border-dashed rounded-full" />
    <div class="rotate circle-animate__line absolute h-[50%] w-[50%] border border-dashed rounded-full" />
    <div class="rotate-back circle-animate__line absolute h-[25%] w-[25%] border border-dashed rounded-full" />

    <div class="rotate circle-animate__line absolute h-full w-full rounded-full flex items-center justify-between">
      <div class="absolute h-2.5 w-2.5 rounded-full bg-lightViolet left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
    </div>
    <div class="rotate-back circle-animate__line absolute h-[75%] w-[75%] rounded-full">
      <div class="absolute h-2.5 w-2.5 rounded-full bg-greenLight left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
      <div class="absolute h-2.5 w-2.5 rounded-full bg-yellow left-1/2 top-0 -translate-y-1/2 translate-x-1/2" />
      <div class="absolute h-2.5 w-2.5 rounded-full bg-blueLight left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2" />
    </div>
    <div class="rotate circle-animate__line absolute h-[50%] w-[50%] rounded-full flex items-center">
      <div class="absolute h-2.5 w-2.5 rounded-full bg-peachLight left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2" />
    </div>

    <!-- -->

    <div class="rotate circle-animate__line absolute h-full w-full rounded-full flex items-center justify-between">
      <div class="rotate-back h-2.5 w-2.5 rounded-full origin-center">
        <div class="absolute top-1/2 -translate-y-1/2 right-full mr-3 flex items-center justify-between z-100  border-lightGray  border-2  p-2 rounded-md bg-white w-fit">
          <p class="mb-0 text-center text-xl font-medium leading-6 mx-3">
            UI/UX Design
          </p>
          <div class="h-11 w-11 shrink-0">
            <img
              src="/circle-icons/ui-ux.png"
              alt="ui-ux"
              class="h-full w-full"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="rotate-back circle-animate__line absolute h-[75%] w-[75%] rounded-full">
      <div class="rotate absolute h-2.5 w-2.5 rounded-full left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div class="absolute top-1/2 -translate-y-1/2 left-full ml-3 flex items-center justify-between z-100  border-lightGray  border-2  p-2 rounded-md bg-white w-fit">
          <p class="mb-0 text-center text-xl font-medium leading-6 mx-3">
            QA
          </p>
          <div class="h-11 w-11 shrink-0">
            <img
              src="/circle-icons/qa.png"
              alt="ui-ux"
              class="h-full w-full"
            >
          </div>
        </div>
      </div>
      <div class="rotate absolute h-2.5 w-2.5 rounded-full left-1/2 top-0 -translate-y-1/2 translate-x-1/2">
        <div class="absolute top-1/2 -translate-y-1/2 right-full mr-3 flex items-center justify-between z-100  border-lightGray  border-2  p-2 rounded-md bg-white w-fit">
          <p class="mb-0 text-center text-xl font-medium leading-6 mx-3 whitespace-nowrap">
            Back-End
          </p>
          <div class="h-11 w-11 shrink-0">
            <img
              src="/circle-icons/back-end.png"
              alt="ui-ux"
              class="h-full w-full"
            >
          </div>
        </div>
      </div>
      <div class="rotate absolute h-2.5 w-2.5 rounded-full left-1/2 bottom-0 -translate-y-1/2 translate-x-1/2">
        <div class="absolute top-1/2 -translate-y-1/2 left-full ml-3 flex items-center justify-between z-100  border-lightGray  border-2  p-2 rounded-md bg-white w-fit">
          <p class="mb-0 text-center text-xl font-medium leading-6 mx-3">
            Mobile
          </p>
          <div class="h-11 w-11 shrink-0">
            <img
              src="/circle-icons/mobile.png"
              alt="ui-ux"
              class="h-full w-full"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="rotate circle-animate__line absolute h-[50%] w-[50%] rounded-full flex items-center">
      <div class="rotate-back absolute h-2.5 w-2.5 rounded-full left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2">
        <div class="absolute top-1/2 -translate-y-1/2 right-full mr-3 flex items-center justify-between z-100  border-lightGray  border-2  p-2 rounded-md bg-white w-fit">
          <p class="mb-0 text-center text-xl font-medium leading-6 mx-3 whitespace-nowrap">
            Front-End
          </p>
          <div class="h-11 w-11 shrink-0">
            <img
              src="/circle-icons/front-end.png"
              alt="ui-ux"
              class="h-full w-full"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.circle-animate {
  .rotate {
    transform-origin: center;
    animation: 15s rotate infinite linear;
  }

  .rotate-back {
    transform-origin: center;
    animation: 15s rotate-back infinite linear;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-back {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0);
  }
}
</style>