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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-emerald-600 text-4xl text-center p-10">Student List</h1>
      <ul className="grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 max-w-screen-xl">
        {studentList}
      </ul>
    </div>
  );
};

export default StudentList;
