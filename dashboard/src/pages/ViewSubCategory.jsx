import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ViewSubCategory = () => {

  let [catlist, setcatlist] = useState([]);

    useEffect(()=>{
        async function allcat(){
         let data = await axios.get("http://localhost:8000/api/v1/product/allsubcat");
 
         let catedata= []
 
         data.data.map((item)=>{
           catedata.push({
            key: item._id,
            subcategory: item.name,
            status: item.status,
            category: item.categoryId.name,
            
           });
         });
          setcatlist(catedata);
        }
        allcat();
       },[])

      const columns = [
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },

          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
          
        {
          title: 'subcategory',
          dataIndex: 'subcategory',
          key: 'subcategory',
        },

      ];
 

  return (
    <div>
        <Table dataSource={catlist} columns={columns} />
    </div>
  )
}

export default ViewSubCategory