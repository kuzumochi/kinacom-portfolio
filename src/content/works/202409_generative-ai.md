---
title: "生成AI風スペシャルサイト"
year: "2024"
month: "8"
tags: ["Astro", "Preact", "GSAP", "HTML", "CSS", "JavaScript"]
image: "./captures/202409_generative-ai.png"
priority: 10
additionalImages: [
  {
    src: "./captures/202409_generative-ai-2.png",
    caption: "生成AIとのチャット風に1文字ずつ表示する演出"
  },
  {
    src: "./captures/202409_generative-ai-3.png",
    caption: "他のページをランダムに表示"
  },
]
---
生成AIと対話している"風"のスペシャルサイトのフロント実装を担当。

構造が同じ多数のページを必要としたため、保守性に優れたAstroをメインのフレームワークとして採用。一部UIにPreact、生成AIと対話しているような演出をGSAPなど、複数のフレームワークやライブラリを組み合わせて構築しました。