'use client';

import Accordion from './accordion';
import { useEffect, useState } from 'react';
// import { API_BASE_URL } from '@/config/apiConfig';
import styles from './accordions.module.css';

const Faqs = () => {
	const [questionsData, setQuestionsData] = useState([]);

	useEffect(() => {
		const getQuestions = async () => {
			const response = await fetch('api/faqs');
			const data = await response.json();
			setQuestionsData(data);
		};

		getQuestions();
	}, []);

	return (
		<div className={styles.accordionsContainer} id='faq'>
			<h3>Frequently Asked Questions</h3>
			<div className={styles.accordions}>
				{' '}
				{questionsData.map((question) => {
					return (
						<Accordion
							key={question._id}
							header={question.question}
							body={question.answer}
						></Accordion>
					);
				})}
			</div>
		</div>
	);
};

export default Faqs;
