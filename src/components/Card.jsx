import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCart } from '../contexts/CartContext';



function Cards(props) {
    const context = useContext(useCart)

    const toAddCart = ()=>{
        context.setItems([...context.Items,{
            productImage : props.image,
            productTitle: props.title,
            productId:props.id,
            productPrice:props.price
        }])
        context.setcartCount(context.cartCount + 1)
        console.log(context.Items)

    }
  return (
    <Card style={{ width: '18rem' , height: '400px' , marginTop:'10px'}}  >
    <Card.Img variant="top" src={props.image}  style={{height:'200px'}}/>
    <Card.Body>
      <Card.Title className='line-clamp-3'>{props.title}</Card.Title>
      <Card.Text>
      </Card.Text>
      <div className='flex flex-wrap flex-col gap-2 items-start justify-between'>
      <Button variant="secondary" className='w-[100%]'>price : ${props.price}</Button>
      <button className='bg-yellow-500 w-[100%] text-white rounded-md p-2 text-[17px]' onClick={toAddCart}>Add To Cart </button>
      </div>
    </Card.Body>
  </Card>
  )
}

export default Cards