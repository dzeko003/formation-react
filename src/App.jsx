import { useState } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow.jsx";
import { ProductRow } from "./components/products/ProductRow.jsx";

const PRODUCTS = [
  {
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Apple",
  },
  {
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "DragonFruits",
  },
  {
    category: "Fruits",
    price: "$1",
    stocked: false,
    name: "PassionFruit",
  },
  {
    category: "Vegetables",
    price: "$1",
    stocked: true,
    name: "spinach",
  },
  {
    category: "Vegetables",
    price: "$1",
    stocked: false,
    name: "Pumpkin",
  },
  {
    category: "Vegetables",
    price: "$1",
    stocked: true,
    name: "Péas",
  },
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const  [search , setSearch] = useState('')

  const visibleProducts = PRODUCTS.filter(product => {
    if( showStockedOnly && !product.stocked){
      return false
    }

    if( search && !product.name.includes(search)){
      return false
    }

    return true
  })


  return (
    <div className="container my-3">
      <SearchBar
        search = {search}
        onSearchCange = {setSearch()}
        showStockedOnly={showStockedOnly}
        onStockOnlyChange={setShowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

function SearchBar({ showStockedOnly, onStockOnlyChange , search , onSearchCange }) {
  return (
    <div>
      <div className="mb-3">
        <Input value={search} onChange={onSearchCange} placeholder="Rechercher..." />
        <Checkbox
          type="checkbox"
          id="stock "
          checked={showStockedOnly}
          label="N'affichez que les produits en stock"
          onChange={onStockOnlyChange}
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastcategory = null;

  for (let product of products) {
    if (product.category !== lastcategory) {
      rows.push(
        <ProductCategoryRow name={product.category} key={product.category} />
      );
    }
    lastcategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
