import { Meta } from "@storybook/react"
import React from "react"
import CashIcon from "."

export default {
    title: "Fundamentals/Icons/CashIcon",
    component: CashIcon,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["24", "20", "16"],
            },
        },
    },
} as Meta<typeof CashIcon>

const Template = (args) => <CashIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
    size: "24",
    color: "currentColor",
}