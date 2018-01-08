---
title: Aframe
date: 2017-08-08 17:09:25
tags: 
      - A-frame
      - three.js
---

这里是AR的第一步研究，扩展中......
访问地址在这，[here](http://115.159.100.155/threeJs/Aframe/sky.html)
这里主要使用的是A-frame框架，基于three.js，官方文档看这里，[Here](http://aframe.io/)!  推荐文档看这里，[here](https://www.sitepoint.com/a-frame-the-easiest-way-to-bring-vr-to-the-web-today/)

Now，Do it!
 

## 初步研究web端的VR趋势

### 1、下载aframe.js, 并在页面引用

如果你找不到合适的下载地址的话，可以看看这个CDN，[Here](http://www.bootcdn.cn/aframe/),如果想要下载的话，拷贝CDN地址直接URL打开网页，复制原代码.[官网看这里](http://aframe.io/).

<!-- more -->

### 2、概念

A-Frame 是 Mozilla 开源的网页虚拟现实体验（ WebVR ）框架，可以让创建 WebVR 变得更简单。 封装了 WebGL 的功能到 HTML 自定义元素，创建虚拟现实体验比较简单.

### 3.demo开始

#### （1）全景图demo(仿照官网首页做的)

效果如图:

<video width="100%" height="100%" controls="controls" poster="http://7xl4c6.com1.z0.glb.clouddn.com/FvRDQel76JL5UgdKfpmzSCuoqdTT">
    <source src="http://7xl4c6.com1.z0.glb.clouddn.com/Fm-be306mXAT0ACo4zfof2AgG7fH" />
</video>

这个极其简单，代码如下：

```bash
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Our First A-Frame Experience</title>
    <script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
</head>
<body>
<a-scene>
    <a-sky src="http://7xl4c6.com1.z0.glb.clouddn.com/FrThmhsKmQy0mRXzlordPZSmMPa7"></a-sky>
</a-scene>
</body>
</html>
</body>
```


PS.图片素材请click  [here](http://7xl4c6.com1.z0.glb.clouddn.com/FrThmhsKmQy0mRXzlordPZSmMPa7)!

PS.如果这个图不够的话，这里还有一个全景图，click  [here](https://c1.staticflickr.com/8/7376/16218590470_468084c950_h.jpg)!
