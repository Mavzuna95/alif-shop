import { Container} from 'react-bootstrap';
import {categories} from '../../mockData/data';

export default function  MainComponent() {
   
    return(
        <div className=''>
            <h1 className="my-4 mx-4">
            Популярные категории 
            </h1>
        <Container className="my-4 mx-4  category">
            
            {
            categories.map((category) =>{
                return (
                <div className=" mx-4 my-4 flex">
                <div  className="" key={category.id}>
                <img src={category.img} alt="" />
                  </div>
                <a href='#' className='linkbtn my-3'>
                    <h5>{category.name}</h5>
                </a>
                

               </div>

                    )})
                } 
                <button className='h-25 py-5 mt-3 border border-0 rounded-circle bg-warning' >
                   <a href='#link' className='linkbtn'><p> Каталог товаров</p></a>
                   </button> 
        </Container>   

        </div>
    )
            }
        
      
