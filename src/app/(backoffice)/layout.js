import NavigationBo from '@/components/backoffice/navigationBo/navigation';
import styles from './layout.module.css';

export const metadata = {
	title: 'FOODERA BACKOFFICE',
	description: 'Backoffice for foodera.dk',
};

export default function backofficeLayout({ children }) {
	return (
		<div className={styles.layout}>
			<NavigationBo></NavigationBo>
			{children}
		</div>
	);
}
