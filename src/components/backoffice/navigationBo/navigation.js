import Link from 'next/link';
import styles from './navigation.module.css';
const NavigationBo = () => {
	return (
		<div className={styles.container}>
			<Link href="/">Back to the Frontend</Link> |
			<Link href="/backoffice/affiliates">Edit Affiliates</Link> |
			<Link href="/backoffice/reviews">Edit Reviews</Link> |
			<Link href="/backoffice/subscribers">Edit Subscribers</Link> |
			<Link href="/backoffice/orders">Edit Orders</Link> |
			{/* <Link href="/backoffice/single">Single</Link>| */}
			{/* <Link href="/backoffice/mulitple">Mulitple</Link> */}
		</div>
	);
};
export default NavigationBo;
