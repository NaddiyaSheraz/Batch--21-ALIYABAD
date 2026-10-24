import { useState } from "react";

function Button (){
      const [count, setCount] = useState(0);
       return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}


export default Button;