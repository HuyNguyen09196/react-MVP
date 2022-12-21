import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import card from './card.css';

function Cardshow(props) {
  const handClick=()=>{
  fetch(`http://localhost:3000/addCart`, {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
        name: props.card.name,
        price: props.card.price,
        img : props.card.img
    }),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
// Converting to JSON
.then(res => res.json())
// Displaying results to console
.then(data => {
   console.log(data)
})
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
        <Button variant="dark" onClick={handClick}>Add To Cart</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cardshow