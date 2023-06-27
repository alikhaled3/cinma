import React, { useState } from 'react'
import { useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Login({saveUserData}) {


  let navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [messageError, setmessageError] = useState('');

 async function handeleLogin(values)
 {
  setisLoading(true);
 let {data} =await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`, values).catch((errr)=>{
  setisLoading(false)
 setmessageError(`${errr.response.data.errors.param} :${errr.response.data.errors.msg}`)})
        if(data.message=== 'success')
        {
          localStorage.setItem('userToken', data.token)
          saveUserData()
          setisLoading(false)
          navigate('/')
        }
        }


let validationSchema = Yup.object({

  email:Yup.string().required('email required').email('email is invalid'),
  password:Yup.string().required('password required').matches(/^[A-Z][a-z0-9]{5,10}$/),
})

 let formik = useFormik ({
  initialValues:{

    email:'',  
    password:'',

  },
  validationSchema,
  onSubmit:handeleLogin
 })
 
 
 return <>
  
<div className='w-50 m-auto mt-5 pt-5'>
  <h3 className='text-center'>login now </h3>
  {messageError.length > 0?<div className="alert alert-danger"> {messageError} </div> :null}
 
 



  <form onSubmit={formik.handleSubmit}> 

    <label htmlFor="email">Email</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name='email' id='email'/>
    {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:null }  

    <label htmlFor="password">password</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password"  name='password' id='password' />
    {formik.errors.password && formik.touched.password?<div className="alert alert-danger">password must be valid</div>:null }

    {isLoading?<button type='button' className='btn bg-danger text-white'><i className='fas fa-spinner fa-spin'></i></button>:
    <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn bg-danger text-white'>login</button>}
  </form>

</div>


  </>
   
}

