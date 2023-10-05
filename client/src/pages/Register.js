import React from 'react'
import { Form, Input,message} from 'antd'
import '../pages/styles/RegisterStyles.css'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate();
    const onfinishHandler=async(values)=>{
        try{
            const res=await axios.post('/api/v1/user/register',values);
            if(res.data.success){
                message.success('Register successfully')
                navigate('/login')
            }else{
                message.error(res.data.message)

            }

        }catch(error){
            console.log(error);
            message.error('something went wront')
        }
    }
  return (
    <>
        <div className="form-container">
            <Form layout="verticle" onFinish={onfinishHandler} className='card p-4'>
                <h1>Register Form</h1>
                <Form.Item label="Name" name="name">
                    <Input type="text" required />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type="email" required />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" required />
                </Form.Item>
                <Link to="/login" className='m-2'>
                Already user, Login Here
                </Link>
                <button className='
                btn btn-primary' type="submit">Register</button>
            </Form>
        </div>
    </>
  )
}

export default Register