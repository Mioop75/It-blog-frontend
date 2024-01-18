'use client';

import Image from 'next/image';
import { FC, useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { IFileUplaod } from './FileUpload.interface';
import styles from './FileUpload.module.scss';

const FileUpload: FC<IFileUplaod> = ({ fieldChange, mediaUrl }) => {
	const [file, setFile] = useState<File[]>();
	const [fileUrl, setFileUrl] = useState(mediaUrl);

	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setFile(acceptedFiles);
			fieldChange(acceptedFiles);
			setFileUrl(URL.createObjectURL(acceptedFiles[0]));
		},
		[file]
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			'image/*': ['.png', '.jpeg', '.jpg', '.svg'],
		},
	});

	return (
		<div className={styles.wrapper} {...getRootProps()}>
			<div className={styles.fileUpload}>
				<input {...getInputProps()} />
				{fileUrl ? (
					<div className={styles.img}>
						<Image
							src={mediaUrl ? '/' + fileUrl : fileUrl}
							alt=""
							width={500}
							height={500}
						/>
					</div>
				) : (
					<p className={styles.info}>
						Drag your files here or click in this area.
					</p>
				)}
			</div>
			<div className={styles.btn}>Upload</div>
		</div>
	);
};

export default FileUpload;
