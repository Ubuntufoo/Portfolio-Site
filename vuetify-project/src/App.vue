<template>
  <v-app>

    <SideBar />
    <v-main>
      <!-- cards -->
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue';

export default defineComponent({
  components: {
    SideBar
  },
  setup() {
    // Your setup code here

    return {};
  }
});
</script>


