const express=require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors())
const {Pool}=require('pg')
const PORT=3000;
const config=require('./config')[process.env.NODE_ENV||"dev"];
const pool = new Pool({
    connectionString: config.connectionString
})


app.get('/',(req,res)=>{
    res.status(200).send('Hello Wolrd')
})

app.get('/home',(req,res)=>{
    pool.query('SELECT * FROM items')
    .then(result=>{
        res.status(200).send(result.rows)
    })
})
app.get('/cart',(req,res)=>{
    pool.query('SELECT * FROM cart')
    .then(result=>{
        res.status(200).send(result.rows)
    })
})
app.get('/foods',(req,res)=>{
    pool.query('SELECT * FROM items WHERE menu_id=3')
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
})
app.get('/drinks',(req,res)=>{
    pool.query('SELECT * FROM items WHERE menu_id=2')
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
})
app.get('/appetizers',(req,res)=>{
    pool.query('SELECT * FROM items WHERE menu_id=1')
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=> console.error(e.stack))
})

app.post('/addCart',(req,res)=>{
    let cart=req.body;
    let name=cart.name;
    let price=cart.price;
    let img=cart.img;
    pool.query(`INSERT INTO cart (name,price,img) VALUES ('${name}','${price}','${img}') RETURNING *`)
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=>console.error(e.stack))
})
app.post('/address',(req,res)=>{
    let address=req.body;
    let first=address.first;
    let last=address.last;
    let street=address.street;
    let state=address.state;
    let zipcode=address.zipcode;
    let phonenumber=address.phonenumber;

    pool.query(`INSERT INTO address (firstName,lastName,street,state,zipcode,phoneNumber) VALUES ('${first}','${last}','${street}','${state}','${zipcode}','${phonenumber}') RETURNING *`)
    .then(result=>{
        res.status(200).send(result.rows)
    })
    .catch(e=>console.error(e.stack))
})
app.delete('/removeCart/:id',(req,res)=>{
    pool.query(`DELETE FROM cart WHERE id=${req.params.id} RETURNING *`)
    .then(result=>{
        if(result.rows.length!==0){
            res.status(200).send(result.rows[0])
        }else{
            res.status(404).send('No Found!')
        }
    })
    .catch(e=>console.error(e.stack))
})


app.listen(PORT,()=>{
    console.log(`Listen on port ${PORT}`)
})