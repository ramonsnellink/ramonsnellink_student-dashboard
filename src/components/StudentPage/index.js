import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";
import Chart from "../Chart";

const StudentPage = ({ match }) => {
  const [students] = useContext(StudentsContext);

  const individualStudentData = students.filter((student) => student.student === match.params.name);
  const studentName = individualStudentData[0].student;

  console.log("get students data", individualStudentData);
  return (
    <div>
      <h1>{studentName}</h1>
      <Chart studentData={individualStudentData} />
    </div>
  );
};

export default StudentPage;
