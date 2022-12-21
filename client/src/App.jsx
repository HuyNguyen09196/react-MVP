import { useState,useEffect } from 'react'
import './App.css'
import NavBar from './components/navBar'
import Cards from './components/Cards'
import Head from './components/Head'
import CartMain from './components/CartMain'
import Address from './components/Address'

function App() {
  const [count, setCount] = useState(0)
  const [backendCart,setBackEndCart] =useState([])
  const [backEnd, setBackend] = useState([{}])
  const [food, setFood] =useState(false);
  const [drink, setDrink] =useState(false);
  const [cart, setCart] =useState(false);
  const [appertizes, setAppetizers] =useState(false);
  const [adress,setAdress]=useState(false)
  const appProps={
    adress,
    setAdress,
    backendCart,
    setBackEndCart,
    backEnd,
    setBackend,
    setFood,
    setDrink,
    setCart,
    setAppetizers
  }
   useEffect(()=>{
    const getInfo= async ()=>{
    await fetch('http://localhost:3000/home')
        .then(response => response.json())
        .then(data => {
          setBackend(data)
          console.log(data)
        });
      };
      getInfo();
 
},[]);
if ( food === true) {
  return (
    <><div>
    <NavBar {...appProps}/>
    <Cards {...appProps}/>
    </div></>
  )
} else if ( adress === true) {
  return (
    <><div>
    <NavBar {...appProps}/>
    <Address {...appProps}/>
    </div></>
  )
} else if ( drink === true) {
  return (
    <><div>
    <NavBar {...appProps}/>
    <Cards {...appProps}/>
    </div></>
  )
} else if (appertizes===true){
  return (
    <><div>
    <NavBar {...appProps}/>
    <Cards {...appProps}/>
    </div></>
  )
} else if (cart===true){
  return (
    <>
    <div>
    <NavBar {...appProps}/>
    <CartMain {...appProps}/>
    </div></>
  )
} else {
  return (
    <> 
    <div>
    <NavBar {...appProps}/>
    <Head/>
    <Cards {...appProps}/>
    
    </div>
    </>
  );
  
}
  
}

export default App
