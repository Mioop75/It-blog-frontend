import { Meta, StoryObj } from '@storybook/react';
import Field from './Field';

const meta: Meta<typeof Field> = {
	tags: ['autodocs'],
	title: 'Field',
	component: Field,
};

export default meta;

type Story = StoryObj<typeof Field>;

export const FieldComponent: Story = {
	args: {
		placeholder: 'Field',
	},
	storyName: 'Field',
};

export const FieldComponentWithError: Story = {
	args: {
		placeholder: 'Field with error',
		error: { message: 'Error', type: 'value' },
	},
	storyName: 'Field With Error',
};
