<template>
  <v-app>
    <SideBar @select-option="onSelectOption" />
    <v-main>
      <ImageGallery :is-with-color="isWithColor" />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SideBar from '@/components/SideBar.vue';
import ImageGallery from '@/components/ImageGallery.vue';

export default defineComponent({
  components: {
    SideBar,
    ImageGallery
  },
  data() {
    return {
      isWithColor: true
    };
  },
  methods: {
    onSelectOption(isColor) {
      this.isWithColor = isColor;
    }
  }
});
</script>


