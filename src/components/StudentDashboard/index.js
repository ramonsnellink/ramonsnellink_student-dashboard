import React, { useContext, useState } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";

import Chart from "../Chart";

// First: set both in the state to true
// in state bijhouden wat gechecked is.
// object meegeven als props
// conditional render in de chart van de bars

const StudentDashboard = () => {
  const [students, setStudents] = useContext(StudentsContext);

  const individualStudents = [...new Set(students.map((student) => student.id))];

  const findStudent = (id) => {
    const student = students.find((student) => {
      return id === student.id;
    });
    return student;
  };

  const studentListWithName = individualStudents.map((id) => {
    return { student: findStudent(id).student, id: id, checked: true };
  });

  const [studentsFilter, setStudentsFilter] = useState(studentListWithName);

  console.log("state", studentsFilter);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // console.log(event);
    // const newStudentsArray = students.filter((student) => {
    //   return name !== student.student;
    // });
    // console.log(newStudentsArray);
  };

  const studentList = studentListWithName.map((student) => {
    return (
      <label key={student.id}>
        <input type="checkbox" name={student.student} checked={students} onChange={handleChange} />
        {student.student}
      </label>
    );
  });

  console.log(studentListWithName);

  return (
    <div>
      <h1>Student Dashboard</h1>

      <Chart studentData={students} />
      {studentList}
    </div>
  );
};

export default StudentDashboard;
