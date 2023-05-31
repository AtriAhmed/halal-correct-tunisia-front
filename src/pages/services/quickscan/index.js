import React from 'react'
import Quickscan from "../../../images/quickscan.png"
import Formationsurmesure from "../../../images/Formationsurmesure.png"
import servicesImage from "../../../images/services-image.jpg"

export default function index() {
    return (
        <div className="p-20 pb-10 bg-[#f9f9f9]">
            <div className="text-6xl font-bold text-[#0F70B7] flex justify-center p-20 border-b">NOS SERVICES</div>
            <div className="max-w-7xl mx-auto py-20">
                <div className="w-full relative">
                    <div className="absolute bg-[url(./images/services-right-dec.png)] w-[1136px] h-[244px] right-0"></div>
                    <div className="flex flex-col justify-center items-center max-7w-xl mx-auto text-center text-lg">

                        <section className="flex gap-4 justify-center items-center py-24">
                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-xl'>
                                <div><img src={Quickscan} className=' h-16 w-16 ' alt="" /></div>
                                <div>Quickscan</div>
                            </div>
                            <div className='flex flex-col gap-4 justify-center items-center shadow-xl p-10 font-bold text-xl mt-20'>
                                <div><img src={Formationsurmesure} className='h-16 w-16' alt="" /></div>
                                <div>Formation sur<br /> mesure</div>
                            </div>
                        </section>

                        <section className='p-20 shadow-xl grid grid-cols-12 gap-4'>
                            <div className='col-span-6 flex flex-col gap-4 text-start'>
                                <div className='font-bold text-[#4da6e7] text-3xl'>Quickscans :</div>
                                <div className=''>Vous êtes pressés par le temps, vous avez des marchés d’exportation mais vous n’avez pas le temps pour la certification ? Nous sommes là… Nos services de diagnostic et d’analyse rapide de vos processus, procédures et matières premières permettent de vérifier rapidement votre chaine afin que nous puissions mettre en place un plan d’action et proposions les solutions adéquates à vos écarts.
                                    <div>
                                        Nous avons développé et optimisé des outils qui nous permettent d’analyser de façon très rapide vos processus/système/production, tout en respectant les exigences des normes Halal nationales et internationales. .</div>
                                </div>

                            </div>
                            <div className='col-span-6 flex justify-end p-10'>
                                <img src={servicesImage} alt="" />
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        </div>
    )
}
