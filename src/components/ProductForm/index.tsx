import { useHistory } from "react-router-dom";

import { FormEvent, useEffect, useState } from "react";
//import { Link } from "react-router-dom";

import { URL_SERVER } from "../../utils/constants";
import "./styles.css";

export const ProductForm = () => {
  const history = useHistory();

  const [providerList, setProviderList] = useState<string[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (imgUrl.length === 0) {
      alert("Preencha a URL da imagem.");
      return;
    }
    if (name.length === 0) {
      alert("Preencha o nome.");
      return;
    }
    if (cost.length === 0) {
      alert("Preencha o custo unitário.");
      return;
    }
    if (description.length === 0) {
      alert("Preencha a descrição.");
      return;
    }
    if (provider.length === 0) {
      alert("Escolha o fornecedor.");
      return;
    }
    if (category.length === 0) {
      alert("Escolha a categoria do produto.");
      return;
    }
    try {
      await fetch(URL_SERVER + "/products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imgUrl,
          name,
          cost,
          description,
          provider,
          category,
        }),
      });
      alert("Produto cadastrado com sucesso!");
      history.push("/");
    } catch (error) {
      alert("Houve um problema ao tentar cadastrar o produto.");
    }
  };

  useEffect(() => {
    try {
      fetch(URL_SERVER + "/providers").then((response) =>
        response.json().then((data) => setProviderList(data))
      );
      fetch(URL_SERVER + "/categories").then((response) =>
        response.json().then((data) => setCategoryList(data))
      );
    } catch (error) {
      console.error(error);
      alert(
        "Houve um problema ao tentar retornar os fornecedores e as categorias do produto."
      );
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="product-form-container">
      <div className="form-title">
        <h1>Novo produto</h1>
        <div className="form-buttons">
          <button className="btn-cancelar" onClick={() => history.push("/")}>
            Cancelar
          </button>
          <button type="submit" className="btn-salvar">
            Salvar
          </button>
        </div>
      </div>
      {imgUrl && (
        <div className="image-render">
          <img src={imgUrl} alt="Imagem do produto" />
        </div>
      )}
      <div className="image-group">
        <label>
          URL da imagem
          <input
            type="text"
            name="imgUrl"
            placeholder=""
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="name-cost-group">
        <label className="input-name">
          Nome
          <input
            type="text"
            name="name"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          Custo unitário
          <input
            type="number"
            name="cost"
            placeholder=""
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="description-group">
        <textarea
          rows={4}
          cols={36}
          name="description"
          placeholder="Escreva uma descrição para o produto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="selects-group">
        <label>
          Fornecedor {"   "}
          <select
            name="provider"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option value="">Selecione um fornecedor</option>
            {providerList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Categoria {"   "}
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            {categoryList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </form>
  );
};
