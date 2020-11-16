import data from "./data.json";
import { v4 as uuidv4 } from "uuid";

// In this file I'm using UUID to add id's to individual students

// Make a list of individidual students
const studentList = [
  ...new Set(
    data.map((student) => {
      return student.student;
    })
  ),
];

// Add an ID to individual students
const studentListWithId = studentList.map((studentName) => {
  return { student: studentName, id: uuidv4() };
});

// Function to find an individual student and return the their ID
const findStudentsId = (name) => {
  const studentWithId = studentListWithId.find((student) => {
    return name === student.student;
  });
  return studentWithId.id;
};

// Use the findStudentsId function to find the correct student based on their name
const studentsWithIds = data.map((student) => {
  return { ...student, id: findStudentsId(student.student) };
});

export default studentsWithIds;
