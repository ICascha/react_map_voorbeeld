// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { BasicTooltip } from "@nivo/tooltip";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const BarTooltip = (props) => {
  const dayStr = props.data.date.toISOString().substring(0, 10);
  return (
    <BasicTooltip
      id={dayStr}
      value={props.value}
      color={props.color}
      enableChip
    />
  );
};

const TestBar = ({ N }) => {
  const k = 100;
  const data = [];
  const date = new Date(2022, 1, 1);
  for (let i = 0; i < N; i++) {
    date.setDate(date.getDate() + 1 * i);
    data.push({
      date: new Date(date),
      conflict: Math.floor(Math.random() * k),
      economy: Math.floor(Math.random() * k),
      health: Math.floor(Math.random() * k),
    });
  }

  console.log(data);

  return (
    <ResponsiveBar
      data={data}
      keys={["conflict", "health", "economy"]}
      indexBy="date"
      margin={{ top: 50, right: 130, bottom: 70, left: 60 }}
      padding={0}
      valueScale={{ type: "linear" }}
      //indexScale={{ type: "band", round: true }}
      colors={{ scheme: "category10" }}
      xScale={{ type: "time" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        format: (d) => d.toISOString().substring(0, 10),
        tickValues: 5,
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
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue;
      }}
      //tooltipLabel={(d, s) => s}
      tooltip={BarTooltip}
      enableLabel={false}
      onClick={(data, event) => console.log(data)}
    />
  );
};

export default TestBar;
