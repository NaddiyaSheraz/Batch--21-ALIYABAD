// // 
// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to my website!</p>
//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";

function Home() {
  const students = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Usman" },
  ];

  return (
    <div>
      <h1>Students List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>

          <Link to={`/student/${student.id}`}>
            View Profile
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;