import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import card from './card.css';
export default function Cart(props) {
    const handClick=()=>{
        fetch(`http://localhost:3000/removeCart/${props.card.id}`,{
            method: 'DELETE',
           })
           
           .then(res => res.text())
           .then(data =>  props.setCart(false))
    }
  return (
    <>
    <Card id='card' style={{ width: '25rem' }}>
      <Card.Img variant="top" height='320px' src={props.card.img} />
      <Card.Body>
        <Card.Title>{props.card.name}</Card.Title>
        <Card.Text>
          {props.card.price}
        </Card.Text>
        <Button variant="dark" onClick={handClick} >Remove</Button>
      </Card.Body>
    </Card>
    </>
  )
}
