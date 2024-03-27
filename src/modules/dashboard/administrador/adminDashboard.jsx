import AdminPrincipal from "../../../components/admin/adminPrincipal";
import styles from "./adminDashboard.module.css"
export default function AdminDashboard() {
  return (
    <div className={styles.container}>
      <AdminPrincipal  />
    </div>
  );
}
