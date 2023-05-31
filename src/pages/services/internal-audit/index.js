import React from 'react'
import Quickscan from "../../../images/quickscan.png"
import Formationsurmesure from "../../../images/Formationsurmesure.png"
import servicesImage from "../../../images/services-image.jpg"
import ProcessManagement from "../../../images/GDP.png"

export default function index() {
    return (
        <div className="p-20 pb-10 bg-[#f9f9f9]">
            <div className="text-6xl font-bold text-[#0F70B7] flex justify-center p-20 border-b">NOS SERVICES</div>
            <div className="max-w-7xl mx-auto py-20">
                <div className="w-full relative">
                    <div className="absolute bg-[url(./images/services-right-dec.png)] w-[1136px] h-[244px] right-0 z-1"></div>
                    <div className="flex flex-col justify-center items-center max-7w-xl mx-auto text-center text-lg z-2">

                        <section className="flex gap-4 justify-center items-center py-24">
                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-xl'>
                                <div><img src={Quickscan} className=' h-16 w-16 ' alt="" /></div>
                                <div>Services d'audit<br /> interne</div>
                            </div>
                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-xl mt-20'>
                                <div><img src={Formationsurmesure} className='h-16 w-16' alt="" /></div>
                                <div>Presentation<br /> de services</div>
                            </div>
                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-xl'>
                                <div><img src={ProcessManagement} className=' h-16 w-16 ' alt="" /></div>
                                <div>Gestion des processus</div>
                            </div>
                        </section>

                        <section className='p-20 shadow-xl grid grid-cols-12 gap-4'>
                            <div className='col-span-6 flex flex-col gap-4 text-start'>
                                <div className='font-bold text-[#4da6e7] text-3xl'>Services d'audit interne :</div>
                                <div className=''>Services d'audit interne Vous souhaitez certifier votre organisation selon des référentiels Halal bien déterminés ? Nous intervenons en Audits première partie, pour évaluer vos systèmes et détecter les piste d’amélioration. Nos auditeurs certifiés interviennent avec professionnalisme, impartialité et savoir-être. La diversité de nos audits et la capacité de nos auditeurs à s'adapter à votre contexte précis en font un véritable atout pour pouvoir prendre une longueur d'avance. Nos auditeurs reposent sur des principes méthodiques normalisés (ISO 19011) :</div>
                                <ul className='list-disc flex flex-col gap-2 list-inside'>
                                    <li>Un auditeur qualifié et expérimenté</li>
                                    <li> Une méthode rigoureuse</li>
                                    <li>L'indépendance de l’auditeur pour les activités auditées </li>
                                    <li>Transparence tout au long de l'audit</li>
                                    <li> Objectivité : l’audit s’appuie sur des preuves tangibles</li>
                                    <li>Une restitution fiable des observations (réunion de clôture, rapport d'audit)</li>
                                    <li>La confidentialité des informations .</li>
                                </ul>
                            </div>
                            <div className='col-span-6 p-10'>
                                <img src={servicesImage} className='object-contain w-full h-full' alt="" />
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        </div>
    )
}
