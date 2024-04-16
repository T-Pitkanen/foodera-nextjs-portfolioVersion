import Link from 'next/link';
import styles from './hero.module.css';

const Hero = () => {
	return (
		<div className={styles.hero} id='hero'>
			<div className={styles.heroContainer}>
				<h1>Good food choices are good investments</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
					purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
					tellus.
				</p>
				<div className={styles.buttons}>
					<Link className={styles.button} href="#selected">
						Order Now
					</Link>
					<Link className={styles.buttonLearn} href="#about">
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
