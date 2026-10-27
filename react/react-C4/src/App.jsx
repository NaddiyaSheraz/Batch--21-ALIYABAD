////////// ........ Form ........ /////////////
// import Form from "./components/Form"

// function App() {
//   return (
//     <>
//       <Form />
//     </>
//   )
// }

// export default App



//////////////// ........... Call Back ........... ///////////////////
/////////////// Example 1 ////////////////

// function Child({ sendMessage }) {
//   return (
//     <button onClick={() => sendMessage("Hello Parent!")}>
//       Send Message
//     </button>
//   );
// }

// function App() {
//   function receiveMessage(message) {
//     alert(message);
//   }

//   return <Child sendMessage={receiveMessage} />;
// }

// export default App;

//////////////// Example 2 /////////////////////


// import { useState } from "react";

// function Child({ sendMessage }) {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h3>Child Component</h3>

//       <input
//         value={name}
//         onChange={(event) =>
//           setName(event.target.value)
//         }
//         placeholder="Enter your name"
//       />

//       <button onClick={() => sendMessage(name)}>
//         Send Name to Parent
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [message, setMessage] = useState("");

//   function receiveMessage(name) {
//     setMessage(name);
//   }

//   return (
//     <div>
//       <h2>Parent Component</h2>

//       <Child sendMessage={receiveMessage} />

//       <h3>Message from Child: {message}</h3>
//     </div>
//   );
// }

// export default App;


///////////////// Example 3 ////////////////


// import { useState } from "react";

// function Child({ addToCart }) {
//   return (
//     <div>
//       <h3>Child Component - Products</h3>

//       <button onClick={() => addToCart("Laptop")}>
//         Add Laptop
//       </button>

//       <button onClick={() => addToCart("Phone")}>
//         Add Phone
//       </button>

//       <button onClick={() => addToCart("Headphones")}>
//         Add Headphones
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [cart, setCart] = useState([]);

//   function handleAddToCart(product) {
//     setCart((previousCart) => [
//       ...previousCart,
//       product
//     ]);
//   }

//   return (
//     <div>
//       <h2>Parent Component - Shopping Cart</h2>

//       <Child addToCart={handleAddToCart} />

//       <h3>My Cart</h3>

//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <ul>
//           {cart.map((product, index) => (
//             <li key={index}>{product}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;


///////////// .......... ContextApi .......... ////////////
////////////// Example 1 ///////////////
// import { createContext, useContext } from "react";

// const UserContext = createContext();

// function ContextApi() {
//   return (
//     <UserContext.Provider value="Ali">
//       <Dashboard />
//     </UserContext.Provider>
//   );
// }

// function Dashboard() {
//   return <Profile />;
// }

// function Profile() {
//   return <UserInfo />;
// }

// function UserInfo() {
//   const username = useContext(UserContext);

//   return <h2>Welcome, {username}</h2>;
// }

// export default ContextApi;



/////////////////// Example 2//////////////////////////////
// import { createContext, useContext } from "react";

// const UserContext = createContext(null);

// const loggedInUser = {
//   name: "Ali",
//   email: "ali@example.com",
//   role: "Admin"
// };

// function App() {
//   return (
//     <UserContext.Provider value={loggedInUser}>
//       <Navbar />
//       <Dashboard />
//     </UserContext.Provider>
//   );
// }

// function Navbar() {
//   const user = useContext(UserContext);

//   return (
//     <nav>
//       <h2>My Website</h2>
//       <p>Logged in: {user.name}</p>
//     </nav>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <Profile />
//     </div>
//   );
// }

// function Profile() {
//   const user = useContext(UserContext);

//   return (
//     <section>
//       <h2>User Profile</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Role: {user.role}</p>
//     </section>
//   );
// }

// export default App;



/////////////////// Example /3/////////////////////////////

// import { createContext, useContext } from "react";

// const UserContext = createContext(null);

// const loggedInUser = {
//   name: "Ali",
//   email: "ali@example.com",
//   role: "Admin"
// };

// function App() {
//   return (
//     <UserContext.Provider value={loggedInUser}>
//       <Navbar />
//       <Dashboard />
//     </UserContext.Provider>
//   );
// }

// function Navbar() {
//   const user = useContext(UserContext);

//   return (
//     <nav>
//       <h2>My Website</h2>
//       <p>Logged in: {user.name}</p>
//     </nav>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <Profile />
//     </div>
//   );
// }

// function Profile() {
//   const user = useContext(UserContext);

//   return (
//     <section>
//       <h2>User Profile</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Role: {user.role}</p>
//     </section>
//   );
// }

// export default App;



////////////////////// Example4 ///////////////////////

import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

function App() {
  const [username, setUsername] = useState("Ali");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return <Profile />;
}

function Profile() {
  const { username, setUsername } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {username}</h2>

      <button onClick={() => setUsername("Sara")}>
        Change Name
      </button>
    </div>
  );
}

export default App;