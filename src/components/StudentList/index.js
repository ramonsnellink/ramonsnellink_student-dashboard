import React, { useContext } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";

import ListItem from "./ListItem";

const StudentList = () => {
  const [students] = useContext(StudentsContext);
  const studentsList = [...new Set(students.map((x) => x.student))];
  console.log(studentsList);
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <ListItem />
      </ul>
    </div>
  );
};

export default StudentList;
