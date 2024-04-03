import "./providerCategory.css";
import useGetAll from "../../../utils/services/hooks/useGetAll";

export default function ProviderCategory() {
  const {data} = useGetAll({url:"statistics/quantitySupplierByCategory"})
  console.log(data?.data)

  return (
    <div className="container">
      <div className="categoryBox">
        <div id="borderTitle">
          <h1 className="categoryTitle">Proveedores por categoría</h1>
        </div>
        {data?.data.map((category,i) => {
          return (
            <div className="rowCategory" key={i}>
              <div>
                <h2 className="category">{category.category} </h2>
              </div>
              <div>
                <h3 className="count">{category.quantity}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
