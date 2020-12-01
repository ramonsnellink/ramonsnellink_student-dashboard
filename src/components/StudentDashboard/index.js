import React, { useContext, useState } from "react";
import { StudentsContext } from "../../contexts/StudentsContext";
import studentListWithNames from "../utils/studentListNames";

import Chart from "../Chart";

const StudentDashboard = () => {
  const [students] = useContext(StudentsContext);

  // Get individual students based on the students array. Then add a "checked" property
  const studentListWithFilter = studentListWithNames(students).map((student) => {
    return { ...student, checked: true };
  });

  const [filters, setFilters] = useState(studentListWithFilter); // state to hold the filters (checkboxes). This is used to filter the students data.

  // get assignments for an individual student
  const filterStudent = (studentName) => {
    const student = students.filter((student) => {
      return student.student === studentName;
    });
    return student;
  };

  // filter the students data based on the active filters (in state). This is then used to render the chart
  const filteredStudents = filters.reduce((newStudentList, filter) => {
    if (filter.checked === true) {
      const individualStudentRatings = filterStudent(filter.student);
      const newArray = [...newStudentList, ...individualStudentRatings];
      return newArray;
    } else {
      return newStudentList;
    }
  }, []);

  const handleChange = (event) => {
    const { name } = event.target;
    // Handle the checkbox changing from true to false
    setFilters((prevState) => {
      const updatedFilters = prevState.map((filter) => {
        if (filter.student === name) {
          return {
            ...filter,
            checked: !filter.checked,
          };
        }
        return filter;
      });
      return updatedFilters;
    });
  };

  const checkboxes = filters.map((filter) => {
    return (
      <label key={filter.id}>
        <input
          type="checkbox"
          name={filter.student}
          checked={filter.checked}
          onChange={handleChange}
        />
        {filter.student}
      </label>
    );
  });

  return (
    <div>
      <h1>Student Dashboard</h1>
      <span>Filter students: </span>
      {checkboxes}

      {filteredStudents.length === 0 ? (
        <h2>Please select a student</h2>
      ) : (
        <Chart studentData={filteredStudents} />
      )}
    </div>
  );
};

export default StudentDashboard;
