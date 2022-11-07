import React, { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "../constans/Api";
import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";

export default function HomePage({countries, setCountries}) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((countrie) => countrie.region.includes(region));
    }
    if (search) {
      data = data.filter((value) =>
        value.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredCountries(data);
  };
  useEffect(() => {
    if (!countries.length) {
      fetch(ALL_COUNTRIES)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }
  }, []);
  useEffect(() => {
    handleSearch();
  }, [countries]);
  return (
    <React.Fragment>
      <Controls onSearch={handleSearch}></Controls>
      <List>
        {filteredCountries.map((countrie) => {
          const countryInfo = {
            img: countrie.flags.png,
            name: countrie.name,
            info: [
              {
                title: "Population",
                description: countrie.population.toLocaleString(),
              },
              {
                title: "Region",
                description: countrie.region,
              },
              {
                title: "Capital",
                description: countrie.capital,
              },
            ],
          };
          return <Card key={countrie.name} {...countryInfo}></Card>;
        })}
      </List>
    </React.Fragment>
  );
}
