import { Meta } from "@storybook/react"
import React from "react"
import CustomerIcon from "."

export default {
    title: "Fundamentals/Icons/CustomerIcon",
    component: CustomerIcon,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["24", "20", "16"],
            },
        },
    },
} as Meta<typeof CustomerIcon>

const Template = args => <CustomerIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
    size: "24",
    color: "currentColor",
}
