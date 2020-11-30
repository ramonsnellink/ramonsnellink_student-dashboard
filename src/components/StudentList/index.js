import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";

import ListItem from "./ListItem";

const StudentList = () => {
  const [students] = useContext(StudentsContext);

  // can I move these functions to another file to re-use?

  const individualStudents = [...new Set(students.map((student) => student.id))];

  const findStudent = (id) => {
    const student = students.find((student) => {
      return id === student.id;
    });
    return student;
  };

  const studentListWithName = individualStudents.map((id) => {
    return { student: findStudent(id).student, id: id };
  });

  const StudentList = studentListWithName.map((student) => {
    return <ListItem key={student.id} name={student.student} />;
  });

  console.log("indiv students", studentListWithName);
  return (
    <div>
      <h1>Student List</h1>
      <ul>{StudentList}</ul>
    </div>
  );
};

export default StudentList;
