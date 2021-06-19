---
template: post
title: VueライフサイクルフックのCreatedとは
slug: vue-created
socialImage: /media/image-0.jpg
draft: false
date: 2021-06-19T06:41:41.762Z
description: created, mountedはライフサイクルフックと呼ばれ、vue.jsの初期化の中の決められたタイミングで実行される関数です
category: dev
tags:
  - Vue
---
> created, mountedはライフサイクルフックと呼ばれ、vue.jsの初期化の中の決められたタイミングで実行される関数です

<br>

> 初期化とはvue.jsが使えるようになるまでのvue.jsの内部で行われる処理のことです。WindowsやMac OSが起動するときにユーザが利用できるまで少し時間がかかります。Vue.jsでも同様にユーザが利用できるまでにさまざまな処理が行われます。

**つまりcreatedは、vueが使えるようになるまでの初期化のコードっていうことかな?**

<br>

> APIなどを利用して外部からデータを取得してブラウザに表示させたい場合は、ライフサイクルフックの中に外部からデータを取得できるaxios、fetchを利用してデータ取得のプログラムを記述しておきます。

<br><br>

https://reffect.co.jp/vue/vue-js-created-mounted-diffrence　<br>

このサイトは公式よりもわかりやすく書かれていた。今回は、createdは初期化の中で行われるコードなんだな程度の理解に留めておいて、時期が来たら深掘りしたい。