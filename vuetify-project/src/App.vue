<template>
  <v-app class="bg-white">
    <ContactSideBar />
    <AppBar @nav-icon-clicked="drawer = !drawer" />
    <NavSideBar :drawer="drawer" />
    <full-page :options="options" id="fullpage" ref="fullpage">
      <section class="section angledEl" data-anchor="page1">
        <div class="slide compass">
          <v-main>
            <div class="chevron-left"></div>
            <div class="chevron-right"></div>
            <div class="chevron-down"></div>
            <h1>page 1</h1>
          </v-main>
        </div>
        <div class="slide compass">
          <v-main>

            <h1>1.1</h1>
          </v-main>
        </div>
        <div class="slide compass">
          <v-main>

            <h1>1.2</h1>
          </v-main>
        </div>
      </section>
      <section class="section angledEl compass" data-anchor="page2">
        <v-main>
          <h1>2</h1>
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
        sectionsColor: ['gray', 'gray', , ,]
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
.chevron-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 50px solid #9b0909;
  /* Change color as desired */
  border-bottom: 50px solid transparent;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.chevron-right {
  margin-left: auto;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 50px solid #9b0909;
  /* Change color as desired */
  border-bottom: 50px solid transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.chevron-down {
  margin: auto;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 50px solid #000000;
  /* Change color as desired */
  border-bottom: 50px solid transparent;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
</style>

