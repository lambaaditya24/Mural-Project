import React from "react";
import { ResponsiveLine } from "@nivo/line";



const WeeklyVisualization = () => {
  const [rows, setRows] = React.useState([
    { week: "October Week 4", score: 95 },
    { week: "October Week 3", score: 86 },
    { week: "October Week 2", score: 95 },
    { week: "October Week 1", score: 89 },
    { week: "September Week 4", score: 81 },
    { week: "September Week 3", score: 82 },
  ]);

  const nivoData = [
    {
      id: "scores",
      color: "hsl(252, 70%, 50%)",
      data: rows.map((row) => ({
        x: row.week,
        y: row.score,
      })),
    },
  ];

  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={nivoData}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'serieColor' }}
        pointBorderWidth={2}
        pointLabelYOffset={-12}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Week",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Score",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "nivo" }}
        pointSize={10}
        // pointColor={{ theme: "background" }}
        // pointBorderWidth={2}
        // pointBorderColor={{ from: "serieColor" }}
        // pointLabelYOffset={-12}
        useMesh={true}
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
    </div>
  );
};

export default WeeklyVisualization;
