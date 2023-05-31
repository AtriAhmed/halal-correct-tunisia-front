import React from 'react'
import AboutLeftImage from "../../images/about-left-image.png"


export default function index() {
    return (
        <div className="p-20 pb-10 bg-[#f9f9f9]">
            <div className="text-6xl font-bold text-[#0F70B7] flex justify-center p-20 border-b">Méthode de travail</div>
            <div className="max-w-7xl mx-auto py-20">
                <div className='grid grid-cols-12 '>
                    <div className='col-span-6'>
                        <img src={AboutLeftImage} alt="" />
                    </div>
                    <div className='col-span-6 flex flex-col gap-6 justify-center'>
                        <div>Nous offrons un soutien expert et axé sur les démarches de développement du système de gestion de la qualité Halal et sa mise en pratique. Nous guidons votre organisation vers la certification en 5 étapes pratiques, en commençant par une mesure de base où nous définissons les besoins de votre organisme pour obtenir une certification réussie. Après la certification, Halal QMS Center peut assurer le maintien du votre système de gestion Halal , avec lequel nous vous aidons à vous améliorer en continu et garder votre certificat. Avec nos clients, nous déterminons comment nous allons établir le processus de travail selon deux approches :</div>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-6 shadow-xl p-5'>✔ Avez-vous préféré que nos conseillers vous guident et réaliser vous-même des travaux avec vos employés ? .</div>
                            <div className='col-span-6 shadow-xl p-5'>✔Avez-vous préféré que nous nous occupions l'ensemble du processus pour vous ?</div>
                        </div>
                        <div>Nos conseils se caractérisent par un délai d'exécution raccourci du processus de certification, un lien clair avec les exigences légales spécifiques aux produits et une approche intégrée dans laquelle le lien est établi avec d'autres thèmes tels que la sécurité de l’information, l'environnement et la durabilité. .</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
