import styles from "./page.module.css";
import Subscribers from "@/components/backoffice/subscribersBo/subscribers";
export default function Page() {
  return (
    <div className={styles.page}>

      <Subscribers />
      <form></form>
    </div>
  );
}
