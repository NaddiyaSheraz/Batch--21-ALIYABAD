// import "./Card.css";
// import manFace from "../assets/manFace.avif";

// function Card() {
//     return (
//         <div className="card">
//             <img
//             style={{objectFit: "cover"}}
//                 src={manFace}
//                 alt="Workspace"
//             />

//             <div className="card-content">
//                 <h2>Ali Hamdan</h2>
//                 <h4>ABC</h4>
//                 <p>
//                     Learn React and build modern websites
//                     with reusable components.
//                 </p>
//                 <button>Learn More</button>
//             </div>
//         </div>
//     )
// }

// export default Card;


//////////Props
// import "./Card.css";
// import manFace from "../assets/manFace.avif"

// function Card(props) {
//     return (
//         <div className="card">
//             <img
//                 style={{ objectFit: 'cover', width:'100%'}}
//                 src={manFace}
//                 alt="student"
//             />
//             <div className="card-content">
//                 <h2>{props.Stnames}</h2>
//                 <h4>{props.StFnames}</h4>
//                 <p>{props.description}</p>
//             </div>
//         </div>
//     )
// }

// export default Card;


// /////////////props with destructing
// import "./Card.css";
// import manFace from "../assets/manFace.avif"

// function Card({Stnames, StFnames, description}) {
//     return (
//         <div className="card">
//             <img
//                 style={{ objectFit: 'cover', width:'100%'}}
//                 src={manFace}
//                 alt="student"
//             />
//             <div className="card-content">
//                 <h2>{Stnames}</h2>
//                 <h4>{StFnames}</h4>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

//////////// Fragment

import "./Card.css";
import manFace from "../assets/manFace.avif"

function Card({Stnames, StFnames, description}) {
    return (
        <div className="card">
            <img
                style={{ objectFit: 'cover', width:'100%'}}
                src={manFace}
                alt="student"
            />
            <div className="card-content">
                <h2>{Stnames}</h2>
                <h4>{StFnames}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;