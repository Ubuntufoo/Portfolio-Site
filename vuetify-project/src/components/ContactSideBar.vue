<template>
  <v-navigation-drawer expand-on-hover rail :width="280" :elevation="10" class="bg-black" location="right">
    <v-list>
      <v-list-item :lazy-src="`https://drive.google.com/uc?id=1kWJg9AJnxoGV4zFdlFypFMt5BTRTqkLc`"
        prepend-avatar="https://drive.google.com/uc?id=1kWJg9AJnxoGV4zFdlFypFMt5BTRTqkLc"
        title="Timothy Murphy">
      </v-list-item>
    </v-list>
    <v-divider elevation="24" >
    </v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-email-fast-outline" title="TimothyMurphy123@gmail.com">
      </v-list-item>
      <v-list-item prepend-icon="mdi-phone-in-talk-outline" title="(508) 737-6327">
      </v-list-item>
      <v-list-item prepend-icon="mdi-file-account" title="> Resume Download <">
      </v-list-item>
      <v-list-item prepend-icon="mdi-github" title="Github">
      </v-list-item>
      <v-list-item prepend-icon="mdi-linkedin" title="LinkedIn">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {

    };
  },
  methods: {

  },
});
</script>