import '../todo/todoCss/ToDo.css'
import AddToDo from "./AddToDo";

import { Container } from 'react-bootstrap';


export default function TodoPage() {
    
    return(
        <Container className="inputs-todo ">
        <h1 className=" text-white text-center py-2 h1-todo">To Do List</h1>
        <AddToDo />    
        </Container>
    )
    }
