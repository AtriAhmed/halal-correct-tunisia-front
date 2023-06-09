import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Swal from 'sweetalert2';
import { Link,navigate } from 'gatsby'
import { useAuthContext } from '../../contexts/AuthProvider';
import ReactLoading from 'react-loading'

export default function Login() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('/api/checkLoggedIn').then(res => {
                Swal.fire("","You are already logged in","warning").then(()=>{
                    navigate('/admin')
                })
        }).catch(err=>{
            setLoading(false);
        });

        return;
    }, []);
    const {user,setUser} = useAuthContext() 
    
const [loginInput, setLogin] = useState({
    email:'',
    password:''
})

const [errors,setErrors] = useState([])

    const handleInput = (e)=>{
        e.persist();
        setLogin({...loginInput, [e.target.name]:e.target.value})
    }

    const loginSubmit = (e)=>{
        e.preventDefault();

        const data = {
            email:loginInput.email,
            password:loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('api/login', data).then(res=>{
                setUser(res.data)
                localStorage.setItem("auth_token",res.data.token)
                localStorage.setItem("auth_name",res.data.username)
                Swal.fire("Success",res.data.message,"success").then(()=>{
                    navigate("/admin");
                })
    
        }).catch(err=>{
            const response = err.response;
            if(response?.status === 401){
                Swal.fire("Warning",response?.data.message,"warning")
            }
            else
            {
                setErrors(response?.data.validation_errors)
            }
        })
    });
    }
    if (loading) {
        return (
            <ReactLoading />
        )
    }

  return (
    <>
                   <div className='max-w-[36rem] mx-auto h-[80vh] flex justify-center items-center'>
                        <form className='flex flex-col shadow-lg p-10 gap-4 w-full' onSubmit={loginSubmit}>
                        <h5 className='text-center font-bold text-3xl mb-3'>Admin Login</h5>
                            <div>
                            <input placeholder="Adresse email" type="email" name="email" onChange={handleInput} value={loginInput.email} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'/>
                                <span className='text-red-500'>{errors?.email}</span>
                                </div>
                            <div>
                                <input placeholder="Mot de passe" type="password" name="password" onChange={handleInput} value={loginInput.password} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'/>
                                <span className='text-red-500'>{errors?.password}</span>
                                </div>
                            <Link className="text-blue-500" to="/authentication/simple/forgot-password">Forgot your password?</Link>
                            <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Login</button>
                            <hr/>
                            <div className="text-center">Or <Link to="/register" className="text-blue-500">Request Admin Account</Link></div>
                        </form>
                        </div>
                                 
    </>
  )
}
