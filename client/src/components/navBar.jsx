
import React ,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import { BsCartCheck } from 'react-icons/bs';

function NavBar(props) {

 const handClick =()=> {
     fetch('http://localhost:3000/foods')
          .then(response => response.json())
          .then(data => {
            props.setBackend(data)
            props.setFood(true)
            console.log(data)
          });
  }
  const handClick1 =()=> {
    fetch('http://localhost:3000/drinks')
         .then(response => response.json())
         .then(data => {
           props.setBackend(data)
           props.setDrink(true)
           console.log(data)
         });
 }
 const handClick2 =()=> {
  fetch('http://localhost:3000/appetizers')
       .then(response => response.json())
       .then(data => {
         props.setBackend(data)
         props.setAppetizers(true)
         console.log(data)
       });
}
const handClick4 =()=> {
  fetch('http://localhost:3000/home')
       .then(response => response.json())
       .then(data => {
         props.setBackend(data)
         props.setFood(false)
         props.setDrink(false)
         props.setAppetizers(false)
         props.setCart(false)
         props.setAdress(false)
         console.log(data)
       });
}
const handClick5 =()=> {
  fetch('http://localhost:3000/cart')
       .then(response => response.json())
       .then(data => {
         props.setBackEndCart(data)
         props.setFood(false)
         props.setDrink(false)
         props.setAppetizers(false)
         props.setAdress(false)
         props.setCart(true)
         console.log(data)
       });
}
const handClick6=()=>{
  props.setAdress(true)
}
    return (
        <>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" onClick={handClick4}>Home</Nav.Link>
            
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={handClick}>Lunch</NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={handClick1} >Drink</NavDropdown.Item>
              <NavDropdown.Item href="#action5"onClick={handClick2}>Appertizes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" onClick={handClick5}>Cart</Nav.Link>
            <Nav.Link href="#action6" onClick={handClick6}>Add Delivery Address</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
      );
}

export default NavBar