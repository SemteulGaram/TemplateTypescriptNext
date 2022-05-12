import 'styles/globals.css';
import 'styles/storybook.css';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import RhombusButton from './rhombus-button';
import { mdiAccount } from '@mdi/js';

export default {
  title: 'Rhombus/Button',
  component: RhombusButton,
  argTypes: {
    label: {
      description: 'Button label',
    },
    iconSrc: {
      description: 'Button icon image src',
      type: 'string',
    },
    iconMdi: {
      description:
        'Button icon (See [https://materialdesignicons.com/](https://materialdesignicons.com/))',
    },
  },
} as ComponentMeta<typeof RhombusButton>;

const Template: ComponentStory<typeof RhombusButton> = (args) => (
  <RhombusButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  iconMdi: mdiAccount,
};
