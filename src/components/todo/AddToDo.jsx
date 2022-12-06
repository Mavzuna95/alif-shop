import './todoCss/ToDo.css'
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import uuid from 'react-uuid'
import {  useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave,faTrash,faEdit,faLock,faLockOpen } from "@fortawesome/free-solid-svg-icons";

export default function AddToDo() {

    const local = JSON.parse(localStorage.getItem('list'))
    const[todo, setTodo] = useState(local ? local : [])
    
    const[addTodoList, setAddTodoList]= useState('')
    const[date, setDate] = useState('')
    const[newTitle, setNewTitle] = useState('')
    const[newDate, setNewDate] = useState('')
    const[edit, setEdit] = useState('')

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(todo))
    }, [todo]);

    const addBtnTodo = () => {
        if (addTodoList) {
        setTodo([...todo,{
            id:  uuid() ,
            title: addTodoList,
            dateFinish: date,
            sts: true
        } ]) 
        setAddTodoList('')
        setDate("")
    } else {
       alert('Заполните поля!')
    }
}
    const editTodo = (id, title) => {
         setEdit(id)
         setNewTitle(title)
             setDate("")
    } 
        const removeBtn = (id) => {
            const newTodo = [...todo].filter(list => list.id !== id)
            setTodo(newTodo)
        if (addTodoList) {
           return removeBtn === removeBtn
        } else {
        alert('Заметка удалился!')
            }
        }
    
    const stsTodo = (id) => {
        const newSts = [...todo].filter(list => {
            if (list.id === id) {
                list.sts = !list.sts
            }
            return list
        })
        setTodo(newSts);
    }
    const saveTodo = (list, newTitle, newDate) => {
        setTodo(
            todo.map(item => {
                if(item.id === list.id) {
                    return {...item, title: newTitle, dateFinish: newDate}
                }
                return item
            })
        )
        setEdit('')
    }
    
    return(
        <div className="todoPage">
            
            <Row>
                <Col className='todoInputAdd'>
                    <FormControl type="text" 
                        required= {true} placeholder="Задачи"
                        value={addTodoList} onChange={(e) => 
                        setAddTodoList(e.target.value)}/>

                    <FormControl type='date' 
                        className='date-todo border rounded-2' 
                        onChange={(e) => setDate(e.target.value)} />

                    <Button variant='primary' onClick={addBtnTodo} 
                        className='todoAddBtn'><small>Добавить</small></Button>
                </Col>
            </Row>
        {
        todo.map(list => {
            return(
                <div key={list.id} className='todolist'>
                    {
                    edit === list.id ?
                        <div>

                            <input defaultValue={list.title} 
                            className='flex flex-wrap px-1 border rounded-2'
                            onChange={(e) => setNewTitle(e.target.value)} />

                            <input className='w-25 mx-1 border rounded-2 px-1' type='date' 
                            defaultValue={list.dateFinish} 
                            onChange={(e) => setNewDate(e.target.value)}/> 

                        </div>
                            :  
                        <div>
                            <div className={ !list.sts ? "close" : ''}>
                            <ul>
                                <li>
                                    {list.title}
                                </li>
                            </ul>
                            </div>
                            <div className={ !list.sts ? "close" : ''}>{list.date}</div>
                        </div>
                        }
                    {
                    edit === list.id ? 
                        <div className=''>
                        <Button onClick={() => saveTodo(list, newTitle, newDate)}
                            className='mt-2 me-2 ' size='sm'>
                        <FontAwesomeIcon icon={faSave} /></Button>
                        </div>:
                        <div className="mx-3 todoItems">

                        <Button onClick={() => removeBtn(list.id)} 
                        className='mx-3 my-2 'size='sm'>
                        <FontAwesomeIcon icon={faTrash} /></Button>

                        <Button onClick={() => editTodo(list.id, list.title)}
                         className='me-3 'size='sm'>
                        <FontAwesomeIcon icon={faEdit}/></Button>

                        <Button onClick={() => stsTodo(list.id)} 
                        className='border-0'size='sm'>
                        {list.sts ? <FontAwesomeIcon icon={faLockOpen}/> :
                        <FontAwesomeIcon icon={faLock}/>}</Button>

                        <div className='todo-date'>
                                Finish Date: 
                                    <span>{list.dateFinish}</span>
                                </div>
                            </div>
                            }
                        </div>
                    ) 
                })
            }
        </div>
    )
}








