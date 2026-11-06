//// ....... Dynamic Routing with own Data .... ////
////// .... Dynamic routing with fetch data from APi ...... ////// 
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Student from "./Components/Student";
// import NotFound from "./Components/NotFound";

// function App (){
//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/Student/:id" element={<Student />} />
//         {/* //// 404 //// */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;

///////// ......Prop drilling,  ,context Api ...... //////
import UserProvider from "./UserContext";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Profile />
    </UserProvider>
  );
}

export default App;


