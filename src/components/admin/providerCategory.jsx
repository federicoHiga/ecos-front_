import { Typography } from "@mui/material";
import styles from "./providerCategory.module.css";
import { CategoriesData } from "../../utils/data/categoriesMock";
export default function ProviderCategory() {
  return (
    <div className={styles.container}>
      <div className={styles.borderTitle}>
        <h1 class={styles.title}>Proveedores por categoría</h1>
      </div>

      {CategoriesData.map((category) => {
        return (
          <div className={styles.rowCategory}>
            <div>
              <h2 className={styles.category}>{category.category} </h2>
            </div>
            <div>
              <h3 class={styles.count}>10</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
