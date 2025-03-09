'use client'
import React, { useEffect } from 'react'
import HomeTopBar from './hometopbar'
import Hero from './heropart'
import Category from './category'
import NewArraivals from './newArraivals'
import FlashSale from './flashsale'
import Companyname from './companyname'
import Quality from './quality'
import Collection from './collection'
import TopRateProduct from './toprateproduct'
import FooterElements from './footerelements'
import Container from '../container/Container'
import axios from 'axios'

function Homepart () {

  useEffect(()=> {
     function getData () {
       axios.get('http://localhost:8000/api/v1/product/allflashsale').then((data)=>{
        console.log(data);
        
       })
    }
    getData()
  },[])

  return (
    <div>
      <Container>


        <HomeTopBar/>
        <Hero/>
        <Category/>
        <NewArraivals/>
        <FlashSale />
        {/* <FlashSale time={data.data[0]?.time}/> */}
        <Companyname/>
        <Quality/>
        <Collection/>
        {/* <TopRateProduct/> */}


      </Container>
      <FooterElements/>
    </div>
  )
}

export default Homepart
