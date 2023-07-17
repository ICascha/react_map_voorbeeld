import { Select } from "antd";
import { LatLngTuple } from "leaflet";
import React from "react";

const { Option } = Select;

const locDict: { [key: string]: LatLngTuple } = {
  Somalia: [5.152149, 46.199615],
  Kenya: [0, 0],
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

type Props = {
  setMapCenter: React.Dispatch<React.SetStateAction<LatLngTuple>>;
};

const CountrySelection = ({ setMapCenter }: Props) => {
  const onChange = (value: string) => {
    console.log(`selected ${setMapCenter(locDict[value])}`);
  };
  return (
    <Select
      showSearch
      placeholder="Select a country"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option!.children as unknown as string)
          .toLowerCase()
          .includes(input.toLowerCase())
      }
    >
      <Option value="Somalia">Somalia</Option>
      <Option value="Kenya">Kenya</Option>
    </Select>
  );
};

export default CountrySelection;
