import React, { useState } from 'react'
import QMSCenterImage from '../../images/halal-qms.jpg'
import OurMissionImage from '../../images/mission.jpg'
import NewAboutCard from '../../components/NewAboutPage/NewAboutCard'

const data = [
    {
        title: "Halal QMS Center",
        content: "Halal QMS Center estime que les gens ont le droit de consommer des produits confirmés Halal, utiliser des produits cosmétiques Halal, passer leurs vacances dans des hôtels qui respectent le tourisme familial et travailler avec des banques islamiques dans les pays musulmans, en Europe et dans le monde.C'est pourquoi nous nous engageons à améliorer continuellement notre propre système de gestion de la qualité et à développer davantage le marché Halal mondial. Nous voulons être une organisation leader d’accompagnement et de formation halal dans le monde avec l'innovation et grâce à nos excellents services proposés aux secteurs Halal.",
        img: QMSCenterImage
    },
    {
        title: "Notre mission",
        content: "Halal QMS Center est la solution pour les industriels, les abattoirs, les restaurants et les hôtels du monde entier qui font face à une transition vers le Halal ou qui souhaitent optimiser leurs processus Halal déjà existants pour la certification ou l'accréditation grâce à nos experts dans l'application des bons processus de médiation. Halal QMS Center vise à fournir un niveau élevé de services Halal professionnels et à créer de la valeur ajoutée pour les industriels , les abattoirs, les restaurants , les hôtels et les organisations de certification participant aux secteurs Halal..Halal QMS Center vise à être un leader mondial dans le domaine de l'application des processus et procédures correctsqui peuvent conduire au succès de ses clients et garantie de la qualité de l'ensemble de la chaîne alimentaire Halal pour le consommateur musulman.",
        img: OurMissionImage
    }
]


export default function Index() {

    const [selected, setSelected] = useState(0)


    return (
        <div className="sm:p-10 sm:p-20 pt-20 pb-10 bg-[#f9f9f9]">
        <div className="text-5xl sm:text-6xl font-bold text-[#0F70B7] text-center p-5 sm:p-20 border-b">Notre mission</div>
        <div className="max-w-7xl mx-auto py-10 sm:py-20">

            <div className="grid grid-cols-12 sm:gap-20">
                <div className="col-span-12 sm:col-span-4 flex flex-col gap-4 p-10">
                    <div className={`transition duration-300 border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center cursor-pointer ${selected == 0 ? 'bg-[rgb(15,112,183)] text-white' : 'text-[rgb(15,112,183)]'}`} onClick={() => setSelected(0)} >Halal QMS Center</div>
                    <div className={`transition duration-300 border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center cursor-pointer ${selected == 1 ? 'bg-[rgb(15,112,183)] text-white' : 'text-[rgb(15,112,183)]'}`} onClick={() => setSelected(1)}>Notre mission</div>
                </div>
                <NewAboutCard title={data[selected].title} content={data[selected].content} img={data[selected].img} />
            </div>
        </div>
    </div>
    )
}
