import React from 'react'
import { Form, Input,message} from 'antd'
import '../pages/styles/RegisterStyles.css'
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate();

  const onfinishHandler=async(values)=>{
    try{
      const res=await axios.post('/api/v1/user/login',values);
      if(res.data.success){
        message.success('Login Successfull');
        navigate('/')
      }
      else{
        message.error(res.data.message)
      }
    }catch(err){
      console.log(err);
      message.error('something went wrong')

    }
}
  return (
    <>
      <div className="form-container">
            <Form layout="verticle" onFinish={onfinishHandler} className='card p-4'>
                <h1>Login Form</h1>
                <Form.Item label="Email" name="email">
                    <Input type="email" required />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" required />
                </Form.Item>
                <Link to="/register" className='m-2'>
                Don't have an account, Create Here
                </Link>
                <button className='
                btn btn-primary' type="submit">Register</button>
            </Form>
        </div>
    </>
  )
}

export default Login