<template>
    <a-checkbox :checked="curValue" @change="curChange" :size="$attrs.size" trueValue falseValue>
        <slot/>
    </a-checkbox>
</template>

<script lang="ts">
    /**
     * 主要就扩展了 选中的值 和 未选的值
     * 其他的使用还是按照文档来
     * https://www.antdv.com/components/checkbox-cn/
     */

    import {Component, Vue, Model, Watch, Emit, Prop} from 'vue-property-decorator';

    @Component
    export default class MyCheckbox extends Vue {
        @Model('change', {type: [Boolean, Number, String], default: false}) readonly value!: boolean | number | string;
        @Prop({type: [Boolean, Number, String], default: true}) readonly trueValue!: boolean | number | string;
        @Prop({type: [Boolean, Number, String], default: false}) readonly falseValue!: boolean | number | string;

        // @Emit('change')
        // change (val: boolean | number | string) {
        //     return val;
        // }

        @Watch('value', {immediate: true})
        handleValue (val: boolean | number | string) {
            const trueValue = this.trueValue;
            // const falseValue = this.falseValue;
            this.curValue = val === trueValue;
        }

        curValue = false;

        curChange (e: IOBJ): void {
            const val = e.target.checked;
            // this.change(val ? this.trueValue : this.falseValue);
            this.$emit('change', val ? this.trueValue : this.falseValue);
            // this.curValue = val;
        }

        created () {
            // utils.toast('MyCheckbox');
        }

        mounted () {}

        activated () {}

    }
</script>

<style lang="less" scoped>

</style>
