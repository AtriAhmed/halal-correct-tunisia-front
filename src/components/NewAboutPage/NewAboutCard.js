import React from 'react'

export default function NewAboutCard({ title, content, img }) {
    return (
        <div className="col-span-12 sm:col-span-8 shadow-xl bg-white p-6 text-justify">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-5 flex items-center"><img src={img} className='' /></div>
                <div className="col-span-12 sm:col-span-7 flex flex-col gap-4 p-5">
                    <div className="font-bold text-xl">{title}</div>
                    {content}</div>
            </div>
        </div>
    )
}
