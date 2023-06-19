<template>
  <v-app>
    <ContactSideBar />
    <AppBar @nav-icon-clicked="drawer = !drawer" />
    <NavSideBar :drawer="drawer" />
    <v-main @click="drawer = false" class="bg-grey-lighten-4">
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ContactSideBar from '@/components/ContactSideBar.vue';
import NavSideBar from '@/components/NavSideBar.vue';
import AppBar from '@/components/AppBar.vue';

export default defineComponent({
  components: {
    ContactSideBar,
    NavSideBar,
    AppBar
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
  }
});
</script>


