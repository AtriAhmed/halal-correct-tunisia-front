import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

export default function AboutCard({ img, hoverImg, title, content }) {
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        console.log(hovered)
    }, [hovered])

    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-3 shadow-xl p-7 flex flex-col gap-4 justify-between hover:bg-cover hover:bg-no-repeat transition-all duration-300 hover:bg-right-top hover:bg-[url(./images/service-bg.jpg)] hover:text-white bg-white" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
        <div><img className='' src={hovered ? hoverImg : img} /></div>
        <div className="font-bold text-xl">{title}</div>
        <div className="text-sm">{content}</div>
        <div className=""><Link to="/about" className={`${hovered ? 'text-white' : 'text-[#0F70B7]'} transition duration-300 underline`} >En savoir plus</Link></div>
    </div>
    )
}
