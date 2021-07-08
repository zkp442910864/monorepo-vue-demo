<template>
    <div id="app">
        <MyCheckbox v-model="a" :falseValue="1" :trueValue="0"> 1231231 </MyCheckbox>
        <a-button type="primary">123</a-button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {
        }
    })
    export default class App extends Vue {
        params = {};
        a = 1;
    }
</script>

<style lang="less">
</style>
