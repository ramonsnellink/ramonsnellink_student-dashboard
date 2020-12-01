import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryGroup,
} from "victory";

import dashboardTheme from "./theme";

const Chart = ({ studentData }) => {
  const getAvgGrade = (assignment, type) => {
    // filter out the specific assignment, and check if we want the difficulty rating or enjoymentrating
    const getAssignments = studentData
      .filter((item) => item.assignment === assignment)
      .map((item) => (type === "difficulty" ? item.difficultyRating : item.enjoymentRating));

    const ratingTotal = getAssignments.reduce((total, grade) => total + grade, 0);

    return ratingTotal / getAssignments.length;
  };

  let assignmentRatingAverage = [
    ...new Set(
      studentData.map((student) => {
        return student.assignment;
      })
    ),
  ];

  assignmentRatingAverage = assignmentRatingAverage.map((avg) => ({
    assignment: avg,
    difficultyRating: getAvgGrade(avg, "difficulty"),
    enjoymentRating: getAvgGrade(avg, "enjoyment"),
  }));

  // Add label
  const assignmentRatingAverageWithLabels = assignmentRatingAverage.map((avg) => ({
    assignment: avg.assignment.split(" ")[0], // only display first word of assignment, to fix long names
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht ${avg.assignment}, difficultyRating: ${avg.difficultyRating.toFixed(
      1
    )}, enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`,
  }));

  return (
    <>
      <VictoryChart domainPadding={10} theme={dashboardTheme}>
        <VictoryGroup offset={4}>
          <VictoryBar
            // horizontal
            labelComponent={<VictoryTooltip />}
            data={assignmentRatingAverageWithLabels}
            barWidth={3}
            x="assignment"
            y="difficultyRating"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignmentRatingAverageWithLabels.map((avg) => avg.assignment)}
          />

          <VictoryBar
            // horizontal
            labelComponent={<VictoryTooltip />}
            data={assignmentRatingAverageWithLabels}
            barWidth={3}
            x="assignment"
            y="enjoymentRating"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={assignmentRatingAverageWithLabels.map((avg) => avg.assignment)}
          />
        </VictoryGroup>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis

          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map((avg) => avg.assignment)}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>

      <VictoryChart domainPadding={15} theme={dashboardTheme}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={assignmentRatingAverage}
          x="assignment"
          y="difficultyRating"
        />
        <VictoryLine
          style={{
            data: { stroke: "#ff00ff" },
            parent: { border: "1px solid #ccc" },
          }}
          data={assignmentRatingAverage}
          x="assignment"
          y="enjoymentRating"
        />
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map((avg) => avg.assignment)}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </>
  );
};
export default Chart;
