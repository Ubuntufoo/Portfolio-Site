<template>
  <div class="nav-chevron">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
.nav-chevron {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.nav-chevron span {
  display: block;
  width: 1.8vw;
  height: 1.8vw;
  border-bottom: 5px solid white;
  border-right: 5px solid white;
  transform: rotate(45deg);
  animation: animate 2s infinite;
}

.nav-chevron span:nth-child(2) {
  animation-delay: -0.2s;
}

.nav-chevron span:nth-child(3) {
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