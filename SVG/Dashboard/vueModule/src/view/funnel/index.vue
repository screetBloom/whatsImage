<template>
    <div>
        <div style="height: 20px;width: 100%;background: red"></div>
        <funnel></funnel>

    </div>
</template>

<script>
    import funnel from './funnel'

    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            funnel
        }
    }
</script>

<style scoped>
</style>
