import React, { useState } from 'react'
import Quickscan from "../../images/quickscan.png"
import Formationsurmesure from "../../images/Formationsurmesure.png"
import ProcessManagement from "../../images/GDP.png"
import AboutLeftImage from "../../images/about-left-image.png"
import ServicePageCard from '../../components/NewServices/ServicePageCard'

export default function Index() {
    const [selected, setSelected] = useState(0)
    return (
        <div className="p-10 pt-20 sm:p-20 pb-10 bg-[#f9f9f9]">
        <div className="text-6xl font-bold text-[#0F70B7] flex justify-center p-20 border-b">NOS SERVICES</div>
        <div className="max-w-7xl mx-auto py-20">

            <div className='grid grid-cols-12 '>
                <div className='col-span-12 sm:col-span-6'>
                    <img src={AboutLeftImage} alt="" />
                </div>
                <div className='col-span-12 sm:col-span-6 flex flex-col gap-6 justify-center'>
                    <div>Conseils, orientation et services dans le domaine de la gestion de la qualité dans le domaine de la production Halal. Le Halal QMS Center est une agence mondiale d'expertise Halal. Halal QMS Center offre la visibilité, l'adhérence et la perspective du marché sur le marché Halal international avec un package unique de « services Halal haut de gamme » :</div>
                    <div className='grid grid-cols-12 gap-2'>
                        <div className='col-span-12 sm:col-span-6 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Aide à la communication et conseils en Halal/Islamologie pour les occidentaux/non-musulmans entrepreneurs et producteurs qui ont un potentiel pour les marchés Halal locaux ou d'exportation</div>
                        <div className='col-span-12 sm:col-span-6 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ La recherche et le conseil concernent les risques et les opportunités pour le développement du marché Halal lié aux comportements des consommateurs Halal et à leur confiance.</div>
                        <div className='col-span-12 sm:col-span-6 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Examiner les systèmes de documentation et effectuer des audits internes.
                        </div>
                        <div className='col-span-12 sm:col-span-6 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Mise en place et pilotage de la filière agro-alimentaire durable et biologique « Halal Tayyib ».</div>
                        <div className='col-span-12 sm:col-span-6 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Conseils et accompagnement pour la réalisation de la Certification Halal souhaitée pour les entreprises / Services certifiés Halal</div>
                        <div className='col-span-12 sm:col-span-6 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Mise en place et pilotage d'un système de gestion de la qualité Halal robuste « QMS Halal » conformément aux normes internationales Halal.</div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-2'>
                <div className='col-span-12 sm:col-span-3 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Organiser des sessions professionnelles et des formations pour l'industrie alimentaire Halal, la restauration et le marché de détail ;</div>
                <div className='col-span-12 sm:col-span-3 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Conseils et support aux demandes de reconnaissances et d'accréditation Halal pour les entreprises et les Cbs</div>
                <div className='col-span-12 sm:col-span-3 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Mener et évaluer l'audit Halal et la sélection des matières premières</div>
                <div className='col-span-12 sm:col-span-3 shadow-xl p-5 rounded-xl flex items-center hover:scale-105 transition duration-200 hover:shadow-2xl hover:font-bold'>✔ Organisation de conférences sectorielles.</div>
            </div>



                <div className="w-full relative">
                    <div className="absolute bg-[url(./images/services-right-dec.png)] w-[1136px] h-[244px] right-0 z-1"></div>
                    <div className="flex flex-col justify-center items-center max-7w-xl mx-auto text-center text-lg z-2">

                        <div className='flex gap-4 justify-between items-center pt-48'>
                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-sm cursor-pointer' onClick={() => setSelected(3)}>
                                <div><img src={Quickscan} className=' h-8 w-8 ' alt="" /></div>
                                <div>Quickscan</div>
                            </div>
                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-sm cursor-pointer' onClick={() => setSelected(1)}>
                                <div><img src={Formationsurmesure} className='h-8 w-8' alt="" /></div>
                                <div>Methode<br /> de travail</div>
                            </div>
                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-sm cursor-pointer' onClick={() => setSelected(0)}>
                                <div><img src={Quickscan} className=' h-8 w-8 ' alt="" /></div>
                                <div>Services d'audit<br /> interne</div>
                            </div>

                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-sm cursor-pointer' onClick={() => setSelected(2)}>
                                <div><img src={ProcessManagement} className=' h-8 w-8 ' alt="" /></div>
                                <div>Gestion des processus</div>
                            </div>

                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-sm cursor-pointer' onClick={() => setSelected(4)}>
                                <div><img src={Formationsurmesure} className='h-8 w-8' alt="" /></div>
                                <div>Formation sur<br /> mesure</div>
                            </div>
                        </div>

                        <ServicePageCard selected={selected} />

                    </div>
                </div>

            </div>
        </div>
    )
}
