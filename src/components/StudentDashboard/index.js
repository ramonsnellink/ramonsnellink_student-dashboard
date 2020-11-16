import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";

import Chart from "../Chart";

const StudentDashboard = () => {
  const [students] = useContext(StudentsContext);
  console.log("this is the students from context", students);
  return (
    <div>
      <h1>Student Dashboard</h1>

      <Chart />
    </div>
  );
};

export default StudentDashboard;
