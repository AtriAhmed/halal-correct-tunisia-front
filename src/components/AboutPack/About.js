import React from 'react'

export default function About() {
    return (
        <div className="p-20 pb-10">
            <div className="text-6xl font-bold text-[#0F70B7] flex justify-center p-20 border-b">À propos de nous</div>
            <div className="max-w-7xl mx-auto py-20">
                <div className="grid grid-cols-12 items-center gap-8 text-lg">
                    <div className="col-span-6 flex flex-col gap-4">
                        Tout le monde a le droit de consommer des produits confirmés Halal, utiliser des produits cosmétique halal, passer leurs vacances dans des hôtels qui respectent le tourisme familial et travailler avec des banques islamiques dans les pays musulmans, en Europe et dans le monde.

                        <div>C'est pourquoi Halal QMS Center a été engagé à améliorer continuellement son propre système de gestion de la qualité et à développer davantage le marché halal mondial</div>
                        <div className="font-bold text-3xl">
                            Pourquoi La <span className="text-[#0F70B7]"> Certification Halal</span>
                        </div>
                        <div >Ces chiffres sont autant un défi à relever qu’une extraordinaire opportunité de commercialiser des marchandises</div>

                        <div className="">et des prestations qui respectent les préceptes de l’Islam partout dans le monde mais satisfont également les exigences règlementaires propres à chaque pays..</div>
                    </div>
                    <div className="col-span-6">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6 flex flex-col shadow-xl p-8 font-bold items-center justify-center gap-4">
                                <div className="text-xl">57</div>
                                <div className="text-xl">pays musulmans</div>
                            </div>
                            <div className="col-span-6 flex flex-col shadow-xl p-8 font-bold items-center justify-center gap-4">
                                <div className="">45</div>
                                <div className="">milliards. $</div>
                            </div>
                            <div className="col-span-6 flex flex-col shadow-xl p-8 font-bold items-center justify-center gap-4">
                                <div className="">632</div>
                                <div className="">Happy Clients</div>
                            </div>
                            <div className="col-span-6 flex flex-col shadow-xl p-8 font-bold items-center justify-center gap-4">
                                <div className="">24</div>
                                <div className="">Awwards Won</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
