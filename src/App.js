import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./App.css";
import { continents } from "./continents";
import { Link } from "react-router-dom";

const App = () => (
  <ComposableMap projection={"geoMercator"}>
    <Geographies geography={continents}>
      {({ geographies }) =>
        geographies.map((geo) => {
          console.log(geo);
          return (
            <Link to={`/region/${geo.properties.continent}`}>
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#06F",
                    stroke: "#FFF",
                    strokeWidth: 2,
                  },
                  hover: {
                    fill: "#F00",
                  },
                }}
              />
            </Link>
          );
        })
      }
    </Geographies>
  </ComposableMap>
);

export default App;
