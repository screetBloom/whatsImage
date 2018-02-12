


## 这里主要放一些制作的svg示例


#### Dashboard里面放的是自己做的仪表盘

在该文件夹下的vueModule下放的是  制作的一个vue组件，在公司中使用是作为抢票速度的一个组件




```bash
// js导入 组件
import SvgDashboard from '../../../components/util/dashboard.vue'


// 声明组件
components: {
  SvgDashboard
}  

```


大小控制(enlarge-size)已经删除，如果需要对大小进行控制，添加样式，使用transform：scale进行控制，尽量避免使用svg的viewbox，不可靠    
     
      
##### 使用方法如下:


```bash
<svg-dashboard :current-speed="currentSpeed"  :level="level" class="svg_bg"></svg-dashboard>
```

   - :current-speed  表示当前处理第几个速度
   - :level    表示一共几个档次 
   




























