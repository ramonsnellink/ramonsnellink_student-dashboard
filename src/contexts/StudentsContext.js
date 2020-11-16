import React, { useState, createContext } from "react";
import data from "../data/data.json";

export const StudentsContext = createContext();

export const StudentsProvider = (props) => {
  const [students, setStudents] = useState(data); // Initial students state is coming from data.json

  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentsContext.Provider>
  );
};
