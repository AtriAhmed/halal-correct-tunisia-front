import { Link } from 'gatsby'
import React, { useState } from 'react'

export default function ServiceCard({ title, content, link }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className="hover:shadow-2xl hover:ring-[#0F70B7] hover:ring-2 transition-all duration-300 rounded-xl bg-white p-8 flex flex-col gap-4" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
            <div className="border-b flex justify-between items-center">
                <div className="font-bold text-2xl">{title}</div>
                <div className="flex"><div className={` bg-indigo-700 h-3 w-5 ${hovered ? 'order-2 rounded-r-full' : 'order-1 rounded-l-full'}`}></div><div className={`bg-blue-700 h-3 w-5 ${hovered ? 'order-1 rounded-l-full' : 'order-2 rounded-r-full'}`}></div></div>
            </div>
            <div className="font-light">
                {content}
            </div>
            <div className=""><Link to={link} className="border hover:border-[#0F70B7] hover:bg-[#0F70B7] hover:text-white transition duration-200 rounded-full py-4 px-6 font-medium text-gray-500">Decouvrir plus</Link></div>

        </div>
    )
}
