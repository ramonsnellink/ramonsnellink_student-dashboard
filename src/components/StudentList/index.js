import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";

import ListItem from "./ListItem";

const StudentList = () => {
  const [students] = useContext(StudentsContext);

  // can I move these functions to another file to re-use?

  // remove duplicate entries of students
  const individualStudents = [...new Set(students.map((student) => student.id))];

  const findStudent = (id) => {
    const student = students.find((student) => {
      return id === student.id;
    });
    return student;
  };

  const studentListWithId = individualStudents.map((id) => {
    return { student: findStudent(id).student, id: id };
  });

  const StudentList = studentListWithId.map((student) => {
    return <ListItem key={student.id} name={student.student} />;
  });

  console.log("indiv students", studentListWithId);
  return (
    <div>
      <h1>Student List</h1>
      <ul>{StudentList}</ul>
    </div>
  );
};

export default StudentList;
