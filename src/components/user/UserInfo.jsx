import { useParams } from "react-router-dom";
import { cardList } from "../../mockData/data";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    const info = cardList.find(card => card.id === +id)
    console.log(info);
    const onBackPage = () => {
        navigate (-1)
    }
    return(
      
        <div className="mx-5">
        <div className="cardpage">
            <h1 className="text-center">Cards</h1>
          <p className="mx-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                sLaudantium tenetur quidem amet fugiat vero nam,exercitationem
                quas, dolorum laboriosam corrupti soluta a odit animi nesciunt
                modi iusto praesentium odio itaque laborum sint doloremque.
                Possimus sequi eligendi, facilis porro quidem adipisci minima,
                molestias eaque eum impedit sint soluta repellendus dolore ut.</p>
          </div>
           <button onClick={onBackPage} className='cardbtn px-4 mx-5'>Back to Past</button>
        
        </div>
    )
}