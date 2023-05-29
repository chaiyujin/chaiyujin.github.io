---
title: "Speech-Driven Facial Animation with Spectral Gathering and Temporal Attention"
url: '/sdfa'
status: "Published"
date: 2021-09-27
draft: false
project_tags: ["speech-driven", "facial-animation"]
weight: 2
summary: "Example of markdown syntax you can use to edit your content"
authors:
    yujin_chai:
        name: "Yujin Chai"
        me: true
        iid: 1
        weight: 1
    yanlin_weng:
        name: "Yanlin Weng"
        iid: 1
        weight: 2
    lvdi_wang:
        name: "Lvdi Wang"
        iid: 2
        weight: 3
    kun_zhou:
        name: "Kun Zhou"
        iid: 1
        weight: 4
        last: true
institutions:
    zju:
        iid: 1
        name: "State Key Lab of CAD&CG, Zhejiang University, China"
    face_unity:
        iid: 2
        name: "FaceUnity Technology Inc., China"
links:
    external_link:
        text: "Springer FCS"
        icon: "ai ai-springer ai-1x"
        href: "https://link.springer.com/article/10.1007/s11704-020-0133-7"
        weight: 1
    another_link:
        text: "Code"
        icon: "fab alt brands fa-github"
        href: "https://github.com/chaiyujin/sdfa-2019"
        weight: 2
abstract: In this paper we present an efficient algorithm that generates lip-synchronized facial animation from a given vocal audio clip. By combining spectral-dimensional bidirectional long short-term memory and temporal attention mechanism, we design a light-weight speech encoder that learns useful and robust vocal features from the input audio without resorting to pre-trained speech recognition modules or large training data. To learn subject-independent facial motion, we use deformation gradients as the internal representation, which allows nuanced local motions to be better synthesized than using vertex offsets. Compared with state-of-the-art automatic-speech-recognition-based methods, our model is much smaller but achieves similar robustness and quality most of the time, and noticeably better results in certain challenging cases.
---

<img src="featured.png" width="100%"/>


### Supplementary Video
{{< video src="sdfa_video" >}}

### Citation
```bibtex
@article{chai2022speech,
  title={Speech-driven facial animation with spectral gathering and temporal attention},
  author={Chai, Yujin and Weng, Yanlin and Wang, Lvdi and Zhou, Kun},
  journal={Frontiers of Computer Science},
  volume={16},
  number={3},
  pages={1--10},
  year={2022},
  publisher={Springer}
}
```