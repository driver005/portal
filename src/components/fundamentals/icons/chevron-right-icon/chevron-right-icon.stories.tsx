import { Meta } from "@storybook/react"
import React from "react"
import ChevronRightIcon from "."

export default {
    title: "Fundamentals/Icons/ChevronRightIcon",
    component: ChevronRightIcon,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["24", "20", "16"],
            },
        },
    },
} as Meta<typeof ChevronRightIcon>

const Template = args => <ChevronRightIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
    size: "24",
    color: "currentColor",
}
