import React from 'react'
import Cardshow from './Card'
export default function Cards(props) {


  return (
    <div id='cards'>
        {props.backEnd.map((card)=>
        <Cardshow {...props} card={card} key={card.id} />
        )}
        </div>
    
  )
}
