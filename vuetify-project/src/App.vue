<template>
  <v-app class="bg-white">
    <ContactSideBar />
    <AppBar @nav-icon-clicked="drawer = !drawer" />
    <NavSideBar :drawer="drawer" />
    <full-page :options="options" id="fullpage" ref="fullpage">
      <section class="section angledEl" data-anchor="page1">
        <v-main @click="drawer = false"></v-main>
      </section>
      <section class="section angledEl" data-anchor="page2">
        <v-main @click="drawer = false"></v-main>
      </section>
      <section class="section angledEl" data-anchor="page3">
        <v-main @click="drawer = false"></v-main>
      </section>
      <section class="section angledEl" data-anchor="page4">
        <v-main @click="drawer = false"></v-main>
      </section>
    </full-page>
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
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        navigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: [, , , ,]
      }
    };
  },
  methods: {
  }
});
</script>


<style scoped>
.angledEl {

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e7e7e7;
  clip-path: polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%);
}
</style>

