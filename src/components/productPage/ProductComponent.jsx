// import { Link } from "react-router-dom";
import { Badge, Container } from "react-bootstrap";
import { cardList } from "../../mockData/data";

export default function ProductComponent() {
    return(
        <div>

            <h1 className="my-4 mx-4">
                Смартфоны 
            </h1>
    <Container className='phones '>  
            { 
            cardList.map((cards) => {
                return(
               <div className='mx-4 my-4'>                 
                <div  key={cards.id}>
                <div className='my-5'>
                <Badge bg="danger" className=''>Акция</Badge>
                </div>
                <img src={cards.img} alt="" id=''/>
                </div>
                <div>
                <h6>
                {cards.model}
                120 c.
                <Badge bg="warning" className='opacity-50 my-3'>
                x 24 мес</Badge>
                </h6>
                <a href='#link' className='linkcard my-3'>
                </a>
                <a href='#link' className='linkcard my-3'>
                <h6 className='opacity-75 my-3' >Цена:{cards.price}</h6>
                </a>
                </div>
                </div>
                    )
                })
                } 
                </Container>

        </div>
    )
}