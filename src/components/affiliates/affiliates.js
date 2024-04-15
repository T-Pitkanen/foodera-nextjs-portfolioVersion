// import Link from "next/link";
// import styles from "./affiliates.module.css";

// const Affiliates = () => {
//   return (
//     <div className={styles.container}>
//       <h2>Our Partners</h2>
//      <div className={styles.affiliates}> </div>
//     </div>
//   );
// };

// export default Affiliates;

'use client';
import Image from 'next/image';
import styles from './affiliates.module.css';
import affiliatesData from '../../data/affiliates.json';

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState, useRef } from 'react';

const Affiliates = () => {
	const [affiliates, setAffiliates] = useState([]);
	// Reference til swiper elementet.
	const swiperRef = useRef(null);

	// State til at holde vinduesstørrelsen
	const [windowDimensions, setWindowDimensions] = useState({});

	useEffect(() => {
		const getAffiliates = async () => {
			setAffiliates(affiliatesData);
			swiperRef.current.swiper.update();
		};

		getAffiliates();
	}, []);

	/* ORIGINAL
	useEffect(() => {
		const getAffiliates = async () => {
			const response = await fetch('/api/affiliates');
			const data = await response.json();

			setAffiliates(data);
			swiperRef.current.swiper.update();
		};

		getAffiliates();
	}, []); */

	// Håndter dynamisk ændring af vinduesstørrelse
	useEffect(() => {
		// Henter information fra windows objektet.
		const getWindowDimensions = () => {
			const { innerWidth, innerHeight } = window;
			return { innerWidth, innerHeight };
		};

		// Kalder denne funktion hver gang browseren ændres i størrelse.
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		// Lytter på vinduesstørrelse via window objektet
		window.addEventListener('resize', handleResize);

		// Fjerne eventlistener når komponentet unmountes/ryddes op
		return () => window.removeEventListener('resize', handleResize);
	}, [windowDimensions]);

	// Registrer Seiper og Opdaterer vinduesstørrelsen når komponentet er mounted
	useEffect(() => {
		register();

		// Vi kalder 'resize' event, så swiper opdaterer sig selv med den nye størrelse på opstart.
		window.dispatchEvent(new Event('resize'));
	}, []);

	// Håndtere ændring af slides per view, hver gang browserens vindue ændres i størrelse.
	useEffect(() => {
		let swiperParams = swiperRef.current.swiper.params;

		if (windowDimensions.innerWidth < 768) {
			swiperParams.slidesPerView = 2;
		} else if (
			windowDimensions.innerWidth > 768 &&
			windowDimensions.innerWidth < 1024
		) {
			swiperParams.slidesPerView = 3;
		} else if (windowDimensions.innerWidth > 1024) {
			swiperParams.slidesPerView = 5;
		}

		swiperRef.current.swiper.update();
	}, [windowDimensions]);

	// Template
	return (
		<div className={`${styles.container} `}>
			<div className={`${styles.header}`}>
				<h3>Our Partners</h3>
			</div>

			<div className={`${styles.slider}`}>
				<swiper-container
					slides-per-view={2}
					loop
					autoplay
					slides-per-group={1}
					ref={swiperRef}
				>
					{affiliates.map((affiliate, index) => {
						return (
							<swiper-slide key={affiliate._id}>
								<div className={styles.affiliate}>
									<Image
										className={styles.affiliateImg}
										src={affiliate.imagePath}
										alt="affiliates"
										width={160}
										height={72}
									/>
								</div>
							</swiper-slide>
						);
					})}
				</swiper-container>
			</div>
		</div>
	);
};
export default Affiliates;
