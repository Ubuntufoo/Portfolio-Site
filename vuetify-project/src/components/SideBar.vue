<template>
  <v-navigation-drawer expand-on-hover rail class="bg-deep-purple">
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Rando Sketchowitz"
        subtitle="email@gmail.com"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-image" title="Color Gallery" value="color" @click="handleSelectOption(true)">
      </v-list-item>
      <v-list-item prepend-icon="mdi-dialpad" title="Gray-space Gallery" value="gray" @click="handleSelectOption(false)">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    handleSelectOption(isColor) {
      this.$emit('select-option', isColor);
    }
  },
});
</script>