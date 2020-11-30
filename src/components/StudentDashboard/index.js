import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";

import Chart from "../Chart";

// add students context to chart as prop here.
// Make a function to calculate avarage per student and make a new state?

const StudentDashboard = () => {
  const [students] = useContext(StudentsContext);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <Chart studentData={students} />
    </div>
  );
};

export default StudentDashboard;
