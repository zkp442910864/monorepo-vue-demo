# monorepo-vue-demo

[monorepo-react-demo pro-v2版本](https://github.com/zkp442910864/monorepo-react-demo)

### 关于monorepo
>参考资料<br>
>>[monorepo 介绍1](https://www.zhihu.com/question/318476028/answer/1895685159)<br>
>>[monorepo 介绍2](https://blog.csdn.net/qiwoo_weekly/article/details/115713366)<br>
>>[Lerna](https://segmentfault.com/a/1190000019350611)<br>
>>[storybook](https://storybook.js.org/)<br>
>>使用库的版本最好都一致<br>


### 项目初始化
```
    npm install -g lerna

    安装依赖并进行关联: lerna bootstrap || lerna link && yarn install

    清除子项目node_modules: lerna clean

    文档命令: yarn storybook

    然后到对应的项目执行运行命令

    如果遇到原来可以，迁移进来运行报错的，删掉 lerna.json 字段 npmClient 和 useWorkspaces
    这样安装的依赖不会做提升处理，直接安装到当前项目下
```

### 包名及引入
```
    package.json (例子: packages\common-utils\package.json)
        设置包名: name (例子: @mono/项目文件名，不要出现重复的名称)
        设置默认导出文件: main
        设置ts声明文件: typings

    引入公共项目的样式文件
        @import '@mono/components-vue/src/assets/common.less';
        包名: @mono/components-vue
        文件所在路径: /src/assets/common.less
```

### 项目管理
```
    注意点：源码引用时候，依赖库版本要相同。可以通过产物（打包后的文件）引用来解决这问题。

    git 项目规划
        首先 mono-repo 做为一个根项目
        然后在 packages 文件夹下添加各个项目（公共项目模块/公司项目）
        注：涉及到项目嵌套，利用git的子模块
            git submodule add https://github.com/chenfengyanyu/fmap-demo.git

    svn 项目规划
        首先 mono-repo 做为一个根项目
        然后在 packages 文件夹下添加各个项目（公共项目模块/公司项目）
        注：涉及到项目嵌套，直接到 packages 文件夹下检出对应的项目（简单的尝试下，貌似不会互相影响）
```


### 目录树生成
>[参考 tree-node-cli](https://www.cnblogs.com/wonz/p/13578242.html)
>>注意在 Git Bash Here 里面执行命令,在 cmd 里面实效了


### 目录结构
###### 项目中包含 .stories.js | .stories.mdx 后缀的，都属于文档文件
```
├── packages                                包/组件 这些可以复用的
│   ├── common-utils                        封装了常用方法，和请求函数(git/svn 上的项目)
│   │   ├── dist                            打包生成的产物
│   │   │   └── ...
│   │   ├── package.json                    main 和 types 指向这里配置
│   │   └── ...
│   └── components-vue                      封装了vue可复用组件，基于antd (这里添加的组件，注意要补齐 storybook文档以及提供代码片段)
│       ├── vetur                           组件对应的字段说明(代码提示用)
│       │   ├── attributes.json
│       │   ├── README.md
│       │   └── tags.json
│       └── ...
├── projects                                开发中的项目(git/svn 上的项目)
│   └── vue-pack5
│       ├── package.json                    需要引入 components-vue/vetur 文件夹下的两个json文件，才能有智能提示
│       └── ...
├── README.md
├── tsconfig.json                           父层 tsconfig, 被vue项目继承的
├── .eslintrc.js                            父层 eslintrc, 被vue项目继承的
├── vetur.config.js                         对vetur插件配置,针对vue项目不在根目录的处理
├── lerna.json
├── package.json
├── .vscode
│   ├── components-vue.code-snippets        组件代码片段，针对vue的
│   └── settings.json
```
