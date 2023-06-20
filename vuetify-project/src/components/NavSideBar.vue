<template>
  <v-navigation-drawer v-model="drawer" :width="150" absolute floating class="bg-transparent h-screen">
    <v-list nav dense class="text-center">
      <a href="#page1" class="text-decoration-none text-black">
        <v-list-item title="Origin" class="my-2">
        </v-list-item>
      </a>
      <v-divider :thickness="2">
      </v-divider>
      <a href="#page2" class="text-decoration-none text-black">
        <v-list-item title="Skills" class="my-2">
        </v-list-item>
      </a>
      <v-divider :thickness="2">
      </v-divider>
      <a href="#page3" class="text-decoration-none text-black">
        <v-list-item title="Projects" class="my-2">
        </v-list-item>
      </a>
      <v-divider :thickness="2">
      </v-divider>
      <a href="#page4" class="text-decoration-none text-black">
        <v-list-item title="Roadmap" class="my-2">
        </v-list-item>
      </a>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['drawer'],
  data() {
    return {

    };
  },
  methods: {
  },
});
</script>