import React from 'react'
import Cart from './Cart'
export default function CartMain(props) {


  return (
    <div id='cards'>
        {props.backendCart.map((card)=>
        <Cart {...props} card={card} key={card.id} />
        )}
        </div>
    
  )
}