import "./Card.css"

function Card({St_img, St_names, St_id, St_detail}){
    return (
        <div className="card">
            <img src={St_img} alt="student image" />
            <h2>{St_names}</h2>
            <h3>{St_id}</h3>
            <h4>{St_detail}</h4>
        </div>
    )
}

export default Card;