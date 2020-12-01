import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";
import studentListWithNames from "../utils/studentListNames"; // this function creates an array of individual students

import ListItem from "./ListItem";

const StudentList = () => {
  const [students] = useContext(StudentsContext);
  const studentList = studentListWithNames(students).map((student) => {
    return <ListItem key={student.id} name={student.student} />;
  });

  return (
    <div>
      <h1>Student List</h1>
      <ul>{studentList}</ul>
    </div>
  );
};

export default StudentList;
