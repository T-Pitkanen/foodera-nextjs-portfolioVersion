'use client';
import { useEffect, useState } from 'react';
import styles from './reviews.module.css';
import Image from 'next/image';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	const getReviews = async () => {
		const response = await fetch('http://localhost:3000/api/reviews');
		const data = await response.json();
		setReviews(data);
	};

	useEffect(() => {
		getReviews();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { name, text, file } = e.target.elements;

		if (!name.value || !text.value || !file.files[0]) {
			console.log('You need to add a file, name, and text!');
			return;
		}

		const formData = new FormData();
		formData.append('name', name.value);
		formData.append('text', text.value);
		formData.append('file', file.files[0]);

		let response = await fetch('http://localhost:3000/api/review', {
			method: 'POST',
			body: formData,
		});

		let data = await response.json();

		getReviews();
	};

	const handleDelete = async (e, id) => {
		e.preventDefault();
		let response = await fetch('http://localhost:3000/api/review?id=' + id, {
			method: 'DELETE',
		});
		let data = await response.json();

		getReviews();
	};

	return (
		<div className={styles.container}>
			<h2>Reviews</h2>
			<div className={styles.reviews}>
				{reviews.map((review, index) => {
					return (
						<span className={styles.reviewsContainer} key={index}>
							<Image
								className={styles.reviewImg}
								src={review.imagePath}
								alt={review.title}
								width={100}
								height={100}
							/>
							<p>{review.name}</p>
							<p>{review.text}</p>
							<button onClick={(e) => handleDelete(e, review._id)}>
								Delete
							</button>
						</span>
					);
				})}
			</div>

			<h3>Add New Review</h3>

			<form onSubmit={handleSubmit}>
				<label>
					{' '}
					Name
					<input
						type="name"
						name="name"
						placeholder="Reviewers Name"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Text
					<textarea
						type="text"
						name="text"
						placeholder="Review"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Review Image
					<input type="file" name="file" placeholder="Select File" />
				</label>
				<button>Upload</button>
			</form>
		</div>
	);
};

export default Reviews;
