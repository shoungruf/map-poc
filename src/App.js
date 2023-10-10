import "./App.css";

import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import indianStates from "./statesData.mock.json";

const indiaCenter = [23.14033355077663, 79.48691323120215];

function App() {
  return (
    <>
      <MapContainer
        center={indiaCenter}
        zoom={10}
        style={{ width: "100v", height: "100vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=7aNkQ6xFSrpqsqlWCaJW"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {indianStates.features.map((data) => {
          const coordinates = data.geometry.coordinates[0].map((pos) => [
            pos[1],
            pos[0],
          ]);
          return (
            <Polygon
              pathOptions={{
                fillColor: "#FD8D3C",
                fillOpacity: 0.7,
                weight: 2,
                dashArray: "3",
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 5,
                    dashArray: "",
                    color: "#666",
                    fillColor: "#888",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: 3,
                    color: "white",
                    fillColor: "#FD8D3C",
                  });
                },
                click: (e) => {},
              }}
            />
          );
        })}
      </MapContainer>
    </>
  );
}

export default App;
