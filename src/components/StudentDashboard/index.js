import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";

import Chart from "../Chart";

// add students context to chart as prop here.

const StudentDashboard = () => {
  const [students] = useContext(StudentsContext);

  return (
    <div>
      <h1>Student Dashboard</h1>

      <Chart />
    </div>
  );
};

export default StudentDashboard;
