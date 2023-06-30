import React from 'react'

export default function About() {
    return (
        <div className="p-10 sm:p-20 pb-10 pt-20">
        <div className="text-5xl sm:text-6xl font-bold text-[#0F70B7] flex justify-center p-5 sm:p-20 border-b">À propos de nous</div>
        <div className="max-w-7xl mx-auto py-20">
            <div className="grid grid-cols-12 items-center sm:gap-8 text-lg">
                <div className="col-span-12 sm:col-span-6 flex flex-col gap-4">
                    Tout le monde a le droit de consommer des produits confirmés Halal, utiliser des produits cosmétique halal, passer leurs vacances dans des hôtels qui respectent le tourisme familial et travailler avec des banques islamiques dans les pays musulmans, en Europe et dans le monde.

                    <div>C'est pourquoi Halal QMS Center a été engagé à améliorer continuellement son propre système de gestion de la qualité et à développer davantage le marché halal mondial</div>
                    <div className="font-bold text-3xl">
                        Pourquoi La <span className="text-[#0F70B7]"> Certification Halal</span>
                    </div>
                    <div >Ces chiffres sont autant un défi à relever qu’une extraordinaire opportunité de commercialiser des marchandises</div>

                    <div className="">et des prestations qui respectent les préceptes de l’Islam partout dans le monde mais satisfont également les exigences règlementaires propres à chaque pays..</div>
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6 flex flex-col font-semibold items-center justify-center">
                            <div className="text-2xl shadow-lg p-8 mb-[-60px] text-[#0F70B7]">57</div>
                            <div className="text-xl shadow-xl p-8 pt-20 text-center">pays musulmans</div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 flex flex-col font-semibold items-center justify-center">
                            <div className="text-2xl shadow-lg p-8 mb-[-60px] text-[#0F70B7]">1,6</div>
                            <div className="text-xl shadow-xl p-8 pt-20 text-center">Milliards de musulmans dans le monde</div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 flex flex-col font-semibold items-center justify-center">
                            <div className="text-2xl shadow-lg p-8 mb-[-60px] text-[#0F70B7]">45</div>
                            <div className="text-xl shadow-xl p-8 pt-20 text-center">Millions de musulmans en Europe</div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 flex flex-col font-semibold items-center justify-center">
                            <div className="text-2xl shadow-lg p-8 mb-[-60px] text-[#0F70B7]">632</div>
                            <div className="text-xl shadow-xl p-8 pt-20 text-center">milliards. $ de denrées alimentaires certifiées halal exportées en 2018</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
