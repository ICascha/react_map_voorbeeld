const IPCLegend = () => (
  <div
    style={{
      position: "absolute",
      top: "0px",
      right: "0px",
      zIndex: 1000,
      fillOpacity: 0,
    }}
  >
    <div
      style={{
        display: "inline-block",
        width: "100%",
        textAlign: "center",
        color: "black",
        backgroundColor: "#CDFACD",
        margin: 0,
      }}
    >
      1
    </div>
    <div
      style={{
        display: "inline-block",
        width: "100%",
        textAlign: "center",
        color: "black",
        backgroundColor: "#FAE61E",
        margin: 0,
      }}
    >
      2
    </div>
    <div
      style={{
        display: "inline-block",
        width: "100%",
        textAlign: "center",
        color: "black",
        backgroundColor: "#E67800",
        margin: 0,
      }}
    >
      3
    </div>
    <div
      style={{
        display: "inline-block",
        width: "100%",
        textAlign: "center",
        color: "black",
        backgroundColor: "#C80000",
        margin: 0,
      }}
    >
      <div style={{ color: "white" }}>4</div>
    </div>
    <div
      style={{
        display: "inline-block",
        width: "100%",
        textAlign: "center",
        color: "black",
        backgroundColor: "#640000",
        margin: 0,
      }}
    >
      <div style={{ color: "white" }}>5</div>
    </div>
  </div>
);

export default IPCLegend;
