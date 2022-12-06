import { Container,} from 'react-bootstrap';
import{Link}  from'react-router-dom';


const MenuListComponent = () => {
 
 const onClickBtn = () => {
  localStorage.removeItem('auth')
  window.location.reload(true)
 }
  

    return (
    <div>
        <Container fluid className='menu  py-1'>
                <h6><Link to='/homepage' className='links'>Главная страница</Link></h6>
              <h6>
                <Link to='user-list' className='links'>Cards</Link>
              </h6>
              {/* <h6>
                <Link to='post' className='links'>Posts</Link>
              </h6> */}
              <h6>
                <Link to='todo' className='links'>To Do list</Link>
              </h6>
              <h6>
                <Link to='fetch' className='links'>Fetch</Link>
              </h6>
              <h6>
                <Link to='logoff'>
                  <button className='logoff ms-4' onClick={onClickBtn}>Logoff</button>
                  </Link>
              </h6>
              
          </Container>
      
    </div>

    )
       
    
}
export default MenuListComponent;