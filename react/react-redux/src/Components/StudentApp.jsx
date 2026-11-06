import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, deleteStudent } from "../redux/studentSlice";

function StudentApp() {
    // Step 1: Local State
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    // Step 2: Read Redux Store
    const students = useSelector(
        (state) => state.students.students
    );

    // Step 3: Dispatch Function
    const dispatch = useDispatch();

    // Step 4: Add Student Function
    const handleAddStudent = (e) => {
        e.preventDefault();

        if (!name.trim() || !age || Number(age) <= 0) {
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: name.trim(),
            age: Number(age)
        };

        dispatch(addStudent(newStudent));

        setName("");
        setAge("");
    };

    // Step 5: Delete Student Function
    const handleDeleteStudent = (id) => {
        dispatch(deleteStudent(id));
    };

    // Step 6: UI
    return (
        <div className="container">

            <h1>Student Management App</h1>
            <h3> Total Students: {students.length} </h3>

            {/* Add Student Form */}
            <form onSubmit={handleAddStudent}>
                <input type="text" placeholder="Enter student name"
                    value={name} onChange={(e) => setName(e.target.value)} />

                <input type="number" placeholder="Enter student age"
                    value={age} onChange={(e) => setAge(e.target.value)} />

                <button type="submit">Add Student</button>
            </form>

            {/* Student List */}
            <h2>Students List</h2>
            {students.length === 0 ? ( <p>No students found.</p> ) : (
                students.map((student) => (
                    <div className="student" key={student.id}>

                        <div>
                            <h3>{student.name}</h3>
                            <p>Age: {student.age}</p>
                        </div>

                        <button
                            onClick={() =>
                                handleDeleteStudent(student.id)
                            }
                        >
                            Delete
                        </button>

                    </div>
                ))
            )}

        </div>
    );
}

export default StudentApp;



