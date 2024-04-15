import styles from './subscribe.module.css';
const Subscribe = () => {
    return (
        <div className={styles.container}>
            <div className={`wrapper`}>
                <div className={styles.formWrapper}>
                    <form>
                        <input type="email" placeholder="Email Address here" />
                        <button>Subscribe</button>
                    </form>
                </div>

            </div>
        </div>
    )
};
export default Subscribe