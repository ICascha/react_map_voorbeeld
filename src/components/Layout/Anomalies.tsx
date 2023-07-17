import Axios from "axios";

const Anomalies = () => {
  Axios.get("http://localhost:3001/api/get_ipc_mean", {
    params: {
      minDate: "2019-01-01",
      maxDate: "2020-01-01",
    },
  }).then((response) => {});

  return <div>Not yet implemented.</div>;
};

export default Anomalies;
