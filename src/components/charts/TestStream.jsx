// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/stream
import { ResponsiveStream } from "@nivo/stream";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

// const data = [
//   {
//     "Raoul": 128,
//     "Josiane": 115,
//     "Marcel": 100,
//     "René": 72,
//     "Paul": 76,
//     "Jacques": 148
//   },
//   {
//     "Raoul": 191,
//     "Josiane": 147,
//     "Marcel": 128,
//     "René": 72,
//     "Paul": 172,
//     "Jacques": 103
//   },
//   {
//     "Raoul": 154,
//     "Josiane": 104,
//     "Marcel": 180,
//     "René": 27,
//     "Paul": 22,
//     "Jacques": 105
//   },
//   {
//     "Raoul": 56,
//     "Josiane": 99,
//     "Marcel": 87,
//     "René": 187,
//     "Paul": 89,
//     "Jacques": 89
//   },
//   {
//     "Raoul": 84,
//     "Josiane": 177,
//     "Marcel": 175,
//     "René": 49,
//     "Paul": 196,
//     "Jacques": 140
//   },
//   {
//     "Raoul": 92,
//     "Josiane": 42,
//     "Marcel": 172,
//     "René": 17,
//     "Paul": 181,
//     "Jacques": 146
//   },
//   {
//     "Raoul": 26,
//     "Josiane": 25,
//     "Marcel": 166,
//     "René": 121,
//     "Paul": 124,
//     "Jacques": 184
//   },
//   {
//     "Raoul": 80,
//     "Josiane": 198,
//     "Marcel": 85,
//     "René": 128,
//     "Paul": 154,
//     "Jacques": 195
//   },
//   {
//     "Raoul": 135,
//     "Josiane": 24,
//     "Marcel": 83,
//     "René": 162,
//     "Paul": 46,
//     "Jacques": 134
//   }
// ]

const TestStream = ({ N }) => {
  const k = 100;
  const data = [];

  for (let i = 0; i < N; i++) {
    data.push({
      conflict: Math.floor(Math.random() * k),
      economy: Math.floor(Math.random() * k),
      health: Math.floor(Math.random() * k),
    });
  }
  return (
    <ResponsiveStream
      data={data}
      keys={["conflict", "health", "economy"]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      xScale={{ format: "%Y-%m-%d", type: "time" }}
      xFormat="time:%Y-%m-%dT"
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Time",
        format: "%Y-%m-%d",
        legendOffset: 36,
        tickValues: "every 1 day",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
      }}
      enableGridX={true}
      enableGridY={false}
      offsetType="none"
      colors={{ scheme: "category10" }}
      fillOpacity={0.85}
      borderColor={{ theme: "background" }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
              },
            },
          ],
        },
      ]}
      motionConfig="stiff"
    />
  );
};

export default TestStream;
