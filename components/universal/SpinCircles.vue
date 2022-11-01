<template>
  <div class="circle4 relative">
    <img :src="'/circle-icons/qa.png'" class="absolute" alt="" />
    <div class="circle3">
      <div class="circle2">
        <div class="circle1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
div {
  border-radius: 50%;
  /* border: 1px solid red; */
}

.circle4 {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px dashed black;
}

.circle3 {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 225px;
  height: 225px;
  border: 1px dashed black;
}
.circle2 {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 150px;
  height: 150px;
  border: 1px dashed black;
}
.circle1 {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 75px;
  height: 75px;
  border: 1px dashed black;
}

@keyframes rotation-bg {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0);
  }
}

@keyframes rotation-line {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes scrolling-left1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes scrolling-left2 {
  0% {
    opacity: 1;
    transform: translateX(-200%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes scrolling-left3 {
  0% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(0%);
  }
}
</style>
