/////// ..... UseRef ...... ////////
//////////////Syntax
// import { useRef } from "react";

// function App() {
//   const myRef = useRef(initialValue);

//   return <h1>Hello</h1>;
// }

// export default App;


////////// ...... Example 1..... ////////
////////// innput fieldd
// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} placeholder="Apna naam likho" />

//       <button onClick={handleClick}>
//         Focus Input
//       </button>
//     </>
//   );
// }

// export default App;

/////// ......... Example 2 ..... //////
///////// focus field without /
// import { useRef, useEffect } from "react";

// function App() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <>
//       <input ref={inputRef} placeholder="Write Name " />
//     </>
//   );
// }

// export default App;


/////// ..... Example 3 ..... ///////

// import { useRef } from "react";

// function App() {
//   const countRef = useRef(0);

//   function handleClick() {
//     countRef.current = countRef.current + 1;
//     console.log(countRef.current);
//   }

//   return (
//     <button onClick={handleClick}>
//       submit Button 
//     </button>
//   );
// }

// export default App;


/////////// video play ///////////




// /////////// ...... Use Reducer Syntax ....... /////////
// import { useReducer } from "react";

// function reducer(state, action) {
//   // State update logic
//   return state;
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return <h1>{state}</h1>;
// }
// export default App;

// //////// ....... Short formula: 
// useReducer(reducer, initialState)




//////// ..... UseReducer .... /////////
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default App;