import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";

import ListItem from "./ListItem";

const StudentList = () => {
  const [students] = useContext(StudentsContext);

  //remove duplicate entries of students
  const individualStudents = [...new Set(students.map((student) => student.id))];

  const findStudent = (id) => {
    // move this to re-usable function in another file
    const student = students.find((student) => {
      return id === student.id;
    });
    return student;
  };

  const studentListWithId = individualStudents.map((id) => {
    return { student: findStudent(id).student, id: id };
  });

  const List = studentListWithId.map((student) => {
    return <ListItem />; // add props here.
  });

  console.log("indiv students", studentListWithId);
  return (
    <div>
      <h1>Student List</h1>
      <ul></ul>
    </div>
  );
};

export default StudentList;
