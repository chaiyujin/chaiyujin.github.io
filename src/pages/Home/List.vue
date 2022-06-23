<template>
  <v-row justify="center" >
    <v-col>
      <div style="max-width:1024px; margin: 0 auto;">
        <div style="display: flex;">
          <v-icon>fas fa-list</v-icon>
          <h2 style="margin-left: 10px;">Projects</h2>
        </div>

        <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :href="item.src"
              class="teal"
              style="font-size: 20px; margin: 20px auto;"
            >
              <v-list-item-action>
                <v-icon large>mdi-folder</v-icon>
              </v-list-item-action>
              <v-list-item-content style="color: white;">
                {{item.title}}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      {src: '/sdfa.html', title: 'Speech-Driven Facial Animation with Spectral Gathering and Temporal Attention'},
      // {src: '/psfa.html', title: 'Personalized Speech-Driven 3D Facial Animation via Style-Content Disentanglement'},
    ]
  }),
}
</script>
