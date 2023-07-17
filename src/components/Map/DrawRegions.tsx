import { GeoJSON } from "react-leaflet";
import React from "react";
import regionsJson from "./regions.json";

let regionDict: { [region: string]: any } = regionsJson;

type dataRow = {
  region: string;
  color: string;
};

type Props = {
  data: dataRow[];
  setSelectedRegion: (regionList: string[]) => void;
};

const nRegions = 18;
const selectedRegions: boolean[] = new Array(nRegions).fill(false);

function setElement(arr: boolean[], index: number, value: boolean) {
  const newArr = [...arr];
  newArr[index] = value;
  return newArr;
}

function DrawRegions({ data, setSelectedRegion }: Props) {
  const [regionFocus, setRegionFocus] =
    React.useState<boolean[]>(selectedRegions);

  const regionNames = data.map((x) => x.region);

  React.useEffect(() => {
    const selectedRegions = regionFocus
      .map((x, index) => (x ? regionNames[index] : ""))
      .filter((x) => x !== "");
    setSelectedRegion(selectedRegions);
  }, [regionFocus]);

  return (
    <>
      {data.map((entry, index) => (
        <GeoJSON
          data={regionDict[entry.region] as any}
          key={index}
          pathOptions={{
            fillColor: entry.color,
            color: "black",
            weight: 1,
            fillOpacity: regionFocus.some((x) => x)
              ? 0.35 + 0.65 * Number(regionFocus[index])
              : 1,
          }}
          eventHandlers={{
            click: (e) => {
              if (e.originalEvent.shiftKey) {
                setRegionFocus(regionFocus.map((x) => false));
                return;
              }
              regionFocus[index]
                ? setRegionFocus(setElement(regionFocus, index, false))
                : setRegionFocus(setElement(regionFocus, index, true));
            },
          }}
        />
      ))}
    </>
  );
}

export default DrawRegions;
