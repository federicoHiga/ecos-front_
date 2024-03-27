import { Typography } from "@mui/material";
import styles from "./providerCategory.module.css";
import { CategoriesData } from "../../utils/data/categoriesMock";
import useGetAll from "../../utils/services/hooks/useGetAll";
export default function ProviderCategory() {

  const {data} = useGetAll({url:"statistics/quantitySupplierByCategory"})
  console.log(data?.data)
  return (
    <div className={styles.container}>
      <div className={styles.borderTitle}>
        <h1 class={styles.title}>Proveedores por categoría</h1>
      </div>

      {data?.data.map((category,index) => {
        return (
          <div className={styles.rowCategory} key={index}>
            <div>
              <h2 className={styles.category}>{category.category} </h2>
            </div>
            <div>
              <h3 class={styles.count}>{category.quantity}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
