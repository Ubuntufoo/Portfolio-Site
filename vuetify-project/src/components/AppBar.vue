<template>
  <!-- revert app bar background to transparent when done designing -->

  <v-app-bar id="app-bar" app dark :height="140" class="bg-transparent elevation-0">
    <v-app-bar-nav-icon @click="emitEvent" class="mb-auto"></v-app-bar-nav-icon>
    <div class="w-50 mx-auto d-none d-sm-block mt-auto">
      <v-list nav class="d-flex flex-wrap justify-space-around bg-transparent mt-4">
        <a href="#page1" class="text-decoration-none text-black">
          <v-list-item class="text-h4">Skills
          </v-list-item>
        </a>
        <v-divider :thickness="2" vertical>
        </v-divider>
        <a href="#page1/1" class="text-decoration-none text-black">
          <v-list-item class="text-h4">Origin
          </v-list-item>
        </a>
        <v-divider :thickness="2" vertical>
        </v-divider>
        <a href="#page1/2" class="text-decoration-none text-black">
          <v-list-item class="text-h4">Projects
          </v-list-item>
        </a>
        <a href="#page2" class="text-decoration-none text-black flex-1-1-100 text-center mr-10 mt-md-8">
          <v-list-item class="text-h4">Roadmap
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
    emitEvent() {
      this.$emit('nav-icon-clicked');
    },
  },
});
</script>

<style scoped></style>