import React, { useState } from "react"
import { Meta } from "@storybook/react"

import PriceInput from "./index"
import { currencies } from "@utils/currencies"

function C(args) {
    const [amount, setAmount] = useState()

    return <PriceInput {...args} amount={amount} onAmountChange={setAmount} />
}

export default {
    title: "Organisms/PriceInput",
    component: PriceInput,
} as Meta<typeof PriceInput>

const Template = (args) => <C {...args} />

export const Default = Template.bind({})
Default.args = {
    currency: currencies.BHD,
}
