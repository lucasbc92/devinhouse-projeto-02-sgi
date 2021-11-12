import "./styles.css";

interface ProductItemProps {
  imgUrl: string;
  name: string;
  cost: number;
  description: string;
  provider: string;
  category: string;
  id: number;
}

export const ProductItem: React.FC<ProductItemProps> = (props) => {
  return (
    <div className="product-container" title={props.description}>
      <img src={props.imgUrl} alt={props.name} />
      <p>{props.name}</p>
      <p>R$ {props.cost}/unidade</p>
      <p>Fornecedor: {props.provider}</p>
    </div>
  );
};
