import { useHistory } from "react-router-dom";

import { FormEvent, useState } from "react";
//import { Link } from "react-router-dom";

import "./styles.css";

export const EnterpriseForm = () => {
  const history = useHistory();

  const [corporateName, setCorporateName] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [complement, setComplement] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (corporateName.length === 0) {
      alert("Preencha a razão social.");
      return;
    }
    if (fantasyName.length === 0) {
      alert("Preencha o nome fantasia.");
      return;
    }
    if (cnpj.length === 0) {
      alert("Preencha o CNPJ.");
      return;
    }
    if (email.length === 0) {
      alert("Preencha o email da empresa.");
      return;
    }
    if (cep.length === 0) {
      alert("Preencha o CEP.");
      return;
    }
    if (address.length === 0) {
      alert("Preencha o endereço.");
      return;
    }
    if (addressNumber.length === 0) {
      alert("Preencha o número do endereço.");
      return;
    }
    if (neighborhood.length === 0) {
      alert("Preencha o bairro.");
      return;
    }
    if (city.length === 0) {
      alert("Preencha a cidade.");
      return;
    }
    if (latitude.toString().length === 0) {
      alert("Preencha a latitude.");
      return;
    }
    if (longitude.toString().length === 0) {
      alert("Preencha a longitude.");
      return;
    }
    try {
      await fetch("http://localhost:3333/enterprises", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          corporateName,
          fantasyName,
          cnpj,
          email,
          cep,
          address,
          addressNumber,
          neighborhood,
          city,
          complement,
          latitude,
          longitude,
        }),
      });
      alert("Empresa cadastrada com sucesso!");
    } catch (error) {
      alert("Houve um problema ao tentar cadastrar a empresa.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="enterprise-form-container">
      <div className="form-title">
        <h1>Nova Empresa</h1>
        <div className="form-buttons">
          <button className="btn-cancelar" onClick={() => history.push("/")}>
            Cancelar
          </button>
          <button type="submit" className="btn-salvar">
            Salvar
          </button>
        </div>
      </div>
      <div className="corp-data">
        <div className="corp-group">
          <label>
            Razão social
            <input
              type="text"
              name="corporateName"
              placeholder=""
              value={corporateName}
              onChange={(e) => setCorporateName(e.target.value)}
            ></input>
          </label>
          <label>
            Nome fantasia
            <input
              type="text"
              name="fantasyName"
              placeholder=""
              value={fantasyName}
              onChange={(e) => setFantasyName(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="corp-group">
          <label>
            CNPJ
            <input
              type="text"
              name="cnpj"
              placeholder=""
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            ></input>
          </label>
          <label className="input-email">
            E-mail
            <input
              type="email"
              name="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
        </div>
      </div>
      <div className="address-data">
        <div className="address-group-1">
          <label>
            CEP
            <input
              type="text"
              name="cep"
              placeholder=""
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            ></input>
          </label>
          <label className="input-address">
            Endereço
            <input
              type="text"
              name="address"
              placeholder=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="address-group-2">
          <label>
            Número
            <input
              type="text"
              name="addressNumber"
              placeholder=""
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
            ></input>
          </label>
          <label>
            Bairro
            <input
              type="text"
              name="neighborhood"
              placeholder=""
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            ></input>
          </label>
          <label>
            Cidade
            <input
              type="text"
              name="city"
              placeholder=""
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="address-group-3">
          <label>
            Complemento
            <input
              type="text"
              name="complement"
              placeholder=""
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            ></input>
          </label>
        </div>
      </div>
      <div className="position-data">
        <div className="position-group">
          <label>
            Latitude
            <input
              type="number"
              name="latitude"
              placeholder=""
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            ></input>
          </label>
          <label>
            Longitude
            <input
              type="number"
              name="longitude"
              placeholder=""
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            ></input>
          </label>
        </div>
      </div>
    </form>
  );
};
