/* eslint-disable react/no-unescaped-entities */
'use client';
import styles from './video.module.css';
import { FaPlay } from 'react-icons/fa';

const Video = () => {
	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<h4>
					When a man's stomach is full it makes no difference whether he is rich
					or poor.
				</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
					purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
					tellus.
				</p>
				<button>
					{' '}
					<FaPlay className={styles.icon} /> Watch Our Story
				</button>
			</div>
		</div>
	);
};

export default Video;
