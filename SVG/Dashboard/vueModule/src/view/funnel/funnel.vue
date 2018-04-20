<template>
    <div class="funnel">
        <svg
            height="100%"
            width="100%"
            viewBox="0 0 325 151"
            class=""
        >
            <!--流动的漏斗图-->
            <g>
                <!--左边-->
                <!--<rect-->
                    <!--x="0"-->
                    <!--y="0"-->
                    <!--:style="{width:r_width,height:r_height}"-->
                    <!--style="fill:rgb(0,111,255);stroke:none;">-->
                <!--</rect>-->

                <!--正式开始做漏斗图-->
                <path :d="path"
                      stroke="#000000"
                      style="stroke-width: 2px;"></path>


            </g>


        </svg>
    </div>

</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                r_width: '50%',
                r_height: 100,


                path: `
                M0 18
                q30,4 79,15 109,29
                `
            }
        },
        props:{

        },
        methods:{

        }
    }
</script>

<style scoped>
    .funnel {
        margin: 0;
        padding: 0;
    }

</style>
