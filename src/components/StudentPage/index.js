import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";
import Chart from "../Chart";
import { Link } from "react-router-dom";
import backIcon from "./back.svg";

const StudentPage = ({ match }) => {
  const [students] = useContext(StudentsContext);

  const individualStudentData = students.filter((student) => student.student === match.params.name);
  const studentName = individualStudentData[0].student;

  return (
    <div className="flex flex-col items-center	">
      <h1 className="text-emerald-600 text-4xl p-10 pb-3">Student ratings for: {studentName}</h1>

      <Link className="flex hover:underline" to="/students">
        <img className="w-6 h-6" src={backIcon} alt="Back icon" />
        All students
      </Link>
      <Chart studentData={individualStudentData} />
    </div>
  );
};

export default StudentPage;
