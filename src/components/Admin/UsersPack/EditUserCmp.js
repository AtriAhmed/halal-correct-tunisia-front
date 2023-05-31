import axios from 'axios';
import  React,{useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import ReactLoading from "react-loading"

export default function EditUserCmp(props) {

    const [userInput, setUser] = useState({
        name: '',
        email: '',
        role_as: '0',
        password: '',
    });

    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toedit) {
            setUser({...userInput,name:props.toedit.name,email:props.toedit.email,role_as:props.toedit.role_as});
            setLoading(false);
        }

    }, [props.toedit])

    const handleInput = (e) => {
        e.persist();
        setUser({ ...userInput, [e.target.name]: e.target.value });
    }

    const updateUser = (e) => {
        e.preventDefault();
        const data = {
            name: userInput.name,
            email: userInput.email,
            role_as: userInput.role_as,
            password: userInput.password,
        };
        axios.put(`/api/update-user/${props.toedit.id}`, data).then(res => {

            Swal.fire("Success", res.data.message, "success");
            setErrors([])

        }).catch(err => {
            if (err.response.status === 422) {
                Swal.fire("All Fields are mandatory", "", "error");
                setErrors(err.response.data.errors)
            }
            else if (err.response.status === 404) {
                Swal.fire("Error", err.response.data.message, "error");
            }
        })
    }

    if (loading) {
        return (
            <ReactLoading />
        )
    }

    return (
        <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>

            <form className='flex flex-col gap-4 w-full' onSubmit={updateUser}>
                <div>
                    <input placeholder='Name' type="text" name="name" onChange={handleInput} value={userInput.name} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors.name}</span>
                </div>
                <div>
                    <input placeholder='Adresse email' type="text" name="email" onChange={handleInput} value={userInput.email} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors.email}</span>
                </div>
                <div>
                    <input placeholder='********' type="text" name="password" onChange={handleInput} value={userInput.password} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors.password}</span>
                </div>
                <div>
                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                <select id="role" name='role_as' onChange={handleInput} value={userInput.role_as} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="1">Admin</option>
                    <option value="0">User</option>
                </select>
                </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Edit User</button>

            </form>
        </div>
    )
}
