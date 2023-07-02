<template>
  <v-app class="bg-white">
    <ContactSideBar />
    <!-- @chevrons-hovered="showChevrons = $event" -->
    <AppBar @nav-icon-clicked="drawer = !drawer" />
    <NavSideBar :drawer="drawer" />
    <full-page :options="options" id="fullpage" ref="fullpage">
      <section class="section angledEl" data-anchor="page1">
        <div class="slide">
          <v-main>
            <p class="text-center">slide 1.0</p>
            <template v-if="showChevrons">
              <template v-for="direction in ['right', 'right-bottom']">
                <NavChevron :class="`skills-chevron-${direction}`" />
              </template>
            </template>
          </v-main>
        </div>
        <div class="slide active">
          <v-main>
            <p class="text-center">slide 1.1</p>
            <template v-if="showChevrons">
              <template v-for="direction in ['left', 'right', 'bottom']">
                <NavChevron :class="`origin-chevron-${direction}`" />
              </template>
            </template>
          </v-main>
        </div>
        <div class="slide">
          <v-main>
            <p class="text-center">slide 1.2</p>
            <template v-if="showChevrons">
              <template v-for="direction in ['left', 'left-bottom']">
                <NavChevron :class="`projects-chevron-${direction}`" />
              </template>
            </template>
          </v-main>
        </div>
      </section>
      <section class="section angledEl" data-anchor="page2">
        <v-main>
          <p class="text-center">section 2</p>
          <template v-if="showChevrons">
            <template v-for="direction in ['top', 'left-top', 'right-top']">
              <NavChevron :class="`roadmap-chevron-${direction}`" />
            </template>
          </template>
        </v-main>
      </section>
    </full-page>

  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ContactSideBar from '@/components/ContactSideBar.vue';
import NavSideBar from '@/components/NavSideBar.vue';
import AppBar from '@/components/AppBar.vue';
import NavChevron from './components/NavChevron.vue';

export default defineComponent({
  components: {
    ContactSideBar,
    NavSideBar,
    AppBar,
    NavChevron,
  },
  data() {
    return {
      drawer: false,
      showChevrons: true,
      options: {
        licenseKey: 'gplv3-license',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        navigation: true,
        controlArrows: false,
        scrollingSpeed: 1500,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['#ED6E64', '#0C98F7'],
      }
    };
  },
  methods: {
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&family=Raleway+Dots&display=swap');

.v-application {
  font-family: 'Quicksand', sans-serif;
}

/* Navigation chevrons */
.origin-chevron-left {
  top: 45%;
  left: 35%;
  transform: rotate(90deg);
}

.origin-chevron-right {
  top: 45%;
  left: 63.2%;
  transform: rotate(-90deg);
}

.origin-chevron-bottom {
  top: 85%;
  left: 49.45%;
  transform: rotate(0deg);
}

.skills-chevron-right {
  top: 45%;
  left: 30%;
  transform: rotate(-90deg);
}

.skills-chevron-right-bottom {
  top: 85%;
  left: 30.1%;
  transform: rotate(-45deg);
}

.projects-chevron-left {
  top: 45%;
  left: 68.3%;
  transform: rotate(90deg);
}

.projects-chevron-left-bottom {
  top: 85%;
  left: 68.2%;
  transform: rotate(45deg);
}

.roadmap-chevron-top {
  top: 19%;
  left: 48%;
  transform: rotate(180deg);
}

.roadmap-chevron-right-top {
  top: 19%;
  left: 91%;
  transform: rotate(-135deg);
}

.roadmap-chevron-left-top {
  top: 19%;
  left: 4.5%;
  transform: rotate(135deg);
}
</style>

