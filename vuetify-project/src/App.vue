<template>
  <v-app>
    <SideBar/>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SideBar from '@/components/SideBar.vue';

export default defineComponent({
  components: {
    SideBar
  },
  data() {
    return {
    };
  },
  methods: {
  }
});
</script>


