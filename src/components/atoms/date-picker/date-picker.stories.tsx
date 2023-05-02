import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import TimePicker from './time-picker';
import DatePicker from './date-picker';

export default {
    title: 'Atoms/DateTimePicker',
    component: DatePicker,
} as Meta<typeof DatePicker>;

const DatePickertemplate: StoryFn<typeof DatePicker> = (args) => (
    <div className="h-[200px] w-[750px]">
        <DatePicker {...args} />
    </div>
);

const TimePickertemplate: StoryFn<typeof TimePicker> = (args) => (
    <div className="h-[200px] w-[750px]">
        <TimePicker {...args} />
    </div>
);

export const DatePickerExample = {
    render: DatePickertemplate,
    args: {
        date: new Date('01/20/2022'),
        onChange: (date) => { },
    }
};

export const TimePickerExample = {
    render: TimePickertemplate,
    args: {
        date: new Date('01/20/2022'),
        onChange: (date) => { },
    }
};
