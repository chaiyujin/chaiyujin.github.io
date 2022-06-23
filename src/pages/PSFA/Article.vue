<template>
  <v-row justify="center" >
    <v-col>
      <div :style="'max-width:800px; margin: 0 auto; font-size: ' + page_scale  + 'em'">
        <div class="post-header">
          <h1 class="post-title">
            <!-- Personalized Speech-Driven 3D Facial <br/>Animation via Style-Content Disentanglement -->
            TITLE
          </h1>

          <h3 class="post-author">
            Yujin Chai, Tianjia Shao, Yanlin Weng, and Kun Zhou
          </h3>
          <p class="post-department">
            State Key Lab of CAD&CG, Zhejiang University, China<br/>
          </p>
        </div>

        <div class="post-section">
          <h2>Abstract</h2>
          <p>
          </p>

          <h2>Supplementary Video</h2>
          <div style="margin: 0 auto; text-align: center;">
            <video controls style="width: 100%;">
              <!-- <source :src="require('../../assets/sdfa_video.mp4')"/> -->
            </video>
          </div>
        </div>

        <div class="post-section">
          <h2> Source Code </h2>
          <v-list style="width: 100%; margin: 0 auto;">
            <v-list-item>
              <v-list-item-action style="margin: 0 1.0em 0 0;">
                <svg :height="36 * page_scale" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </v-list-item-action>
              <v-list-item-content  class='pending'>
                GitHub Repository <br/> with Pre-trained Model (TBD)
                <!-- <a href="https://github.com/chaiyujin/..." target="_blank" >GitHub Repository</a> -->
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    page_scale: 1.0
  }),
  created() {
    window.addEventListener("resize", this.resizeHandler);
    this.resizeHandler();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler: function() {
      let width = window.innerWidth;
      this.page_scale = Math.min(width, 550) / 550.0;
    },
  }
}
</script>

<style>
.post-header {
  width: auto;
  text-align: center;
}
.post-title {
  letter-spacing: 0px;
  line-height: 1;
  padding: 0.5em 0;
}
.post-author {
  font-size: 1.4em;
  letter-spacing: -1px;
  line-height: 1;
  font-weight: 500;
}
.post-department {
  font-size: 1.2em;
  margin-top: 0.5em;
  letter-spacing: -0.5px;
  line-height: 1.1;
}
.post-section {
  text-align: justify;
  margin: 10px 0px;
}
.pending {
  color: gray;
}
.code {
  background-color: rgb(235, 235, 235);
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8em;
}
</style>
