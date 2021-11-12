import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import "./styles.css";

interface Product {
  imgUrl: string;
  name: string;
  cost: number;
  description: string;
  provider: string;
  category: string;
  id: number;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const [listOfCategories, setListOfCategories] = useState<string[]>([]);
  useEffect(() => {
    console.log(props.products);
    let list = props.products.map((product) => product.category);
    list = list.sort().filter((v, i) => list.indexOf(v) === i);
    console.log(list);
    setListOfCategories(list);
  }, [props.products]);

  return (
    <div className="product-list-container">
      {listOfCategories.map((category) => (
        <div className="category-container">
          <h2 className="title-category">{category}</h2>
          <div className="product-list-category">
            {props.products
              .filter((item) => item.category === category)
              .map((product) => (
                <ProductItem key={product.id} {...product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
