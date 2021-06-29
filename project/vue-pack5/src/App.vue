<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <button type="button" class="ant-btn ant-btn-primary">
            <span class="iconfont icon-sousuo m-r-5"></span>
            <span>搜索</span>
        </button>
        <div class="asdf">123123</div>
        <MyCheckbox >123</MyCheckbox>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    // import {MyCheckbox} from '@mono/components-vue';

    @Component({
        components: {
            // MyCheckbox
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
    }
</style>
