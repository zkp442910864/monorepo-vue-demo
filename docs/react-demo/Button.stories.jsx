import React from 'react';

import {Button} from './Button';

export default {
    title: 'react-demo/Button2',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Button {...args} />;
// console.log(Template)
export const Primary2 = Template.bind({});
Primary2.args = {
    primary: true,
    label: 'Button',
};

export const Secondary2 = Template.bind({});
Secondary2.args = {
    label: 'Button',
};

export const Large2 = Template.bind({});
Large2.args = {
    size: 'large',
    label: 'Button',
};

export const Small2 = Template.bind({});
Small2.args = {
    size: 'small',
    label: 'Button',
};
