import React from 'react'
import Images from 'next/image'
import { commentdata } from './productdata'

async function getData() {
    let data = await fetch('http://localhost:8000/api/v1/product/review/66e5ce230436620b08e0b0bd')
    .then((res)=>
    res.json()
    )
  
    return data;
  }


async function Reviewpart({data}) {

    let datas = await getData()
    
    console.log(datas, "hlw ami data");
    

  return (
    <div className='review-part'>
        <div className='review-tag'>
            {/* <p>({datas.data.length})Review</p> */}
            <p>Description</p>
            <p>Discusion</p>
            <p>Gift Cards</p>
        </div>
        <div className='comment-list' >
            {/* {
                datas?.data.map((item, i)=>(
                    <div className='tag-comment' key={i}>
                        <div className='cmnt-element'>
                            <div className='cmnt-img-rate'>
                                <div className='img'>
                                    <Images src={item.img} width={56} height={56} alt='comment-img'/>
                                </div>
                                <div className='review-text'>
                                    <h4>{item.name}</h4>
                                    <div className='rating'>
                                        <p>{item.rating}</p>
                                        <Images src={item.cmntrateimg} width={100} height={20} alt='review'/>
                                        <p className='rate-timing'>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <p className='cmnt'>
                                {item.message} 
                            </p>
                    </div>
                ))
            } */}
        </div>

    </div>
  )
}

export default Reviewpart
