import { CategoriesData } from "../../../utils/data/categoriesMock";
import "./providerCategory.css";
export default function ProviderCategory() {
  return (
    <div className="container">
      <div className="categoryBox">
        <div id="borderTitle">
          <h1 className="categoryTitle">Proveedores por categoría</h1>
        </div>
        {CategoriesData.map((category) => {
          return (
            <div className="rowCategory" key={category.id}>
              <div>
                <h2 className="category">{category.category} </h2>
              </div>
              <div>
                <h3 className="count">10</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
