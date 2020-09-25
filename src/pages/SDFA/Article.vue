<template>
  <v-row justify="center" >
    <v-col class="shrink">
      <div style="min-width: 600px; max-width:800px;">
        <div class="post-header">
          <h1 class="post-title">
            Speech-Driven Facial Animation <br/> with Spectral Gathering and Temporal Attention
          </h1>

          <p class="post-author">
            Yujin Chai<sup>1</sup>,
            Yanlin Weng<sup>1</sup>,
            Lvdi Wang<sup>2</sup>,
            Kun Zhou<sup>1</sup>
          </p>
          <p>
            1 State Key Lab of CAD&CG, Zhejiang University, China<br>
            2 FaceUnity Technology Inc., China
          </p>
          <v-img
            :src="require('../../assets/sdfa_pipeline.jpg')"
            alt="Pipeline"
            contain
            width="90%"
            style="margin: 0 auto;"
          />
        </div>

        <div class="post-section">
          <h2>Abstract</h2>
          <p>
            In this paper we present an efficient algorithm that generates lip-synchronized
            facial animation from a given vocal audio clip. By combining spectral-dimensional
            bidirectional long short-term memory and temporal attention mechanism,
            we design a light-weight speech encoder that learns useful and robust vocal features
            from the input audio without resorting to pre-trained speech recognition modules or large training data.
            To learn subject-independent facial motion, we use deformation gradients as the internal representation,
            which allows nuanced local motions to be better synthesized than using vertex offsets.
            Compared with state-of-the-art automatic-speech-recognition-based methods,
            our model is much smaller but achieves similar robustness and quality most of the time,
            and noticeably better results in certain challenging cases.
          </p>

          <h2>Supplementary Video</h2>
          <div style="margin: 0 auto; text-align: center;">
            <video controls style="width: 100%;">
              <source :src="require('../../assets/sdfa_video.mp4')"/>
            </video>
          </div>
        </div>

        <div class="post-section">
          <h2> Source Code </h2>
          <v-list style="width: 100%; margin: 0 auto;">
            <v-list-item>
              <!-- href="https://github.com/chaiyujin/sdfa-2019" target="_blank" -->
              <v-list-item-action>
                <svg height="24" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </v-list-item-action>
              <v-list-item-content  class='pending'>
                GitHub Repository with Pre-trained Model (Available Soon)
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

      </div>
    </v-col>
  </v-row>
</template>

<style>
.post-header {
  width: auto;
  text-align: center;
}
.post-title {
  font-size: 36px;
  letter-spacing: -1px;
  line-height: 1;
  padding: 20px 0px;
}
.post-author {
  font-size: 22px;
  letter-spacing: -1px;
  line-height: 1;
}
.post-section {
  text-align: justify;
  margin: 10px 0px;
}
.pending {
  color: gray;
}
</style>