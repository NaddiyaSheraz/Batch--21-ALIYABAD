import female from "../assets/f1.avif";
import male from "../assets/m1.avif"
import Card from "./Card.jsx"

const stDetail = [
    { St_img: female, St_names: 'Fatima', St_id: 12345, St_detail: 'hello every one' },
    { St_img: female, St_names: "Fatima", St_id: 12345, St_detail: "hello every one" },
    { St_img: male, St_names: "Ali", St_id: 12346, St_detail: "I am a student" },
    { St_img: female, St_names: "Ayesha", St_id: 12347, St_detail: "I love learning React" },
    { St_img: male, St_names: "Ahmed", St_id: 12348, St_detail: "I am learning JavaScript" },
    { St_img: female, St_names: "Zainab", St_id: 12349, St_detail: "I enjoy coding" }
]

function StCards() {
    return (
        <div style={{backgroundColor:"aqua", padding:'10px', display:'flex', flexWrap:'wrap'}}>
            {stDetail.map((studentCard) => (
                <Card
                    key={studentCard.St_id}
                    St_img={studentCard.St_img}
                    St_names={studentCard.St_names}
                    St_id={studentCard.St_id}
                    St_detail={studentCard.St_detail}
                />
            ))

            }
        </div>
    );

}

export default StCards;