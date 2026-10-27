
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>Name: </label>
      <input
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
      />

      <br /><br />

      <label>Email: </label>
      <input
        value={email}
        onChange={(event) =>
          setEmail(event.target.value)
        }
      />

      <br /><br />

      <label>Age: </label>
      <input
        value={age}
        onChange={(event) =>
          setAge(event.target.value)
        }
      />

      <br /><br />

      <label>Gender: </label>

      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={(event) =>
          setGender(event.target.value)
        }
      />
      Male

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onChange={(event) =>
          setGender(event.target.value)
        }
      />
      Female

      <h3>Your Details:</h3>
      <p>Your name is: {name}</p>
      <p>Your email is: {email}</p>
      <p>Your age is: {age}</p>
      <p>Your gender is: {gender}</p>
    </div>
  );
}

export default Form;
