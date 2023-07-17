// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
import { BasicTooltip } from "@nivo/tooltip";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data1 = [
  {
    id: "conflict",
    data: [
      { x: "2021-01-01", y: 1 },
      { x: "2021-02-01", y: 2 },
      { x: "2021-03-01", y: 3 },
      { x: "2021-04-01", y: 4 },
    ],
  },
  {
    id: "economy",
    data: [
      { x: "2021-01-01", y: 2 },
      { x: "2021-02-01", y: 2 },
      { x: "2021-03-01", y: 4 },
      { x: "2021-04-01", y: 3 },
    ],
  },
];

const maxDate = (data) => {
  let max = new Date(data[0].data[0].x);
  console.log(max)
  data.forEach((d) => {
    d.data.forEach((d) => {
      if (new Date(d.x) > max) {
        max = new Date(d.x);
      }
    });
  });
  return max.toISOString().substring(0, 8) + "02";
};

const CalTooltip = (props) => {
  // const dayStr = props.date.toISOString().substring(0, 10);
  return (
    <BasicTooltip
      id={props.point.serieId}
      value={Math.round(props.point.data.y * 100) / 100}
      color={props.point.borderColor}
      enableChip
    />
  );
};

const MyResponsiveLine = ({ N, data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 100, left: 110 }}
    xScale={{
      type: "time",
      format: "%Y-%m-%d",
      precision: "day",
      min: "auto",
      max: maxDate(data),
    }}
    tooltip={CalTooltip}
    // yScale={{
    //   type: "linear",
    //   min: "auto",
    //   max: "auto",
    //   stacked: true,
    //   reverse: false,
    // }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -45,
      format: (d) => d.toISOString().substring(0, 10),
      legend: "Date",
      legendPosition: "middle",
      legendOffset: 65,
      tickValues: "every 1 year",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Number of articles",
      legendPosition: "middle",
      legendOffset: -40,
      tickValues: 10,
    }}
    pointSize={10}
    pointColor={"white"}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    colors={{ scheme: "category10" }}
    gridXValues={"every 1 year"}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveLine;
