// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveLine } from "@nivo/line";
import { BasicTooltip } from "@nivo/tooltip";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const CalTooltip = (props) => {
  console.log(props.point);
  // const dayStr = props.date.toISOString().substring(0, 10);
  return (
    <BasicTooltip
      id={props.point.serieId}
      value={props.point.data.y}
      color={props.point.borderColor}
      enableChip
    />
  );
};

const maxDate = (data) => {
  let max = new Date(data[0].data[0].x);
  data.forEach((d) => {
    d.data.forEach((d) => {
      if (new Date(d.x) > max) {
        max = new Date(d.x);
      }
    });
  });
  return max.toISOString().substring(0, 8) + "02";
};

const Line = ({ N }) => {
  // const k = 100;
  // const data = [];
  // const date = new Date(2022, 1, 1);
  // for (let i = 0; i < N; i++) {
  //   date.setDate(date.getDate() + 1 * i);
  //   data.push({
  //     date: new Date(date),
  //     conflict: Math.floor(Math.random() * k),
  //     economy: Math.floor(Math.random() * k),
  //     health: Math.floor(Math.random() * k),
  //   });
  // }

  const data = [
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

  console.log(data);

  return (
    <ResponsiveLine
      data={data}
      xScale={{
        type: "time",
        format: "%Y-%m-%d",
        precision: "day",
        min: "auto",
        max: maxDate(data),
      }}
      keys={["conflict", "health", "economy"]}
      indexBy="date"
      margin={{ top: 50, right: 130, bottom: 70, left: 100 }}
      // valueScale={{ type: "linear" }}
      //indexScale={{ type: "band", round: true }}
      colors={{ scheme: "category10" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
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
      // enablePointLabel={false}
      // pointLabelYOffset={-12}
      useMesh={true}
      tooltip={CalTooltip}
      gridXValues={"every 1 month"}
      // labelSkipWidth={12}
      // labelSkipHeight={12}
      // labelTextColor={{
      //   from: "color",
      //   modifiers: [["darker", 1.6]],
      // }}
      // legends={[
      //   {
      //     dataFrom: "keys",
      //     anchor: "bottom-right",
      //     direction: "column",
      //     justify: false,
      //     translateX: 120,
      //     translateY: 0,
      //     itemsSpacing: 2,
      //     itemWidth: 100,
      //     itemHeight: 20,
      //     itemDirection: "left-to-right",
      //     itemOpacity: 0.85,
      //     symbolSize: 20,
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemOpacity: 1,
      //         },
      //       },
      //     ],
      //   },
      // ]}
      //tooltipLabel={(d, s) => s}
      // tooltip={BarTooltip}
      // enableLabel={false}
      // onClick={(data, event) => console.log(data)}
    />
  );
};

export default Line;
