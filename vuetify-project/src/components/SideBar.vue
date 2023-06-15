<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Timothy Murphy"
        subtitle="email@gmail.com"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-image" title="Color Gallery" value="color"></v-list-item>
      <v-list-item prepend-icon="mdi-dialpad" title="Gray-space Gallery" value="gray"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // Your setup code here
  }
});
</script>