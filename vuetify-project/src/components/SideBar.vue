<template>
  <v-navigation-drawer expand-on-hover rail class="bg-deep-purple">
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Timothy Murphy"
        subtitle="email@gmail.com"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-image" title="Color Gallery" value="color" @click="selectOption(true)">
      </v-list-item>
      <v-list-item prepend-icon="mdi-dialpad" title="Gray-space Gallery" value="gray" @click="selectOption(false)">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent, defineEmits } from 'vue';


export default defineComponent({
  setup() {
    const emits = defineEmits(['selectOption']);

    const selectOption = (isColor) => {
      emits('selectOption', isColor);
    };

    return {
      selectOption
    };
  },
});
</script>