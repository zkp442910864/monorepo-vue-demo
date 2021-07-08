import {action} from '@storybook/addon-actions';
import MyCheckbox from './MyCheckbox.vue';

export default {
    title: 'vue/MyCheckbox 选择框',
    component: MyCheckbox,
    parameters: {
        docs: {
            description: {
                // component: '基于antd table 二次封装的 checkbox, 主要就扩展了 选中的值 和 未选的值',
            },
        },
    },
    // 参数 props
    args: {},
    // 参数类型
    argTypes: {
        trueValue: {
            /**
             * 描述文本
             */
            description: '选中的值',

            /**
             * 表格内容
             */
            table: {
                // 表格行 所属类别
                // category: '参数 props',
                // 表格行 Description 列，对应的参数类型和详情
                type: {
                    summary: 'boolean | number | string',
                    // detail: 'boolean | number | string',
                },
                // 表格行 Default 列，对应的参数默认值和详情
                defaultValue: {
                    // summary: 'Hello',
                    // detail: 'boolean | number | string',
                },
            },
        },
        falseValue: {
            description: '未选中的值',
            table: {
                // category: '参数 props',
                type: {
                    summary: 'boolean | number | string',
                },
            },
        },
        change: {
            description: '回调',
            table: {
                // category: '事件 events',
                type: {
                    summary: '(val) => void',
                }
            },
        }
    },
};

const Template = (args, options) => {
    const argTypes = options.argTypes;

    return {
        props: Object.keys(argTypes),
        components: {MyCheckbox},
        data () {
            return {
                value: args.trueValue
            };
        },
        template: '<MyCheckbox @change="change" v-model="value" v-bind="$props">值：{{value}}</MyCheckbox>',
    };
};

// 子标题
export const 改变默认值 = Template.bind({});
// 对应的参数设置
改变默认值.args = {
    trueValue: 1,
    falseValue: 2,
    change: action('change')
};

// 子标题
export const 测试 = Template.bind({});
// 对应的参数设置
测试.args = {
    trueValue: 111,
    falseValue: 2222,
    change: action('change')
};
