import { cardList } from "../../mockData/data";
import { Badge, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserList() {
    console.log(cardList);
    return(
        <Container className='phones '> 
            {
            cardList.map((card) =>{
                return (
                <div className=" mx-4 my-4 flex" key={card.id}>
                
                <div className='my-5'>
                <Badge bg="danger" className=''>Акция</Badge>
                </div>
                <img src={card.img} alt="" id=''/>
                <h6>
                {card.model}
                120 c.
                <Badge bg="warning" className='opacity-50 my-3'>
                x 24 мес</Badge>
                </h6>
                <p>
                <h6 className='opacity-75 my-3' >Цена:{card.price}</h6>
                </p>
                <Link to={`/user-list/${card.id}`}>
                    <button className="cardbtn px-5">Order</button>
                </Link>
                </div> 
                )})
            }
        </Container>
    )
}