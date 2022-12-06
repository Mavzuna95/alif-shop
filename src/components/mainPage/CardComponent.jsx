import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {categories} from '../../mockData/data'
export default function() {
    const users = useState(categories)
    const navigate = useNavigate();
    const {id} = useParams();
    const info = users.find(user => user.id === +id)
    const onBackPage = () => {
        navigate (-1)
    }
    return(
        <>
        <div className="cardpage">
          <p>{info.name}</p>
          <p>{info.lastName}</p>
          <button onClick={onBackPage}>Back to Past</button>
        </div>
        </>
    )
}