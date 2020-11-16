import React, { useState, createContext } from "react";
import studentsWithIds from "../data/studentsWithIds";

export const StudentsContext = createContext();

export const StudentsProvider = (props) => {
  const [students, setStudents] = useState(studentsWithIds); // Initial students state is coming from data.json

  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentsContext.Provider>
  );
};
