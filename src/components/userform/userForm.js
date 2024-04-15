'use client';

import styles from './userForm.module.css';
import { useState } from 'react';

import { squareFont } from '@/utils/fonts';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	message: Yup.string(),
});

const UserForm = () => {
	const [showModal, setShowModal] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const [name, email, message] = event.target.elements;

		try {
			//using yup to validate the form
			validationSchema.validateSync(
				{
					name: name.value,
					email: email.value,
					message: message.value,
				},
				{ abortEarly: false }
			);

			//update state
			setName(name.value);
			setEmail(email.value);
			setMessage(message.value);
			setShowModal(true);

			const response = await fetch('api/subscriber', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name.value,
					email: email.value,
					message: message.value,
				}),
			});

			const data = await response.json();
			console.log('Server response:', data);

			//error handling
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				setErrorMessage(error.message);
			} else {
				console.error(error);
			}
		}
	};

	return (
		<div className={styles.container}>
			<h1>
				Hurry Up! <br /> Subscribe our newsletter and get 25% Off
			</h1>

			<p>Limited time offer for this month. No credit card required.</p>
			{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					//when user types, update name state with the current value
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					placeholder="Email"
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<textarea
					name="message"
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>

				<input type="submit" value="Subscribe" />
			</form>

			{showModal && (
				<div className={styles.modal}>
					<div className={styles.modalContainer}>
						<h1 className={styles.modalHeader}>Thank You!</h1>
						<span className={styles.subName}>{name}</span>
						<h2>You are now justified 25% off.</h2>

						<p>Limited time offer for this month. No credit card required.</p>
						<a href="/" className={styles.btn}>
							Back
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserForm;
