/**
*
* User: wim_chen
* Date: 2018/3/6
* Time: 下午4:22
*
*/
<template>

  <div style="background-color: black">

	  <svg
		  height="115"
		  width="375"
		  viewBox="0 0 375 115"
	  >

		  <!-- 左边第1列 -->
		  <rect x="25" y="25" width="62" height="18" style="fill:rgb(245,245,245);stroke:none;"/>
		  <rect x="25" y="55" width="69" height="13" style="fill:rgb(245,245,245);stroke:none;"/>
		  <rect x="25" y="92" width="110" height="10" style="fill:rgb(245,245,245);stroke:none;"/>

		  <!-- 左边第2列 -->
		  <rect x="127" y="32" width="40" height="10" style="fill:rgb(245,245,245);stroke:none;"/>
		  <rect x="114" y="46" width="67" height="6" style="fill:rgb(245,245,245);stroke:none;"/>
		  <rect x="135" y="56" width="25" height="10" style="fill:rgb(245,245,245);stroke:none;"/>

		  <!-- 左边第3列 -->
		  <rect x="210" y="25" width="63" height="18" style="fill:rgb(245,245,245);stroke:none;"/>
		  <rect x="203" y="55" width="69" height="13" style="fill:rgb(245,245,245);stroke:none;"/>

		  <!-- 左边第4列 -->
		  <rect x="297" y="28" width="56" height="15" style="fill:rgb(245,245,245);stroke:none;"/>
		  <rect x="297" y="53" width="55" height="14" style="fill:rgb(245,245,245);stroke:none;"/>


	  </svg>


  </div>


</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
	    mounted() {
        	console.log(555555555)
	    }
    }
</script>

<style scoped>



</style>
