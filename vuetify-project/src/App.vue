<template>
  <v-app>
    <SideBar @selectOption="onSelectOption" />
    <v-main>
      <ImageGallery :isWithColor="isWithColor" />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue';
import SideBar from '@/components/SideBar.vue';
import ImageGallery from './components/ImageGallery.vue';



export default defineComponent({
  components: {
    SideBar: {
      name: 'SideBar',
    },
    ImageGallery: {
      name: 'ImageGallery',
    }
  },
  setup() {

    const isWithColor = ref(true);

    const onSelectOption = (isColor) => {
      isWithColor.value = isColor;
    }

    return {
      onSelectOption
    };
  }
});
</script>


