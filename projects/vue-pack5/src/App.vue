<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <button type="button" class="ant-btn ant-btn-primary">
            <span class="iconfont icon-sousuo m-r-5"></span>
            <span>搜索</span>
        </button>
        <div class="asdf">123123</div>
        <!-- <MyCheckbox >123</MyCheckbox> -->
        <!-- <my-checkbox >123</my-checkbox> -->
        <!-- <my-checkbox ></my-checkbox> -->
        <!-- <my-checkbox :trueValue="" ></my-checkbox> -->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {MyCheckbox} from '@mono/components-vue';
    import Test from '@/components/Test.vue';
    // import a from '@/views/q';
    // const b = require('./views/q');

    // console.log(b);


    // b.fun();
    // b.fun();
    // console.log(b, a, b.fun === a.fun);

    @Component({
        components: {
            MyCheckbox,
            Test
        }
    })
    export default class App extends Vue {
        params = {};
        options2 = [
            {Name: '1', MarketplaceId: '1'},
            {Name: '2', MarketplaceId: '2'},
            {Name: '3', MarketplaceId: '3'},
            {Name: '4', MarketplaceId: '4'},
            {Name: '5', MarketplaceId: '5'},
            {Name: '6', MarketplaceId: '6'}
        ];
    }
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        color: @primary-color;
    }
</style>
