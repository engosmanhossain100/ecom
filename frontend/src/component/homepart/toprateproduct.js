import React from 'react'
import Headviewall from '../headviewall/headviewall'
import HeadName from '../headname/headname'
import Images from 'next/image'
import { toprateproduct } from './categoryData'

async function getData() {
    let data = await fetch('http://localhost:8000/api/v1/product/allpro')
    .then((res)=>
    res.json()
    )
  
    return data;
  }

async function TopRateProduct() {

    let data = await getData();
    console.log(data);

  return (
    <div className='top-product'>
        <Headviewall>
            <HeadName>Top Rated Product</HeadName>
            <p className='prdct-view'>View All</p>
        </Headviewall>
        <div className='all-prdct'>
            {
                data.map((item, i)=>(

                    item.proType == "top" && 

                    <div className='prdct-item' key={i}>
                    <images src={`http://localhost:8000${item.image[1]}`} width={247} height={247} style={{borderRadius: "15px"}} alt='product-img'/>
                    <div className='product-text'>
                        <h4>{item.name}</h4>
                        <p>demo text</p>
                        <div className='star-sold'>
                            <Images src={item.img2} width={15} height={15} alt='star'/>
                            <span>4</span>
                        </div>
                        <div className='btn'>
                            <a href='/pages/cart'><button>Add to Cart</button></a>
                            <Images src='/love.png' width={24} height={24} style={{marginLeft: "30px"}} alt='love'/>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopRateProduct
