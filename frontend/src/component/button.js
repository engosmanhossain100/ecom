"use client"
import React from 'react'

const Button = ({item}) => {

    let handleClick = (id) => {
        
                // POST request using fetch()
            fetch(`http://localhost:8000/api/v1/product/cart`, {
            
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify({
                productId: id,
                userId: "663d4439e5d7b55ee0908b5d",
            quantity: quantity ? quantity : 1
            }),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        
    }

  return (
    <div>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
  )
}

export default Button