<template>
  <v-app class="bg-white">
    <ContactSideBar />
    <AppBar @nav-icon-clicked="drawer = !drawer" />
    <NavSideBar :drawer="drawer" />
    <full-page :options="options" id="fullpage" ref="fullpage">
      <section class="section angledEl" data-anchor="page1">
        <div class="slide">
          <v-main>

          </v-main>
        </div>
        <div class="slide active">
          <v-main>
            <div class="arrow-left">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="arrow-right">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="arrow-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </v-main>
        </div>
        <div class="slide">
          <v-main>

          </v-main>
        </div>
      </section>
      <section class="section angledEl" data-anchor="page2">
        <v-main>

        </v-main>
      </section>
      <!-- <section class="section angledEl" data-anchor="page3">
        <v-main></v-main>
      </section>
      <section class="section angledEl" data-anchor="page4">
        <v-main></v-main>
      </section> -->
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
        licenseKey: 'gplv3-license',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        // menu: '#menu',
        navigation: true,
        controlArrows: false,
        scrollingSpeed: 1500,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['#cdcbcc', '#cdcbcc']
      }
    };
  },
  methods: {
  }
});
</script>

<style scoped>
/* .angledEl {
  top: 0;
  left: 0;
  width: 97.4%;
  height: 100%;
  background-color: #dbdbdb;
  clip-path: polygon(50% 0, 0% 50%, 100% 50%, 50% 100%, 0 50%);
} */

/* Left nav chevrons */
</style>

