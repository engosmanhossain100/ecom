import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ViewCategory = () => {

  let [catlist, setcatlist] = useState([]);

    useEffect(()=>{
        async function allcat(){
         let data = await axios.get("http://localhost:8000/api/v1/product/allcat");
 
         let catedata= []
 
         data.data.map((item)=>{
           catedata.push({
            key: item._id,
            name: item.name,
            status: item.status,
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
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        // {
        //   title: 'Address',
        //   dataIndex: 'address',
        //   key: 'address',
        // },
      ];
 

  return (
    <div>
        <Table dataSource={catlist} columns={columns} />
    </div>
  )
}

export default ViewCategory