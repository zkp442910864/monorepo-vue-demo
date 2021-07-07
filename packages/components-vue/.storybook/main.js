module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",

        "../../common-docs/vue-demo/**/*.stories.mdx",
        "../../common-docs/vue-demo/**/*.stories.@(js|jsx|ts|tsx)",
        "../../common-docs/common-mdx/**/*.stories.mdx",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-docs"
    ]
}