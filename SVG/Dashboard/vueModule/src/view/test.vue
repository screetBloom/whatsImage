<template>
    <div class="test">
      <svg-dashboard :current-speed="currentSpeed" class="svg_bg"></svg-dashboard>
      
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
    export default {
        data() {
            return {
              currentSpeed : 1,
            }
        },
        mounted(){
          setInterval(function () {
            if(this.currentSpeed==4) {
              this.currentSpeed=0
            }else{
              this.currentSpeed++
            }
          }.bind(this),1000)
        },
        watch: {

        },
		computed: {

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
