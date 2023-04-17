import { Meta, ComponentStory } from "@storybook/react"
import React from "react"
import Checkbox from "."

export default {
    title: "Atoms/Checkbox",
    component: Checkbox,
} as Meta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
)

export const Default = Template.bind({})
Default.args = {
    label: "Checkbox",
}
