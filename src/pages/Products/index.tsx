import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductList } from "../../components/ProductList";
import { URL_SERVER } from "../../utils/constants";
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

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      fetch(URL_SERVER + "/products").then((response) =>
        response.json().then((data: Product[]) => {
          setProducts(data);
        })
      );
    } catch (error) {
      console.error(error);
      alert("Houve um erro ao carregar os produtos.");
    }
  }, []);

  return (
    <div className="container">
      <h1>Produtos</h1>
      <Link to="/produtos/new">
        <button className="btn-new-product">Cadastrar</button>
      </Link>
      <div className="product-list-wrapper">
        <ProductList products={products} />
      </div>
    </div>
  );
};
