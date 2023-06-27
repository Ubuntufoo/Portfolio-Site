<template>
  <!-- revert app bar background to transparent when done designing -->

  <v-app-bar id="app-bar" app dark :height="140" class="bg-transparent elevation-0">
    <v-app-bar-nav-icon @click="navToggle" class="mb-auto"></v-app-bar-nav-icon>
    <div class="w-50 mx-auto d-none d-sm-block mt-auto">
      <v-list nav class="d-flex flex-wrap justify-space-around bg-transparent mt-3" @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave">
        <a href="#page1" class="text-decoration-none text-black">
          <v-list-item class="text-h4 font-weight-bold">Skills
          </v-list-item>
        </a>
        <v-divider :thickness="2" vertical>
        </v-divider>
        <a href="#page1/1" class="text-decoration-none text-black">
          <v-list-item class="text-h4 font-weight-bold">Origin
          </v-list-item>
        </a>
        <v-divider :thickness="2" vertical>
        </v-divider>
        <a href="#page1/2" class="text-decoration-none text-black">
          <v-list-item class="text-h4 font-weight-bold">Projects
          </v-list-item>
        </a>
        <a href="#page2" class="text-decoration-none text-black flex-1-1-100 text-center mr-10 mt-md-8">
          <v-list-item class="text-h4 font-weight-bold">Roadmap
          </v-list-item>
        </a>
      </v-list>
    </div>
  </v-app-bar>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
    };
  },
  methods: {
    navToggle() {
      this.$emit('nav-icon-clicked');
    },
    handleMouseOver() {
      this.$emit('chevrons-hovered', true);
    },
    handleMouseLeave() {
      this.$emit('chevrons-hovered', false);
    },
  },
});
</script>

<style scoped></style>