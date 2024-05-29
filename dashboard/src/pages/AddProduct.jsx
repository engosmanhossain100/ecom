import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddProduct = () => {

  let [image, setImage] = useState({});
  let [discription,setDiscription] = useState("");

  let userInfo = useSelector((state) => state.user.value);

  let [loading,setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  let [error, setError] = useState("");

    const onFinish = async (values) => {

      try{
        setLoading(true);
        let data = await axios.post("http://localhost:8000/api/v1/product/creatproduct",
         {
           name: values.name,
           discription : discription,
           avatar: image,
         },
         {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
         },
        )
        
       console.log(data);
       console.log('Success:', values);

      setLoading(false);
      toast.success( "Product created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      } catch (error) {
        setLoading(false);
        setSuccess('')
        toast.error(error.response.data.message, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
      }
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      let handleChange = (e) => {
      setImage(e.target.files[0]);
      }

  return (
    
    userInfo.role !== "user" &&   
     
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <ToastContainer/>

        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your product name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Osman</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                      setDiscription(editor.getData());
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

        <Form.Item>
        <input onChange={handleChange} type="file"/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        </Form>
   
  )
}

export default AddProduct