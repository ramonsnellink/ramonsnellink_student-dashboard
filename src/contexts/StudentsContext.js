import React, { useState, createContext } from "react";
import data from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

export const StudentsContext = createContext();

const test = data.map((student) => {
  const studentId = uuidv4();
  return { student: student.student, id: studentId };
});

const studentList = [
  ...new Set(
    data.map((student) => {
      return student.student;
    })
  ),
];

export const StudentsProvider = (props) => {
  const [students, setStudents] = useState(data); // Initial students state is coming from data.json
  console.log("Nieuw context", studentList);
  console.log(test);

  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentsContext.Provider>
  );
};
