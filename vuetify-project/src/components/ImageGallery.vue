<template>
  <v-row>
    <v-col v-for="n in 36" :key="n" cols="4" lg="1" md="2" sm="3">
      <v-card>
        <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" cover class="bg-grey-lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // Your setup code here
  }
});
</script>