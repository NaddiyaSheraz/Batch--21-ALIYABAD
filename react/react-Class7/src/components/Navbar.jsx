// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>

//       <Link to="/about">About</Link>
//     </nav>
//   );
// }

// export default Navbar;

import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div>Logo</div>

      <div>
        {/* <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a> */}

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black"
          })}
        >Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/contact">Contact</Link>

      </div>

      <div>
        <button>SignUp</button>
      </div>
    </nav>
  )
}

export default Navbar;