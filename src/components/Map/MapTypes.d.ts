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
