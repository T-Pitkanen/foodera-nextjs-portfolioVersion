import Link from 'next/link';
import styles from './about.module.css';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const About = () => {
	return (
		<div>
			<div className={styles.container} id='about'>
				{' '}
				<Image
					className={styles.image}
					src="/promos/promo_01.png"
					alt="About"
					width={800}
					height={800}
				/>
				<div className={styles.aboutText}>
					<h2>
						We pride ourselves on making real food from the best ingredients.
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
						purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
						tellus.
					</p>
					<Link className={styles.button} href="/about">
						Learn More
					</Link>
				</div>
			</div>
			<div className={`${styles.container} ${styles.containerSecond}`}>
				{' '}
				<Image
					className={styles.imageSecond}
					src="/promos/promo_02.png"
					alt="About"
					width={500}
					height={500}
				/>
				<div>
					<h2>
						We make everything by hand with the best possible ingredients.
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
						purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
						tellus.
					</p>
					<div className={styles.checkmarks}>
						<p>
							<FaCheck className={styles.icon} /> Etiam sed dolor ac diam
							volutpat.
						</p>
						<p>
							<FaCheck className={styles.icon} /> Etiam sed dolor ac diam
							volutpat.
						</p>
						<p>
							<FaCheck className={styles.icon} /> Etiam sed dolor ac diam
							volutpat.
						</p>
					</div>
					<Link className={styles.button} href="/about">
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
