import React, { useState } from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import phoneIcon from "../../images/phone-icon.png"
import hornIcon from "../../images/horn-icon.png"
import locationIcon from "../../images/location-icon.png"
import axios from "axios"
import {
    faArrowLeft,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import ReactLoading from "react-loading"
import validator from "validator"
import Swal from "sweetalert2"

function sendRequest(data) {
    return axios.post('/api/create-message', data)
}

export default function ContactCmp() {
    function resetInputs() {
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
        setErrors([])
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        if (loading) return

        const nameVal = name.trim()
        const emailVal = email.trim()
        const subjectVal = subject.trim()
        const messageVal = message.trim()


        const data = {
            name: nameVal,
            email: emailVal,
            subject: subjectVal,
            message: messageVal,
        }

        try {
            await sendRequest(data)
            Swal.fire("Succés", "Votre email a été envoyer avec success", "success")
            resetInputs()
            setErrors([])
        } catch (err) {
            console.log(err.response)
            setErrors(err.response.data.errors)
        }

    }


    return (
        <div className="w-full bg-[#f9f9f9] border-t">
            <div className="w-full px-8 py-8 max-w-w1300 mx-auto">
                <FadeUpOnScroll>
                    <div className="mb-10">
                        <div className="flex justify-center font-bold text-[#4da6e7]">CONTACTEZ NOUS</div>
                        <div className="text-black font-bold text-3xl flex justify-center">Contactez-nous dès maintenant</div>
                    </div>
                    <div className="shadow-xl grid grid-cols-12 p-10 bg-white gap-4 rounded-xl">
                        <div className="col-span-5"><div className="w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.8075804201408!2d3.1622432999999996!3d50.7049552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c328dbe4d73d27%3A0x67a9e5775999bb0b!2s445%20Bd%20Gambetta%2C%2059200%20Tourcoing%2C%20France!5e0!3m2!1sen!2stn!4v1686243347501!5m2!1sen!2stn"
                                width="100%" height="636px" frameborder="0" style={{ border: 0 }}
                                allowfullscreen></iframe>
                        </div></div>
                        <div className="col-span-7 flex flex-col gap-4">
                            <div className="grid grid-cols-12 gap-4 text-gray-500 text-center break-all">
                                <div className="col-span-4 shadow-xl flex flex-col items-center py-5 px-3 rounded-xl"><img src={phoneIcon} /><div>(+216) 29503804</div></div>
                                <div className="col-span-4 shadow-xl flex flex-col items-center py-5 px-3 rounded-xl"><img src={hornIcon} /><div>halalQMS@halalcorrect.com</div></div>
                                <div className="col-span-4 shadow-xl flex flex-col items-center py-5 px-3 rounded-xl"><img src={locationIcon} /><div>immeuble new Tower - centre urbain nord – Tunis
</div></div>
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-6 flex flex-col justify-around gap-4">
                                        <div className="flex flex-col"><input className="py-2 px-4 border rounded-full outline-none" type="text" placeholder="Nom" value={name} onChange={e => setName(e.target.value)} />
                                            <span className="text-red-500">{errors?.name}</span>
                                        </div>
                                        <div className="flex flex-col"><input className="py-2 px-4 border rounded-full outline-none" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                            <span className="text-red-500">{errors?.email}</span>
                                        </div>
                                        <div className="flex flex-col"><input className="py-2 px-4 border rounded-full outline-none" type="text" placeholder="Sujet" value={subject} onChange={e => setSubject(e.target.value)} />
                                            <span className="text-red-500">{errors?.subject}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-6 flex flex-col"><textarea className="py-3 px-5 border rounded-3xl outline-none w-full" name="message" placeholder="Message" id="" cols="30" rows="8" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
                                        <span className="text-red-500">{errors?.message}</span>
                                    </div>
                                </div>
                                <div><button className="w-full border border-[#4da6e7] text-[#4da6e7] rounded-full py-3 hover:bg-[#4da6e7] transition duration-300 hover:text-white">Envoyer le message maintenant.</button></div>
                            </form>
                        </div>
                    </div>
                </FadeUpOnScroll>
            </div>
        </div>
    )
}
