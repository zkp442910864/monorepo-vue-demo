import {options, docs, viewport, backgrounds} from '../../common-docs/storybookConfig';
import Preview from './global/Preview.vue';

// 配置参数
export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options,
    docs,
    viewport,
    backgrounds
};

// 包装
export const decorators = [
    () => {
        return {
            components: {
                Preview
            },
            template: '<Preview><story/></Preview>'
        }
    }
];

// 工具栏自定义选项 https://storybook.js.org/docs/vue/essentials/toolbars-and-globals#global-types-toolbar-annotations
export const globalTypes = {
//     theme: {
//         name: 'Theme',
//         description: 'xxxx',
//         defaultValue: 'light',
//         toolbar: {
//             icon: 'circlehollow',
//             // Array of plain string values or MenuItem shape (see below)
//             items: ['light', 'dark'],
//             // Property that specifies if the name of the item will be displayed
//             showName: true,
//         },
//     },
};
