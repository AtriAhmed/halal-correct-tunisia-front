import React from "react"
export default function ServiceLink({name,src,click}){

    return   <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-sm cursor-pointer' onClick={click}>
    <div><img src={src} className=' h-8 w-8 ' alt="" /></div>
    <div>{name}</div>
</div>
}