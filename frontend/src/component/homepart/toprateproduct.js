'use client'
import React, { useEffect } from 'react'
import Headviewall from '../headviewall/headviewall'
import HeadName from '../headname/headname'
import { toprateproduct } from './categoryData'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../button'
import axios from 'axios'

async function getData() {

    let data = await fetch('http://localhost:8000/api/v1/product/allpro')
    .then((res)=>
    res.json()
    )
  
    return data;
    
  }
 async function Toprateproduct () {
  
    // useEffect(()=> {
    //     async function getData () {
    //       axios.get('http://localhost:8000/api/v1/product/allpro').then((data)=>{
    //          console.log(data);
    //       })
    //    }
    //    getData()
    //  },[])

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

                    <img  src={`http://localhost:8000${item.image[0]}`} width={247} height={247} style={{borderRadius: "15px"}} alt='product-img'/>
                    
                    <div className='product-text'>
                       
                        <h4><Link href={`/pages/product/${item.slug}`}>{item.name}</Link></h4>
                        <p>demo text</p>
                        <div className='star-sold'>
                            {/* <img  src={item.img2} width={15} height={15} alt='star'/> */}
                            <span>
                                {item.discount ? 
                                    <>
                                        <del style={{color:"red"}}>{item.regularprice}</del> {item.regularprice - item.discount}
                                    </>
                                 : item.regularprice}
                            </span>
                        </div>

                        <div className='btn'>
                            <Button item={item._id} />
                            <img  src='/love.png' width={24} height={24} style={{marginLeft: "30px"}} alt='love'/>
                        </div>

                    </div>
                </div>
                ))
            }
        </div>
        
    </div>

  )
}


export default Toprateproduct