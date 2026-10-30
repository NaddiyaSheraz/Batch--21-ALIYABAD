

////////////////use Effect /////////////////
///////  Syntax  ///////
// useEffect(() => {
//   // Side effect logic

//   return () => {
//     // Cleanup logic
//   };
// }, [dependencies]);


////////// ..... Example1 ..... /////////
/////blank array useeffect
// import { useEffect } from 'react';

// function App() {
//   useEffect(() => {
//     console.log("Component loaded");
//   }, []);

//   return <h1>Hello Students!</h1>;
// }
// export default App;


/////////// ..... Example2 ..... //////
/////omit example useEffect
// import { useEffect } from 'react';

// function App() {
//   useEffect(() => {
//     alert("Welcome to React class!");
//   });
//   return <h1>Welcome Students</h1>;
// }
// export default App;


////////// ...... Example 3 ..... ////////

// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changed");
//   }, [count]);

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button>
//     </>
//   );
// }

// export default App;

////////// ...... Example 4 ....... /////////
// import { useState, useEffect } from "react";

// function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Count changed");
  // }, [count]);

  // return (
  //   <>
  //     <button onClick={() => setCount(count + 1)}>
  //       Count: {count}
  //     </button>
  //     <h1> Naddiya22</h1>
  //   </>
  // );

// export default App;


//////// ........ Example5 ....... ///////
// import { useState, useEffect } from "react";

// function App() {
//   useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Hello");
//   }, 1000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);
// return <h1>hello Naddiya</h1>
// }

// export default App;

/////////............... Cleanup timer .......... //////////////
//////////// Example 1 ////////////
// import { useState, useEffect } from "react";

// function App() {
//   const [running, setRunning] = useState(true);

//   useEffect(() => {
//     if (!running) return;

//     const timer = setInterval(() => {
//       console.log("Hello");
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [running]);

//   return (
//     <button onClick={() => setRunning(false)}>
//       Stop Timer
//     </button>
//   );
// }

// export default App;


/////////// Example2 ///////////
//// Chatgpt

// import { useState, useEffect } from "react";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     console.log("Component mounted");

//     return () => {
//       console.log("Cleanup called");
//     };
//   }, []);

//   return (
//     <div>
//       <input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Message likho"
//       />

//       <button onClick={() => console.log(message)}>
//         Send
//       </button>
//     </div>
//   );
// }

// export default App;



