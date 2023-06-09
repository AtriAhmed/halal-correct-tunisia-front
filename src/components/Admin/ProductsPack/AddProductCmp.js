import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function AddProductCmp() {
    function resetInput(){
        setInput({
            category_id:'',
            name:''
        })
        setErrors([])
    }
    const [Input,setInput] = useState({
        category_id:'',
        name: ''
})

const [errors,setErrors] = useState([])

const [categoryList, setCategoryList] = useState([]);

useEffect(() => {
    axios.get('/api/get-categories').then(res=>{
          setCategoryList(res.data.categories);
    });
  }, [])

const handleInput = (e) =>{
    e.persist()
    setInput({...Input, [e.target.name]:e.target.value})
}

const itemSubmit = (e) =>{
    e.preventDefault();

    const data = {
        category_id:Input.category_id,
        name: Input.name
    }

        axios.post('/api/create-product',data).then(res =>{
            
                Swal.fire("Success",res.data.message,"success")
                resetInput()
                
        }).catch(err=>{
            const response = err.response
            setErrors(response.data.validation_errors)
        })
}

  return (

    <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>

    <form className='flex flex-col gap-4 w-full' onSubmit={itemSubmit}>

    <div>
                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                <select id="role" name="category_id" onChange={handleInput} value={Input.category_id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option>Select Category</option>
                {
                                   categoryList.map((item)=>{
                                        return (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                   })
                               }
                </select>
                <small className='bg-red-600'>{errors?.category_id}</small>
                </div>        

        <div>
            <input placeholder='Name' type="text" name="name" onChange={handleInput} value={Input.name} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            <span className='text-red-600'>{errors?.name}</span>
        </div>
        <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Add Product</button>

    </form>
</div>

  )
}
