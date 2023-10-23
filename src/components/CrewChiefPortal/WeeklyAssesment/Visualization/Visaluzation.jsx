import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const Visualization = () => {
  const data = [
    {
      criteria: "Attendance",
      Devon: 60,
      Brandon: 80,
      Josiah: 90,
      Shane: 85,
      Kelly: 95,
    },
    {
      criteria: "Attitude",
      Devon: 80,
      Brandon: 75,
      Josiah: 95,
      Shane: 100,
      Kelly: 90,
    },
    {
      criteria: "Communication",
      Devon: 90,
      Brandon: 85,
      Josiah: 95,
      Shane: 70,
      Kelly: 65,
    },
    {
      criteria: "Academic and Professional Development",
      Devon: 75,
      Brandon: 65,
      Josiah: 85,
      Shane: 90,
      Kelly: 100,
    },
    {
      criteria: "Personal Development",
      Devon: 100,
      Brandon: 95,
      Josiah: 100,
      Shane: 90,
      Kelly: 85,
    },
  ];

  const customTheme = {
    axis: {
      legend: {
        text: {
          fontWeight: 'bold'
        }
      }
    }
  };

  return (
    <div style={{ height: "500px" }}>
      <ResponsiveBar
        data={data}
        keys={["Devon", "Brandon", "Josiah", "Shane", "Kelly"]}
        indexBy="criteria"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Week 09/04/23 - 09/08/23",
          legendPosition: "middle",
          legendOffset: 42
        }}
        theme={customTheme}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
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
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default Visualization;
