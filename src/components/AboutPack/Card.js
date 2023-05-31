import React from "react"

function Card({ title, text }) {
  return (
    <div className="max-w-[600px] mx-auto group hover:scale-[1.1] transition-all duration-700">
      <h3 className="mb-4 font-poppins font-bold text-2xl scr800:text-3xl text-center scr900:text-left text-[#0F70B7] capitalize transition-all duration-1000 ">
        {title}
      </h3>
      <div className=" p-6 rounded-lg font-open font-normal text-base text-center scr900:text-left text-slate-100 group-hover:text-white bg-[#171731] group-hover:bg-sky-900 transition-all duration-700 ">
        {text}
      </div>
    </div>
  )
}

export default Card
