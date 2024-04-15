import Affiliates from '@/components/backoffice/affiliatesBo/affiliates';
import styles from './page.module.css';
export default function ReviewsPage() {

    return (
        <div className={styles.page}>

            <h1>Edit Affiliates</h1>

            <Affiliates></Affiliates>
        </div>
    )
    
}