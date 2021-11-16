import React, { useEffect, useMemo, useState } from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { URL_SERVER } from "../../utils/constants";
import marker from "../../assets/images/icon-marker.svg";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./styles.css";

interface Enterprise {
  corporateName: string;
  fantasyName: string;
  cnpj: string;
  email: string;
  latitude: number;
  longitude: number;
}

export const EnterprisesMap = () => {
  const iconMarket = useMemo(() => {
    return new L.Icon({
      iconUrl: marker,
      iconRetinaUrl: marker,
      popupAnchor: [-0, -0],
      iconSize: [50, 50],
    });
  }, []);

  const [enterprises, setEnterprises] = useState<Enterprise[]>([]);

  useEffect(() => {
    try {
      fetch(URL_SERVER + "/enterprises").then((response) =>
        response.json().then((data: Enterprise[]) => {
          const mappedData = data.map(
            ({
              corporateName,
              fantasyName,
              cnpj,
              email,
              latitude,
              longitude,
            }) => {
              return {
                corporateName,
                fantasyName,
                cnpj,
                email,
                latitude,
                longitude,
              };
            }
          );
          setEnterprises(mappedData);
        })
      );
    } catch (error) {
      console.error(error);
      alert("Houve um erro ao carregar as empresas.");
    }
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={[-15.7217175, -48.0774443]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          spiderfyDistanceMultiplier={1}
          showCoverageOnHover={true}
        >
          {enterprises.map(
            (
              { corporateName, fantasyName, cnpj, email, latitude, longitude },
              index
            ) => (
              <Marker
                key={index}
                icon={iconMarket}
                position={[latitude, longitude]}
              >
                <Popup>
                  <p>Razão social: {corporateName}</p>
                  <p>Nome fantasia: {fantasyName}</p>
                  <p>CNPJ: {cnpj}</p>
                  <p>Email: {email}</p>
                </Popup>
              </Marker>
            )
          )}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};
