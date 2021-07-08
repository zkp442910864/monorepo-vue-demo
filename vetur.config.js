
const fg = require('fast-glob');
const packages = fg.sync('./packages/*', {onlyDirectories: true});
const projects = fg.sync('./projects/*', {onlyDirectories: true});

const getProjects = (...arg) => {
    const arrObj = [];
    arg.forEach((itemArr) => {
        itemArr.forEach((root) => {
            arrObj.push({
                root,
                // 这两个无效
                snippetFolder: './packages/components-vue/vetur',
                // snippetFolder: './.vscode/vetur/snippets',
                globalComponents: [
                    './packages/components-vue/src/components/**/*.vue'
                ]
            });
        });
    });

    return arrObj;
};

module.exports = {
    // **optional** default: `{}`
    // override vscode settings part
    // Notice: It only affects the settings used by Vetur.
    settings: {
        // "vetur.useWorkspaceDependencies": true,
        // "vetur.experimental.templateInterpolationService": true
    },
    // **optional** default: `[{ root: './' }]`
    // support monorepos
    projects: getProjects(packages, projects)
    // projects: [...packages, ...projects]
    // [
    //     {
    //         // **required**
    //         // Where is your project? 你的项目在哪里?
    //         // It is relative to `vetur.config.js`.
    //         root: './packages/components-vue',

    //         // **optional** default: `'package.json'`
    //         // Where is `package.json` in the project? 你的项目package.json在哪里?
    //         // We use it to determine the version of vue.
    //         // It is relative to root property.
    //         // package: './package.json',

    //         // **optional**
    //         // Where is TypeScript config file in the project? 你的项目tsconfig.json在哪里?
    //         // It is relative to root property.
    //         // tsconfig: './tsconfig-vue.json',

    //         // **optional** default: `'./.vscode/vetur/snippets'`
    //         // Where is vetur custom snippets folders?
    //         // snippetFolder: './vetur',
    //         // **optional** default: `[]`
    //         // Register globally Vue component glob.
    //         // If you set it, you can get completion by that components.
    //         // It is relative to root property.
    //         // Notice: It won't actually do it. You need to use `require.context` or `Vue.component`
    //         // 通过这个来进行组件智能提示
    //         // globalComponents: [
    //         //     '@mono/components-vue',
    //         //     './packages/components-vue/src/components/**/*.vue'
    //         // ]
    //     },
    //     {
    //         root: './projects/vue-pack5',
    //         // package: './package.json',
    //         // snippetFolder: './vetur',
    //         // 通过这个来进行组件智能提示
    //         // globalComponents: [
    //         //     '@mono/components-vue',
    //         //     './packages/components-vue/src/components/**/*.vue',
    //         //     {
    //         //         // Component name
    //         //         name: 'MyCheckbox',
    //         //         // Component file path, please use '/'.
    //         //         path: './packages/components-vue/src/components/MyCheckbox/MyCheckbox.vue'
    //         //     }
    //         // ]
    //     }
    // ]
};
