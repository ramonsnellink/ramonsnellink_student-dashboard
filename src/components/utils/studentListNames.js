const studentListWithNames = (students) => {
  const individualStudents = [...new Set(students.map((student) => student.id))];

  const findStudent = (id) => {
    const student = students.find((student) => {
      return id === student.id;
    });
    return student;
  };

  const studentList = individualStudents.map((id) => {
    return { student: findStudent(id).student, id: id };
  });

  return studentList;
};

export default studentListWithNames;
