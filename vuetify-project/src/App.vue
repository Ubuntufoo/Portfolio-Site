<template>
  <v-app class="bg-white">
    <ContactSideBar />
    <AppBar @nav-icon-clicked="drawer = !drawer" />
    <NavSideBar :drawer="drawer" />
    <full-page :options="options" id="fullpage" ref="fullpage">
      <section class="section angledEl" data-anchor="page1">
        <div class="slide">
          <v-main>
            slide                1
          </v-main>
        </div>
        <div class="slide active">
          <v-main>slide 1.1
            <!-- <div class="arrow-left">
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
            </div> -->
          </v-main>
        </div>
        <div class="slide">
          <v-main>
            slide 1.2
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
        navigation: true,
        controlArrows: false,
        scrollingSpeed: 1500,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['#d5dfff', '#cdcbcc']
      }
    };
  },
  methods: {
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Comic+Neue:ital,wght@1,300&display=swap');

.v-application {
  font-family: 'Belanosima' !important;
}
</style>

