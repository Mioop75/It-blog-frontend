import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
	tags: ['autodocs'],
	title: 'Button',
	component: Button,
	args: { label: 'Button', children: 'Click' },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		color: 'Blue',
	},
};

export const Green: Story = {
	args: {
		color: 'Green',
	},
};

export const Red: Story = {
	args: {
		color: 'Red',
	},
};

export const LinkButton: Story = {
	args: {
		children: 'Link',
		isLink: true,
		color: 'Blue',
		href: '/',
	},
};
