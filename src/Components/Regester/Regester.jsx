import React, { useState } from 'react'
import { useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Register() {
  let navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);
const [messageError, setmessageError] = useState('');

 async function handeleRegister(values)
 {
  setisLoading(true);
 let {data} =await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values).catch((errr)=>{
   setisLoading(false)
 setmessageError(`${errr.response.data.errors.param} :${errr.response.data.errors.msg}`)

 }

 )

    if(data.message=== 'success')
    {
      setisLoading(false)
    navigate('/Login')
    }
 }


let validationSchema = Yup.object({
  name:Yup.string().required('name required').min(3,'minumum 3').max(10,'maxlengh is 10'),
  email:Yup.string().required('email required').email('email is invalid'),
  password:Yup.string().required('password required').matches(/^[A-Z][a-z0-9]{5,10}$/),
  rePassword:Yup.string().required('repassword required').oneOf([Yup.ref('password')]),
  phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/),
})

 let formik = useFormik ({
  initialValues:{
    name :'',
    email:'',  
    password:'',
    rePassword:'',
    phone:'',   
  },
  validationSchema,
  onSubmit:handeleRegister
 })
 
 
 return <>
  
<div className='w-50  m-auto mt-5 pt-5'>
  <h3 className='text-center'> register now </h3>
  {messageError.length > 0?<div className="alert alert-danger"> {messageError} </div> :null}
 
 



  <form onSubmit={formik.handleSubmit}>
    <label htmlFor="name">Name</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name='name'   id='name'/>
    {formik.errors.name && formik.touched.name?<div className="alert alert-danger">{formik.errors.name}</div>:null }

    <label htmlFor="email">Email</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name='email' id='email'/>
    {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:null }  

    <label htmlFor="password">password</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name='password' id='password'/>
    {formik.errors.password && formik.touched.password?<div className="alert alert-danger">password must be valid</div>:null }

    <label htmlFor="rePassword">rePassword</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" name='rePassword' id='rePassword'/>
    {formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger">{formik.errors.rePassword}</div>:null }

    <label htmlFor="phone">phone</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name='phone' id='phone'/>
    {formik.errors.phone && formik.touched.phone?<div className="alert alert-danger">must be valid</div>:null }

{isLoading?<button type='button' className='btn bg-danger text-white '><i className='fas fa-spinner fa-spin'></i></button>:
<button type='submit' disabled={!(formik.isValid && formik.dirty)} className='  btn bg-danger text-white'>Regester now</button>}
  </form>

</div>


  </>
   
}
