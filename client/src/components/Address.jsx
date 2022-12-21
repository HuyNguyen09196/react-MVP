import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Address() {
//     const handleClick=()=>{
//         fetch(`http://localhost:3000/addCart`, {
//     // Adding method type
//     method: "POST",
//     // Adding body or contents to send
//     body: JSON.stringify({
//         first: props.card.name,
//         last: props.card.price,
//         street : props.card.img,
//         state :    ,
//         zipcode:   ,
//         phonenumber:
//     }),
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// // Converting to JSON
// .then(res => res.json())
// // Displaying results to console
// .then(data => {
//    console.log(data)
// })
//     }
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Street</Form.Label>
        <Form.Control type="text" placeholder="Enter Street" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="Enter State" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="number" placeholder="Enter Zipcode" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
