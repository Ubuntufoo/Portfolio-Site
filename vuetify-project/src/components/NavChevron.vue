<template>
  <div>

  </div>
</template>

<script">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {


    return {}
  }
})
</script>

<style scoped>
.arrow-left {
  position: absolute;
  top: 45%;
  left: 34.6%;
  transform: translate(-50%, -50%);
  transform: rotate(90deg);
  cursor: pointer;
}

.arrow-left span {
  display: block;
  width: 1.2vw;
  height: 1.2vw;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);
  animation: animate 4s infinite;
}

.arrow-left span:nth-child(2) {
  animation-delay: -0.2s;
}

.arrow-left span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}

/* Right nav chevrons */
.arrow-right {
  position: absolute;
  top: 45%;
  left: 30.2%;
  transform: translate(-50%, -50%);
  transform: rotate(-90deg);
  cursor: pointer;
}

.arrow-right span {
  display: block;
  width: 1.2vw;
  height: 1.2vw;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);
  animation: animate 4s infinite;
}

.arrow-right span:nth-child(2) {
  animation-delay: -0.2s;
}

.arrow-right span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}

/* Bottom nav chevrons */
.arrow-down {
  position: absolute;
  top: 90.5%;
  left: 16%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.arrow-down span {
  display: block;
  width: 1.2vw;
  height: 1.2vw;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);
  animation: animate 4s infinite;
}

.arrow-down span:nth-child(2) {
  animation-delay: -0.2s;
}

.arrow-down span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>