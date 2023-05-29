---
title: "Personalized Audio-Driven 3D Facial Animation via Style-Content Disentanglement"
url: '/psfa'
status: "Published"
date: 2022-12-19
draft: false
project_tags: ["speech-driven", "facial animation"]
weight: 1
authors:
    yujin_chai:
        name: "Yujin Chai"
        me: true
        iid: 1
        weight: 1
    tianjia_shao:
        name: "Tianjia Shao"
        iid: 1
        weight: 2
    yanlin_weng:
        name: "Yanlin Weng"
        iid: 1
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
links:
    external_link:
        text: "IEEE TVCG"
        icon: "ai ai-ieee"
        href: "https://ieeexplore.ieee.org/abstract/document/9992151"
        weight: 1
    # another_link:
    #     text: "Github Repo"
    #     icon: "fab alt brands fa-github"
    #     href: "#"
    #     weight: 2
abstract: We present a learning-based approach for generating 3D facial animations with the motion style of a specific subject from arbitrary audio inputs. The subject style is learned from a video clip (1-2 minutes) either downloaded from the Internet or captured through an ordinary camera. Traditional methods often require many hours of the subject's video to learn a robust audio-driven model and are thus unsuitable for this task. Recent research efforts aim to train a model from video collections of a few subjects but ignore the discrimination between the subject style and underlying speech content within facial motions, leading to inaccurate style or articulation. To solve the problem, we propose a novel framework that disentangles subject-specific style and speech content from facial motions. The disentanglement is enabled by two novel training mechanisms. One is two-pass style swapping between two random subjects, and the other is joint training of the decomposition network and audio-to-motion network with a shared decoder. After training, the disentangled style is combined with arbitrary audio inputs to generate stylized audio-driven 3D facial animations. Compared with start-of-the-art methods, our approach achieves better results qualitatively and quantitatively, especially in difficult cases like bilabial plosive and bilabial nasal phonemes.
---

### Supplementary Video
{{< tabs tabTotal="3" >}}

{{< tab tabName="Part 1" >}}
**Overview & Method**
{{< video src="supp_video-p1-overview" >}}
{{< /tab >}}

{{< tab tabName="Part 2" >}}
**Comparison & Results**
{{< video src="supp_video-p2-cmp_results" >}}
{{< /tab >}}

{{< tab tabName="Part 3" >}}
**Ablation & Misc**
{{< video src="supp_video-p3-ablation_misc" >}}
{{< /tab >}}

{{< /tabs >}}

### Citation
```bibtex
@article{chai2022personalized,
  title={Personalized Audio-Driven 3D Facial Animation Via Style-Content Disentanglement},
  author={Chai, Yujin and Shao, Tianjia and Weng, Yanlin and Zhou, Kun},
  journal={IEEE Transactions on Visualization and Computer Graphics},
  year={2022},
  publisher={IEEE}
}
```