'use client';
import Image from 'next/image';
import styles from './reviews.module.css';
import { useEffect, useState, useRef } from 'react';

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import reviewsData from '../../data/reviews.json';

const Testimonial = ({ text, name, imagePath }) => {
	return (
		<div className={styles.card} id="reviews">
			<div className={styles.content}>
				<Image src={imagePath} alt="review1" width={300} height={300} />
				<p>{text}</p>
				<span>{name}</span>
			</div>
		</div>
	);
};

const PaginationBar = ({ list, slideTo, currentIndex }) => {
	return (
		<div className={styles.pagination}>
			<div className={styles.paginationBar}>
				{list.map((item, index) => {
					return (
						<div
							key={index}
							className={`${styles.paginationDot} ${
								currentIndex === index ? styles.active : ''
							}`}
							onClick={() => slideTo(index)}
						></div>
					);
				})}
			</div>
		</div>
	);
};

const Reviews = () => {
	const swiperRef = useRef(null);
	const [reviewsList, setReviewsList] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const getReviews = async () => {
			setReviewsList(reviewsData);
		};

		getReviews();
	}, []);

	/* ORIGINAL
	useEffect(() => {
		const getReviews = async () => {
			const response = await fetch('/api/reviews');
			const data = await response.json();
			setReviewsList(data);
		};

		getReviews();
	}, []); */

	// Register swiper
	useEffect(() => {
		register();
	}, []);

	// Listen for event
	useEffect(() => {
		swiperRef.current.addEventListener('swiperslidechange', (e) => {
			const [swiper] = e.detail;
			setCurrentIndex(swiper.activeIndex);
		});
	}, []);

	const slideTo = (index) => {
		swiperRef.current.swiper.slideTo(index, 1000);
	};

	return (
		<div className={styles.container}>
			<div className={`wrapper`}>
				<header>
					<h3>Testimonials</h3>
					{/* <br/><Link href="/backoffice/reviews">See all reviews</Link> */}
				</header>

				<swiper-container slides-per-view={1} autoplay ref={swiperRef}>
					{reviewsList.map((review, index) => {
						return (
							<swiper-slide key={index}>
								<Testimonial
									imagePath={review.imagePath}
									name={review.name}
									text={review.text}
								></Testimonial>
							</swiper-slide>
						);
					})}
				</swiper-container>
				<footer>
					<PaginationBar
						list={reviewsList}
						slideTo={slideTo}
						currentIndex={currentIndex}
					></PaginationBar>
				</footer>
			</div>
		</div>
	);
};
export default Reviews;
