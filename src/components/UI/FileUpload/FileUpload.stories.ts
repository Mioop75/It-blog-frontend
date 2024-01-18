import { Meta, StoryObj } from '@storybook/react';
import FileUpload from './FileUpload';

const meta: Meta<typeof FileUpload> = {
	tags: ['autodocs'],
	title: 'FileUpload',
	component: FileUpload,
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const FileUploadComponent: Story = {};
