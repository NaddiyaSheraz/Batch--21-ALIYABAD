//// ....... Dynamic Routing with own Data .... ////
// import { useParams } from "react-router-dom";

// const students = [
//   {
//     id: 1,
//     name: "Ali",
//     age: 20,
//     course: "React"
//   },
//   {
//     id: 2,
//     name: "Ahmed",
//     age: 22,
//     course: "JavaScript"
//   },
//   {
//     id: 3,
//     name: "Sara",
//     age: 19,
//     course: "HTML"
//   },
//   {
//     id: 4,
//     name: "Usman",
//     age: 21,
//     course: "CSS"
//   },
//   {
//     id: 5,
//     name: "Ayesha",
//     age: 20,
//     course: "React"
//   },
//   {
//     id: 6,
//     name: "Hamza",
//     age: 23,
//     course: "Node.js"
//   },
//   {
//     id: 7,
//     name: "Fatima",
//     age: 19,
//     course: "JavaScript"
//   },
//   {
//     id: 8,
//     name: "Bilal",
//     age: 24,
//     course: "Python"
//   },
//   {
//     id: 9,
//     name: "Hassan",
//     age: 21,
//     course: "React"
//   },
//   {
//     id: 10,
//     name: "Zainab",
//     age: 22,
//     course: "HTML"
//   },
//   {
//     id: 11,
//     name: "Usama",
//     age: 20,
//     course: "CSS"
//   },
//   {
//     id: 12,
//     name: "Hira",
//     age: 23,
//     course: "Python"
//   },
//   {
//     id: 13,
//     name: "Daniyal",
//     age: 21,
//     course: "Node.js"
//   },
//   {
//     id: 14,
//     name: "Maham",
//     age: 19,
//     course: "React"
//   },
//   {
//     id: 15,
//     name: "Saad",
//     age: 22,
//     course: "JavaScript"
//   }
// ];

// function Student() {
//   const { id } = useParams();
//   const student = students.find(
//     (s) => s.id === Number(id)
//   );

//   if (!student) {
//     return <h1>Student Not Found</h1>;
//   }
//   return (
//     <div>
//       <h1>Student Details</h1>

//       <p>ID: {student.id}</p>
//       <p>Name: {student.name}</p>
//       <p>Age: {student.age}</p>
//       <p>Course: {student.course}</p>
//     </div>
//   );
// }

// export default Student;



////// .... Dynamic routing with fetch data from APi ...... ////// 
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Student() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setStudent(data);
//       });

//   }, [id]);

//   if (!student) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div>
//       <h1>Student Details</h1>

//       <p>ID: {student.id}</p>
//       <p>Name: {student.name}</p>
//       <p>Email: {student.email}</p>
//       <p>Phone: {student.phone}</p>
//     </div>
//   );
// }

// export default Student;

