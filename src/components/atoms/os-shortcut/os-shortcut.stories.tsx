import { Meta } from "@storybook/react"
import React from "react"
import OSShortcut from "."

export default {
    title: "Atoms/OSShortcut",
    component: OSShortcut,
} as Meta<typeof OSShortcut>

const Template = args => <OSShortcut {...args} />

export const CmdK = Template.bind({})
CmdK.args = {
    winModifiers: "Control",
    macModifiers: "⌘",
    keys: "K",
}

export const CmdKL = Template.bind({})
CmdKL.args = {
    winModifiers: "Control",
    macModifiers: "⌘",
    keys: ["K", "L"],
}
