import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
        },
    features: {
        storyStoreV7: true, // 👈 Opt out of on-demand story loading
    },
};
export default config;
