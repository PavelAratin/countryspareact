import Search from "./Search";
import React, { useState, useEffect } from "react";
import { CustomeSelect } from "./CustomSelect";
import styled from "styled-components";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = ({ onSearch }) => {
  //делаем поиск управляемым
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
  }, [search, region]);
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch}></Search>
      <CustomeSelect
        options={options}
        placeholder="Filter by Regio"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      ></CustomeSelect>
    </Wrapper>
  );
};

export default Controls;
