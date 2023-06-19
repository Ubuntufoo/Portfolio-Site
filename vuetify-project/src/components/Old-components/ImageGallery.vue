<template>
  <v-card class="ma-5 pa-4">
    <v-row>
      <v-col v-for="n in 100" :key="n" cols="4" lg="1" md="2" sm="3">
        <v-card>
          <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${isWithColor ? '' : '&grayscale'}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}${isWithColor ? '' : '&grayscale'}`"
            aspect-ratio="1" cover class="bg-grey-lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isWithColor: Boolean
  }
});
</script>