import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';


export default function Foods() {

  return (
    <>
    <Card id='card' style={{ width: '20rem' }}>
      <Card.Img variant="top" height='280px' src={props.card.img} />
      <Card.Body>
        <Card.Title>{props.card.name}</Card.Title>
        <Card.Text>
          {props.card.price}
        </Card.Text>
        <Button variant="dark">Add To Card</Button>
      </Card.Body>
    </Card>
    </>
  )
}
