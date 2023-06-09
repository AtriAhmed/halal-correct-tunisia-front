import axios from 'axios';
import  React,{useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import ReactLoading from "react-loading"

export default function EditLocationCmp(props) {

    const [Input, setInput] = useState({
        title:'',
        address:'',
        po:'',
        director:'',
        tel:'',
        email:'',
        scope:'',
        categories:''
    });

    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toedit) {
            setInput(props.toedit);
            setLoading(false);
        }

    }, [props.toedit])

    const handleInput = (e) => {
        e.persist();
        setInput({ ...Input, [e.target.name]: e.target.value });
    }

    const updateItem = (e) => {
        e.preventDefault();
        const data = {
            title: Input.title,
            address: Input.address,
            po: Input.po,
            director: Input.director,
            tel: Input.tel,
            email: Input.email.split(","),
            scope: Input.scope,
            categories: Input.categories
        }
        axios.put(`/api/update-location/${props.toedit.id}`, data).then(res => {

            Swal.fire("Success", res.data.message, "success");
            setErrors([])

        }).catch(err => {
            const response = err.response
            if (response?.status === 422) {
                setErrors(response.data.errors)
            }
            else if (response?.status === 404) {
                Swal.fire("Error", response.data.message, "error");
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

            <form className='flex flex-col gap-4 w-full' onSubmit={updateItem}>
            <div>
            <input placeholder='Title' type="text" name="title" onChange={handleInput} value={Input.title} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.title}</span>
        </div>
        <div>
            <input placeholder='Adress' type="text" name="address" onChange={handleInput} value={Input.address} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.address}</span>
        </div>
        <div>
            <input placeholder='P.O.' type="text" name="po" onChange={handleInput} value={Input.po} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.po}</span>
        </div>
        <div>
            <input placeholder='Director' type="text" name="director" onChange={handleInput} value={Input.director} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.director}</span>
        </div>
        <div>
            <input placeholder='Tel' type="text" name="tel" onChange={handleInput} value={Input.tel} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.tel}</span>
        </div>
        <div>
            <input placeholder='Email' type="text" name="email" onChange={handleInput} value={Input.email} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.email}</span>
        </div>
        <div>
            <input placeholder='Scope' type="text" name="scope" onChange={handleInput} value={Input.scope} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.scope}</span>
        </div>
        <div>
            <textarea placeholder='Categories' name="categories" onChange={handleInput} value={Input.categories} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.categories}</span>
        </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Edit Location</button>

            </form>
        </div>
    )
}
