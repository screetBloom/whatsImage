<template>
    <div class="test">
      <svg-dashboard class="svg_bg"></svg-dashboard>
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

            }
        },
        mounted(){
          setTimeout(function () {

          }.bind(this),4000)
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
