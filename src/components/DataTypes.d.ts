type ControlProps2 = {
  center: LatLngTuple;
  zoom: number;
  drawIPC: boolean;
  drawMap: boolean;
  setSelectedRegion: (regionList: string[]) => void;
  startDate: Date | null;
  endDate: Date | null;
};

type ControlProps = {
  center: LatLngTuple;
  zoom: number;
};

type meanIpcDataRow = {
  region: string;
  ipc: number;
};

type meanIpcData = meanIpcDataRow[];

type meanDateIpcDataRow = {
  region: string;
  ipc: number;
};

type dataSet = {
  id: string;
  data: { x: any; y: any }[];
};

type meanDateIpcData = meanDateIpcDataRow[];

export default dataSet;
