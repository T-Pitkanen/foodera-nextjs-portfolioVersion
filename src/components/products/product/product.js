'use client';
import Image from 'next/image';
import styles from './product.module.css';
import { useBasket } from '@/context/basket';

const Product = ({ product }) => {
	const { addToBasket } = useBasket();
	const { image, title, time, serves, price, priceBefore, _id } = product;

	return (
		<div className={styles.productContainer}>
			<div className={styles.product}>
				<Image
					className={styles.productImg}
					src={image}
					alt={title}
					width={500}
					height={500}
				/>
				<div className={styles.detailContainer}>
					<div className={styles.details}>
						<h3>{title}</h3>
						<div className={styles.detailsSecond}>
							<p>
								Time: {time}, Serves: {serves}
							</p>
						</div>
					</div>
					<div className={styles.actions}>
						<div className={styles.prices}>
							<p className={styles.price}>${price.toFixed(2)}</p>
							{priceBefore > 0 && (
								<p>
									<s> ${priceBefore.toFixed(2)}</s>
								</p>
							)}
						</div>
						<button
							className={styles.orderBtn}
							onClick={(e) => {
								e.preventDefault();
								addToBasket(_id);
							}}
						>
							Order Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
