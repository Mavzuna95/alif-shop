import { Navbar, Container, Dropdown, Nav, Form,NavDropdown} from 'react-bootstrap';

export default function HeaderComponent(){

    return(
    <>

  <Navbar>
        <Container fluid className='my-3 mx-3'>
          <Navbar.Brand href="#home">
                <img src="./img/alif.png" alt="logo" width={150} />
          </Navbar.Brand>
          <Nav className="me-auto">
        <button className='border rounded-3 bg-warning mx-4' >
          <NavDropdown className='text-white'  title="Каталог" >
              <Dropdown.Item  href="#/action-1">
                <h6 className='dropdown-alif'>Салом</h6>
                </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <h6 className='dropdown-alif'>Покупка авто</h6>
                </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
              <h6 className='dropdown-alif'>Онлайн Алиф</h6>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
              <h6 className='dropdown-alif'>Депозиты</h6>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
              <h6 className='dropdown-alif'>Академия</h6>
              </Dropdown.Item>
              <Dropdown.Item  href="#/action-3">
              <h6 className='dropdown-alif'>Вакансии</h6>
              </Dropdown.Item>
              <Dropdown.Item className='dropdown-alif' href="#/action-3">
              <h6 className='dropdown-alif'>alif pay</h6>
              </Dropdown.Item>
              </NavDropdown> 
              </button>
          <Form.Group className="inputSearch py-0">
        <Form.Control placeholder="Название товара" />
        </Form.Group>

        <button className='border rounded-1 bg-warning text-white py-0 px-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </button>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}