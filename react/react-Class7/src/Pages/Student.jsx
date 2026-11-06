import { useParams } from "react-router-dom";

function Student() {
  const { id } = useParams();

  const students = [
    { id: 1, name: "Ali", course: "React JS" },
    { id: 2, name: "Ahmed", course: "JavaScript" },
    { id: 3, name: "Usman", course: "HTML & CSS" },
  ];

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return <h1>Student Not Found!</h1>;
  }

  return (
    <div>
      <h1>Student Profile</h1>

      <h2>Name: {student.name}</h2>
      <h3>ID: {student.id}</h3>
      <h3>Course: {student.course}</h3>
    </div>
  );
}

export default Student;