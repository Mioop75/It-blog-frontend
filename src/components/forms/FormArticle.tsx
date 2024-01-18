'use client';

import Button from '@/components/Button/Button';
import Field from '@/components/Field/Field';
import FileUpload from '@/components/FileUpload/FileUpload';
import TextArea from '@/components/TextArea/TextArea';
import { articleSchema } from '@/schemas/article.schema';
import articlesService from '@/services/articles.service';
import { IArticle, IInputArticle } from '@/types/article.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useController, useForm } from 'react-hook-form';
import styles from './FormArticle.module.scss';

type FormArticleProps = {
	action: 'Update' | 'Create';
	article?: IArticle;
};

const FormArticle: FC<FormArticleProps> = ({ action, article }) => {
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors, isSubmitSuccessful, isSubmitted, isLoading, isValid },
	} = useForm<IInputArticle>({
		resolver: yupResolver(articleSchema),
		defaultValues: {
			title: article?.title || '',
			content: article?.content || '',
			tags: article?.tags?.map(tag => tag.name).join(',') || '',
			previewFile: [],
		},
	});

	const { push } = useRouter();

	const { field } = useController<IInputArticle>({
		name: 'previewFile',
		control,
	});

	const onSubmit = handleSubmit(async data => {
		if (!isValid) return null;

		if (action === 'Update') {
			const isUpdated = await articlesService.updateArticle(article.slug, data);
			if (isUpdated) {
				push('/');
			}
		} else {
			const isCreated = await articlesService.createArticle(data);

			if (isCreated) {
				push('/');
			}
		}
	});

	return (
		<div className={styles.form}>
			<h2 className={styles.title}>{action} Article</h2>
			<form onSubmit={onSubmit}>
				<div>
					<FileUpload
						fieldChange={field.onChange}
						mediaUrl={article?.preview || ''}
					/>
				</div>
				<div>
					<Field
						placeholder="title"
						label="Title"
						{...register('title')}
						error={errors.title}
					/>
				</div>
				<div>
					<TextArea
						placeholder="content"
						label="Content"
						{...register('content')}
						error={errors.content}
					/>
				</div>
				<div>
					<Field
						placeholder='Add Tags (separated by comma " , ")'
						label="Title"
						{...register('tags')}
						error={errors.title}
					/>
				</div>
				<div>
					<Button className={styles.btn}>{action}</Button>
				</div>
			</form>
		</div>
	);
};

export default FormArticle;
