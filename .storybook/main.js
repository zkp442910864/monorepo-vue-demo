module.exports = {
    "stories": [
        // "../packages/**/*.stories.mdx",
        // "../packages/**/*.stories.@(js|jsx|ts|tsx)",
        "../packages/**/*.stories.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)",

        "../projects/**/*.stories.mdx",
        "../projects/**/*.stories.@(js|jsx|ts|tsx)",

        "./config/*.stories.mdx",

        "./demo/*.stories.mdx",
        "./demo/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        // 工具栏功能
        "@storybook/addon-essentials",
        "@storybook/addon-docs"
    ]
}