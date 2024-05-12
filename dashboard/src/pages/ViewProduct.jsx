import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ViewProduct = () => {

  let [catlist, setcatlist] = useState([]);

    useEffect(()=>{
        async function allcat(){
         let data = await axios.get("http://localhost:8000/api/v1/product/allpro");
 
         let catedata= []
 
         data.data.map((item)=>{
           catedata.push({
            key: item._id,
            name: item.name,
            image: item.image,
           });
         });
          setcatlist(catedata);
        }
        allcat();
       },[])

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (_, record) =>  <img width={50} src={`http://localhost:8000${record.image}`}/>,
        },
      ];
 

  return (
    <div>
        <Table dataSource={catlist} columns={columns} />
    </div>
  )
}

export default ViewProduct;