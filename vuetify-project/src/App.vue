<template>
  <v-app>

    <SideBar />
    <v-main>
      <ImageGallery></ImageGallery>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue';
import ImageGallery from './components/ImageGallery.vue';

export default defineComponent({
  components: {
    SideBar,
    ImageGallery
},
  setup() {

    return {};
  }
});
</script>


