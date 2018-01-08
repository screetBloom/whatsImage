---
title: three.js
date: 2017-08-03 11:39:51
tags: 
      - three.js
      - 置顶
---

## 理解ThreeJs(包括如何实现这个基础的“地球”,扩展中..)

最下面添加了一个Xplan的实现

<video width="100%" height="100%" controls="controls" poster="http://7xl4c6.com1.z0.glb.clouddn.com/Fj4cRm4UPZ8X7b0OvkskwA2AY7ni">
    <source src="http://7xl4c6.com1.z0.glb.clouddn.com/FrWRH9jKm109uFR3k7th0yuPQwhn" />
</video>

### 1、下载three.js, 并在页面引用

如果你找不到合适的下载地址的话，可以看看这个CDN，[Here](http://www.bootcdn.cn/three.js/),如果想要下载的话，拷贝CDN地址直接URL打开网页，复制原代码.
[官网](https://threejs.org/)看这里;[官网例子](https://threejs.org/examples/)看这里。
有一点需要注意，three.js版本很多，同样的代码可能会产生差异的效果，也可能因为代码和js版本不一致而出不来效果。

<!-- more --> 

### 2、概念

一个典型的Three.js程序至少要包括渲染器（Renderer）、场景（Scene）、照相机（Camera），以及我们在场景中创建的物体（Cube）.

### 3.Do it（简单入门,以我自己为例）

前提是已经引入了three.js（可以通过全局变量Three可以访问到内部属性方法）
具体使用的时候，需要注意需要以下三点：引入three.js、声明充当容器的canvas、在JavaScript代码中定义一个init函数、加载init函数（init函数不需要一定在页面加载完立即执行，绑定按钮什么的都可以）

let us begin！

HTML中定义：
```bash
<body onload="init()">

<canvas id="mainCanvas" width="400px" height="300px" ></canvas>

</body>
```
在JavaScript代码中定义一个init函数，声明在HTML加载完后执行（让DOM先加载）：

```bash
function init() { 
   // ...  coding  here
}
```

一般创建的流程是在init函数里

整体需求如下：

```bash
<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <script src="https://cdn.bootcss.com/three.js/r83/three.min.js"></script>
 </head>
 <body onload="init()">
 
 <canvas id="mainCanvas" width="1600px" height="1200px" ></canvas>
 
 <script>
     function init() {
         // ... three.js程序的4个构成部分
     }
 
 
 </script>
 
 </body>
 </html>
```

##### （1）.声明一个 渲染器,给个背景色
背景色可以理解为 幕布,这里设置为黑色

```bash
//定义  渲染器 renderer
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('mainCanvas') });

//背景色  黑色
renderer.setClearColor(0x000000);   
```

有一个地方需要注意：这里可以将WebGL渲染器替换为Canvas渲染器来达到更好的兼容性，但是它的精美度和性能不如WebGL渲染，并导致canvas以2D的方式渲染.


##### （2）.定义场景

Scene可以理解为幕布里面的一整幕,就是用户看到的“世界”。接下来声明的camera、cube（物体） 都要加到这个“世界”里面去，随着camera的移动呈现给用户不同的画面。


```bash
//定义  场景scene
var scene = new THREE.Scene();
```


##### （3）.设置照相机(眼睛所处的位置), 必须要添加到场景中
可以理解成我们眼睛所在的位置，它的位置决定了我们最终看到的是什么，而Scene决定幕布里有哪些东西。如果Camera位置不合理，即使Scene中有无数物体、相互之间有非常复杂的关系，我们看到的可能永远都是幕布（这里是一片漆黑）。

有一点需要特别注意，坐标系为笛卡尔右手坐标系,而不是我们数学书上的空间直角坐标系。但是，设置坐标时依然是按照x、y、z的顺序来的

另外照相机默认的观察方向是指向z轴负方向（就是朝向屏幕），这里采用的都是透视投影（近大远小），正交（远近一样）可以自己看一下；这里采用透视是为了观测3D效果。[两者差异看demo](http://115.159.100.155/threeJs/CameraView/index.html)


![](http://7xl4c6.com1.z0.glb.clouddn.com/Fk7ckgTw_9-jMdS2ehWdbXv-Kl2w)

设置照相机代码如下：

```bash
//设置照相机,视角为透视模型（角度，长宽比，最近距离，最远距离）
var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
//相机位置(x,y,z)
camera.position.set(0, 0, 5);
//添加到场景中
scene.add(camera);
```


##### （4）.画出物体 , 添加到场景中
这里的CubeGeometry表示我要绘制的是立方体（所以给出了长宽高），MeshBasicMaterial表示“网格基础材质”的材料，通俗的可以理解为给这个立方体一种外在的“皮肤”。

多种渲染类型可供选择,详情查询官网[Materials](https://threejs.org/docs/index.html#api/constants/Materials)


```bash
 //创建一个 x、y、z方向为 1、2、3,颜色为 红色 的矩形
var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
new THREE.MeshBasicMaterial({
        color: 0xff0000
        })
);
scene.add(cube);
```

##### （5）.渲染，需传入 场景和照相机


```bash
//渲染
renderer.render(scene, camera);
```

等学到后来的时候，可以事先设置 着色精度、背景色透明、最大灯光数等等



##### （6）.完整demo代码

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>理解基本的渲染器/场景/相机/物体</title>
    <!--<script src="https://cdn.bootcss.com/three.js/r83/three.min.js"></script>-->
    <!--<script src="https://cdn.bootcss.com/three.js/r83/three.js"></script>-->
    <script src="../js/three.js"></script>
</head>
<body onload="init()">

<canvas id="mainCanvas" width="400px" height="300px" ></canvas>

<script>
    function init() { // ...

        //定义  渲染器 renderer
        var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('mainCanvas') });

        renderer.setClearColor(0x000000);   //背景色  黑色

        //定义  场景scene
        var scene = new THREE.Scene();

        //定义相机  camera
        var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
        camera.position.set(0, 0, 5);
        scene.add(camera);

        //创建一个 x、y、z方向为 1、2、3,颜色为 红色
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
            new THREE.MeshBasicMaterial({
            color: 0xff0000
            })
        );
        scene.add(cube);

        //定义了场景中的物体，设置好的照相机之后，渲染
        renderer.render(scene, camera);

    }

</script>
</body>
</html>

```

效果如图：
![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/Fq2DohX-l0t-j82XUqEkxxa08uLW)



##### （7）.进一步理解camera（位置）

```bash
camera.position.set(0, 0, 5);
```

将position的z轴改为10

```bash
camera.position.set(0, 0, 10);
```

效果如图：
![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FjoCvzYpXosVavmsurB3OIy6jHHG)

为什么会看起来明显变小呢？
其实很简单 ，用的是透视镜头（PerspectiveCamera），近大远小，camera离物体的距离远了，物体自然看起来就小了。（X、Y轴同理）

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FgecZ3WrczOiY1D3dxcC8tjzJr7p)


##### （7）.进一步理解camera（角度）

```bash
var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
camera.position.set(0, 0, 5);
```

将角度大小改成60度

```bash
var camera = new THREE.PerspectiveCamera(60, 4 / 3, 1, 1000);
camera.position.set(0, 0, 5);
```

效果如图：
![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/Ft8XPkHMmBIiYRWXPci0Gv930UDZ)

这次不如上次明显，但是还是变小了，这是为什么呢？
虽然正方体的实际大小并未改变,camera的位置也没变，但是将camera的竖直张角设置得更大时，视角变大了，因而正方体相对于整个视角的大小就变小了，看起来正方形就显得变小了。

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FvQ9UOSkwadPFuhKWFjIAJC1MeHG)



### 4.正式开始(从基本立方体和球入手)

如果说概念的话，最最基本的入门概念到这里就差不多了，接下来的贴图，旋转，动画，导入等等都是这个概念框架上的理解（我学的也不深）
但是我就到这里结束的话，你肯定会说，ntm，老子用个css3，一个幕布黑色，一个红色长方形，要你这么多代码吗？threejs就这点作用的话，有什么用？

其实，刚刚我们的代码就是一个长方体，还记得我们设置的长宽高吗，长方形怎么会有三维呢！
其实是因为camera就是我们的眼睛，我们被一个长方体的一个面给遮住了所有视野，它其实依然还是一个立方体，只是现在我们看不到而已，那么，我们就来看看这个立方体。

加上这句
```bash
//创建一个 x、y、z方向为 1、2、3,颜色为 红色
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
            new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true     //这里这句，要加
            })
        );
        scene.add(cube);
```
这句话的意思是说，只用把边的颜色涂一下就可以了，不要涂整个面.


![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FhijxAwrpz1LN5ZTbB3HpgYhlCvc)

如果你有图形图像的基础的话，应该已经看出来了。因为在前面我们选的是透视投影的camera,所以这个就是长方体的透视图，只是不够明显而已。

那么现在我们再来好好看看，明确的让大家看出来它是一个长方体。

首先，给长方体进行多重的面切割（这样是为了在不对6个面进行涂色的情况下，好看出来它的轮廓）
由原本的定义长方体，加一句：

从原本的这样：
```bash
//创建一个 x、y、z方向为 1、2、3,颜色为 红色
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
            new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true     //这里这句，要加
            })
        );
        scene.add(cube);
```
变成这样:
```bash
 //创建一个 x、y、z方向为 1、2、3,颜色为 红色
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3,20,20,30),   
        //后面加上了 20,20,30,x轴的两面都切割20份，y轴的两面都切割20份，z轴的两面都切割成30份
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
                wireframe: true
            })
        );
        scene.add(cube);
```

效果图：
![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FpyCSmPaIf2GiXpOL-7ClYZuDr5_)

现在大致上可以看出来立方体的结构了，那我们现在再进一步，将立方体旋转过来看，直接验证是不是。
在定义相机这里，改变我们camera的位置，来达到旋转立方体的效果.
```bash
  //定义相机  camera
var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
camera.position.set(-2, -4, 5);
scene.add(camera);
```

但是单纯这样的话，你会发现现在整个立方体看不到了。因为我们位置移动了，camera移动走了，但是没有注视着立方体，相当于：

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/Fiy4s639p-T-UjRPcvqmxGI7HDXc)

变成了：

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FhGghpA-3O_GPw2NeXJnKtS2CESv)

自然就看不到了。所以加上这句：
```bash
camera.lookAt(new THREE.Vector3(0, 0, 0));
```
意思就是。眼睛虽然移动了，但是还要看着原点，也就是物体绘制的地方。
效果如下：

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/Fiw02y1Cy1TSs0Q17NoXBsASvwhq)

全部代码如下:

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>理解基本的渲染器/场景/相机/物体</title>
    <script src="https://cdn.bootcss.com/three.js/r83/three.min.js"></script>
</head>
<body onload="init()">



<canvas id="mainCanvas" width="1600px" height="1200px" ></canvas>


<script>
    function init() { // ...

        //定义  渲染器 renderer
        var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('mainCanvas') });

        renderer.setClearColor(0x000000);   //背景色  黑色

        //定义  场景scene
        var scene = new THREE.Scene();

        //定义相机  camera
        var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
        camera.position.set(-2, -4, 5);
        scene.add(camera);

        //创建一个 x、y、z方向为 1、2、3,颜色为 红色
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3,20,20,30),
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
                wireframe: true
            })
        );
        scene.add(cube);

        camera.lookAt(new THREE.Vector3(0, 0, 0));

        //定义了场景中的物体，设置好的照相机之后，渲染
        renderer.render(scene, camera);

    }

</script>
</body>
</html>

```


#### 球（为开始的那个旋转的地球做准备）

其实和立方体没有什么区别，都是调用three.js，告诉这个库我要绘制一个球体.

绘制长方体是这样的：

```bash
  //创建一个 x、y、z方向为 1、2、3,颜色为 红色
var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
    new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
        })
);
scene.add(cube);
```

绘制球体其实就是这样的:

```bash
//添加球体 ,  红色   这里的三个参数是(半径、经度上的切片数，纬度上的切片数)。经纬度数据越大圆越是精细(共7个参数)
var cube = new THREE.Mesh(
    new THREE.SphereGeometry(3, 18, 12),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        })
);
scene.add(cube);

```

效果图:

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/Fm3Dj4mIPU5oJZM41kmEmctO1Gnf)



### 5.加点特效rotation(其他的，像位置和缩放的特效后续一直会写)

我们这里的特效，目前就指旋转，思路也很简单，每间隔一段时间，让这个球体按y轴（x、z轴也都可以）旋转一点,然后每隔一段时间重新渲染(不能渲染的太慢).

旋转函数也很简单:

```bash
function draw() {
        cube.rotation.y = (cube.rotation.y + 0.01) % (Math.PI * 2);
        renderer.render(scene, camera);
    }

```

渲染写好了,就缺一个时间间隔了.这里用setInterval，主要是写demo的时候好控制时间看看具体的运行情况，
效果如图:

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FhK_YpzoELC1t066F7avCGe6SleC)

接下来其实就是渲染图片了。
原图如图:
![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FricREXutNVP2VRPBJ9KsJ7j_eIY)

渲染（贴图）其实就是一句代码：

```bash
 //添加物体 ,正方体  用图片图片进行渲染
cube = new THREE.Mesh(
    new THREE.SphereGeometry(3, 20, 30),
        new THREE.MeshBasicMaterial({
                //用这个图片来渲染物体
                map:THREE.ImageUtils.loadTexture('../../img/map.jpg'),
        })
);
scene.add(cube);

```

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FolosEe2Dg0PjSVUlgXHw0wq-UUQ)


全部代码如下:
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>旋转_球体</title>
    <script src="https://cdn.bootcss.com/three.js/r83/three.min.js"></script>
</head>
<body onload="init()">
<canvas id="mainCanvas" width="1600px" height="1200px" ></canvas>

<script>
    var cube=null;
    var renderer=null;
    var scene=null;
    var camera=null;
    function init() { // ...

        //定义  渲染器 renderer
        renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('mainCanvas') });

        renderer.setClearColor(0x000000);   //背景色  黑色

        //定义  场景scene
        scene = new THREE.Scene();

        //设置照相机
        camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 1000);
        camera.position.set(0, 0, 9);
        scene.add(camera);

        //添加物体 ,正方体  用图片图片进行渲染
        cube = new THREE.Mesh(
            new THREE.SphereGeometry(3, 20, 30),
            new THREE.MeshBasicMaterial({
                //用这个图片来渲染物体
                map:THREE.ImageUtils.loadTexture('../../img/map.jpg'),
            })
        );
        scene.add(cube);

//        camera.lookAt(new THREE.Vector3(0, 0, 0));

        //定义了场景中的物体，设置好的照相机之后，渲染
        setInterval(draw, 20);

    }

    function draw() {
        cube.rotation.y = (cube.rotation.y + 0.01) % (Math.PI * 2);
        renderer.render(scene, camera);
    }


</script>
</body>
</html>

```

PS. 如果你需要渲染的图片素材的话，[点这里](http://7xl4c6.com1.z0.glb.clouddn.com/FricREXutNVP2VRPBJ9KsJ7j_eIY)


### 6.铺设场景(多物体的相互关系)

<video width="100%" height="100%" controls="controls" poster="http://7xl4c6.com1.z0.glb.clouddn.com/Fj4cRm4UPZ8X7b0OvkskwA2AY7ni">
    <source src="http://7xl4c6.com1.z0.glb.clouddn.com/FrWRH9jKm109uFR3k7th0yuPQwhn" />
</video>





有空进一步拓展 ，最终可能会演变成一个宇宙


先贴出这部分的源代码:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>three.js进行场景布置</title>
    <script src="https://cdn.bootcss.com/three.js/r83/three.min.js"></script>
</head>
<body onload="init()">
<canvas id="mainCanvas" ></canvas>
<script>

    var sphere,
        scene,
        camera,
        renderer;

    function init() { // ...
        var winWidth = window.innerWidth,
            winHeight = window.innerHeight,
            mainCanvas = document.getElementById('mainCanvas');
        mainCanvas.width = winWidth;
        mainCanvas.height = winHeight;
        //定义  渲染器 renderer
        renderer = new THREE.WebGLRenderer({ canvas: mainCanvas });

        renderer.setClearColor(0x000000);   //背景色  黑色

        //定义  场景scene
        scene = new THREE.Scene();

        //定义相机  camera
        camera = new THREE.PerspectiveCamera(45, winWidth / winHeight, 1, 1000);
        camera.position.set(0, 70, 300);
        scene.add(camera);

        //创建一个 平面
        var plane = new THREE.Mesh(new THREE.PlaneGeometry(500, 500,100,100),
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
                wireframe: true
            })
        );
        plane.rotation.x = Math.PI / 2;
        plane.position.z = 100;

        //创建一个 球 ,并进行渲染
        sphere = new THREE.Mesh(
            new THREE.SphereGeometry(30, 18,18),
            new THREE.MeshBasicMaterial({
                map:THREE.ImageUtils.loadTexture('../../img/map.jpg'),
            })
        );
        sphere.position.y=30;
        sphere.position.z=150;

        //创建一个 立方体
        var cube = new THREE.Mesh(new THREE.CubeGeometry(50, 50,50,10,10),
            new THREE.MeshBasicMaterial({
                color: 0xffff33,
                wireframe: true
            })
        );
        cube.position.x = 100;
        cube.position.z = 50;

        //添加物体
        scene.add(plane);
        scene.add(sphere);
        scene.add(cube);

        camera.lookAt(new THREE.Vector3(0, 0, 0));

        //定义了场景中的物体，设置好的照相机之后，渲染
        setInterval(draw, 20);
    }

    function draw() {
        sphere.rotation.y = (sphere.rotation.y + 0.01) % (Math.PI * 2);
        renderer.render(scene, camera);
    }
</script>
</body>
</html>

```


## Aframe试玩(基于720yun)
[http://720yun.com/t/767jzzkurn4](http://720yun.com/t/767jzzkurn4)

![Alt text](http://7xl4c6.com1.z0.glb.clouddn.com/FmM8E1Zzfnm0K9_QKAWVoEyBTle3)


## Xpaln的实现

[http://7xl4c6.com1.z0.glb.clouddn.com/FgOz6YOkVlaF8AiNNqpMml-fNmX0](http://7xl4c6.com1.z0.glb.clouddn.com/FgOz6YOkVlaF8AiNNqpMml-fNmX0)

![](http://7xl4c6.com1.z0.glb.clouddn.com/FgOz6YOkVlaF8AiNNqpMml-fNmX0)


Xplan基本是抄"jackyang"实现的（人家提供思路，自己实现还是需要花点时间的）


## 结尾

除了自己设计模型，具体到项目还需要设计人员制作复杂3d模型，我们导入到Three程序中，这部分可以自己搜索，这里只做简单的入门介绍。
个人实现的时候可以自己搜索Three.js框架（Aframe、krpano等）。感兴趣又不想花太多时间的同学可以搜一下“720yun”

这里只是简要介绍我所了解的一部分，大家详情可以关注 Ovilia（张雯莉）的github：https://github.com/Ovilia/ThreeExample.js ，包括本次分享最开始的概念部分有些也是使用她的demo改的（私信征求过同意）,有时候我也会私信它沟通一些问题。















