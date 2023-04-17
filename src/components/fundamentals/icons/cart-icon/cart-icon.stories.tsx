import { Meta } from "@storybook/react"
import CartIcon from "."

const cartIconMeta: Meta<typeof CartIcon> = {
    title: "Fundamentals/Icons/CartIcon",
    component: CartIcon,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["24", "20", "16"],
            },
        },
    },
}

export default cartIconMeta

const Template = (args) => <CartIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
    size: "24",
    color: "currentColor",
}
