<template>
    <div class="test">
      <svg-dashboard :current-speed="currentSpeed"  :level="level" class="svg_bg"></svg-dashboard>

      <div style="height: 80px;width: 100%"></div>

      <img src="" alt="">

    </div>
</template>

<style lang="less" type="text/less">

  .svg_bg{
    background-color: black;
  }

</style>

<script>
import svgDashboard from '../components/dashboard.vue'

import svgone from '../components/test.svg'

    export default {
        data() {
            return {
              currentSpeed : 0,
              level: 6
            }
        },
        mounted(){


          setInterval(function () {
            if(this.currentSpeed==(this.level-1)) {
              this.currentSpeed=0
            }else{
              this.currentSpeed++
            }
          }.bind(this),1000)


        },
        watch: {

        },
		computed: {
      oneImg() {
        if(this.dateLevel == 1){
          return oneImg;
        }else if(this.dateLevel == 2){
          return twoImg;
        }else if(this.dateLevel == 3){
          return threeImg;
        }
      },
		},
        methods: {

        },
        created(){

        },
		components: {
      svgDashboard
		},
    }
</script>
