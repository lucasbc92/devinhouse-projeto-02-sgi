import { FormEvent, useState } from "react";
//import { Link } from "react-router-dom";

import "./styles.css";

export const EnterpriseForm = () => {
  const [corporateName, setCorporateName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (corporateName.length === 0) {
      alert("Preencha a razão social.");
      return;
    }
    if (corporateName.length === 0) {
      alert("Preencha a razão social.");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="enterprise-form-container">
      <div className="form-title">
        <h1>Nova Empresa</h1>
        <div className="form-buttons">
          <button className="btn-cancelar">Cancelar</button>
          <button className="btn-salvar">Salvar</button>
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
            Razão social
            <input
              type="text"
              name="corporateName"
              placeholder=""
              value={corporateName}
              onChange={(e) => setCorporateName(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="corp-group">
          <label>
            Razão social
            <input
              type="number"
              name="corporateName"
              placeholder=""
              value={corporateName}
              onChange={(e) => setCorporateName(e.target.value)}
            ></input>
          </label>
          <label>
            Razão social
            <input
              type="email"
              name="corporateName"
              placeholder=""
              value={corporateName}
              onChange={(e) => setCorporateName(e.target.value)}
            ></input>
          </label>
        </div>
      </div>
      <div className="address-data">
        <div className="address-group-1">
          <label>
            Razão social
            <input
              type="number"
              name="corporateName"
              placeholder=""
              value={corporateName}
              onChange={(e) => setCorporateName(e.target.value)}
            ></input>
          </label>
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
        </div>
        <div className="address-group-2">
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
            Razão social
            <input
              type="text"
              name="corporateName"
              placeholder=""
              value={corporateName}
              onChange={(e) => setCorporateName(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="address-group-3">
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
        </div>
      </div>
      <div className="position-data">
        <div className="position-group">
          <label>
            Razão social
            <input
              type="text"
              name="corporateName"
              placeholder=""
              value={corporateName}
              onChange={(e) => setCorporateName(e.target.value)}
            ></input>
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
          </label>
        </div>
      </div>
    </form>
  );
};
