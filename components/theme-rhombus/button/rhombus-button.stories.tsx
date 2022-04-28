import 'styles/globals.css';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RhombusButton from './rhombus-button';

export default {
  title: 'Rhombus/Button',
  component: RhombusButton,
  argTypes: {},
} as ComponentMeta<typeof RhombusButton>;

const Template: ComponentStory<typeof RhombusButton> = (args) => (
  <RhombusButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
