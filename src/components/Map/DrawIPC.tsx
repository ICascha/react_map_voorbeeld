import React from "react";
import IPCLegend from "./IPCLegend";
import Axios from "axios";
import DrawRegions from "./DrawRegions";

const colors = ["#CDFACD", "#FAE61E", "#E67800", "#C80000", "#640000"];
type Props = {
  setSelectedRegion: (regionList: string[]) => void;
  minDate: Date | null;
  maxDate: Date | null;
};

type meanIpcDataRow = {
  region: string;
  ipc: number;
};

type meanIpcData = meanIpcDataRow[];

const dateTostring = (date: Date) => date.toISOString().split("T")[0];

function DrawIPC({ setSelectedRegion, minDate, maxDate }: Props) {
  const [ipcData, setIpcData] = React.useState<meanIpcData>([]);

  React.useEffect(() => {
    if (minDate === null || maxDate === null) {
      setIpcData([]);
      return;
    }
    console.log(minDate.toISOString());
    Axios.get("http://localhost:3001/api/get_ipc_mean", {
      params: {
        minDate: dateTostring(minDate),
        maxDate: dateTostring(maxDate),
      },
    }).then((response) => {
      setIpcData(response.data);
    });
  }, [minDate, maxDate]);

  return (
    <>
      <DrawRegions
        data={ipcData.map((row) => ({
          region: row.region,
          ipc: row.ipc,
          color: colors[row.ipc - 1],
        }))}
        setSelectedRegion={setSelectedRegion}
      />
      <IPCLegend />
    </>
  );
}

export default DrawIPC;
