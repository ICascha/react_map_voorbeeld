import { LatLngTuple } from "leaflet";
import { useMap } from "react-leaflet";

function ChangeView({ center, zoom }: ControlProps) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default ChangeView;
