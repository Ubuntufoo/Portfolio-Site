<template>
  <v-app-bar app dark :height="80" class="bg-transparent elevation-0">
    <v-app-bar-nav-icon @click="emitEvent"></v-app-bar-nav-icon>
    <div class="w-75 mx-auto">
      <v-list nav class="d-flex flex-nowrap justify-space-around mx-auto bg-transparent overflow-visible pt-16">
        <a href="#page1" class="text-decoration-none text-black">
          <v-list-item title="Origin">
          </v-list-item>
        </a>
        <v-divider :thickness="2" vertical>
        </v-divider>
        <a href="#page2" class="text-decoration-none text-black">
          <v-list-item title="Skills">
          </v-list-item>
        </a>
        <v-divider :thickness="2" vertical>
        </v-divider>
        <a href="#page3" class="text-decoration-none text-black">
          <v-list-item title="Projects">
          </v-list-item>
        </a>
        <v-divider :thickness="2" vertical>
        </v-divider>
        <a href="#page4" class="text-decoration-none text-black">
          <v-list-item title="Roadmap">
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