import React from 'react'
import AuditImage from "../../images/audit.jpg"
import FormationImage from "../../images/formation.jpg"
import GestionImage from "../../images/gestion.jpg"
import QuickScanImage from "../../images/quickscan.jpg"
import MethodImage from "../../images/methode.jpg"

export default function ServicePageCard({ selected }) {


    return (
        <section className='p-10 sm:p-20 shadow-xl grid grid-cols-12 gap-4'>
            {
                selected == 0 ?
                    <>
                        <div className='col-span-12 sm:col-span-6 flex flex-col gap-4 text-start justify-center'>
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
                        <div className='col-span-12 sm:col-span-6 p-10'>
                            <img src={AuditImage} className='object-contain w-full h-full' alt="" />
                        </div>
                    </>
                    : selected == 1 ?
                        <>

                            <div className='col-span-12 sm:col-span-6 flex flex-col gap-6 text-start justify-center'>
                                <div className='font-bold text-[#4da6e7] text-3xl'>Methode de travail :</div>
                                <div>Nous offrons un soutien expert et axé sur les démarches de développement du système de gestion de la qualité Halal et sa mise en pratique. Nous guidons votre organisation vers la certification en 5 étapes pratiques, en commençant par une mesure de base où nous définissons les besoins de votre organisme pour obtenir une certification réussie. Après la certification, Halal QMS Center peut assurer le maintien du votre système de gestion Halal , avec lequel nous vous aidons à vous améliorer en continu et garder votre certificat. Avec nos clients, nous déterminons comment nous allons établir le processus de travail selon deux approches :</div>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 sm:col-span-6 shadow-xl p-5'>✔ Avez-vous préféré que nos conseillers vous guident et réaliser vous-même des travaux avec vos employés ? .</div>
                                    <div className='col-span-12 sm:col-span-6 shadow-xl p-5'>✔Avez-vous préféré que nous nous occupions l'ensemble du processus pour vous ?</div>
                                </div>
                                <div>Nos conseils se caractérisent par un délai d'exécution raccourci du processus de certification, un lien clair avec les exigences légales spécifiques aux produits et une approche intégrée dans laquelle le lien est établi avec d'autres thèmes tels que la sécurité de l’information, l'environnement et la durabilité. .</div>
                            </div>
                            <div className='col-span-12 sm:col-span-6 p-10'>
                                <img src={MethodImage} className='object-contain w-full h-full' alt="" />
                            </div>

                        </>
                        : selected == 2 ?
                            <>

                                <div className='col-span-12 sm:col-span-6 flex flex-col gap-4 text-start justify-center'>
                                    <div className='font-bold text-[#4da6e7] text-3xl'>Gestion de processus</div>
                                    <div>Nous sommes là… Nous intervenons à vos côtés de plusieurs manières, selon vos besoins, nous intervenons de façon ponctuelle ou périodique. Ou encore, selon vos préférences, nous pouvons intervenir dans votre entreprise ou en distanciel.</div>

                                    <div> Avec vous, nous examinons les ambitions de votre organisation, ce qui est déjà fait et ce qui est nécessaire à faire en termes d'orientation et de conception organisationnelles</div>
                                </div>
                                <div className='col-span-12 sm:col-span-6 p-10'>
                                    <img src={GestionImage} className='object-contain w-full h-full' alt="" />
                                </div>

                            </>
                            : selected == 3 ?
                                <>

                                    <div className='col-span-12 sm:col-span-6 flex flex-col gap-4 text-start justify-center'>
                                        <div className='font-bold text-[#4da6e7] text-3xl'>Quickscans :</div>
                                        <div>Vous êtes pressés par le temps, vous avez des marchés d’exportation mais vous n’avez pas le temps pour la certification ? Nous sommes là… Nos services de diagnostic et d’analyse rapide de vos processus, procédures et matières premières permettent de vérifier rapidement votre chaine afin que nous puissions mettre en place un plan d’action et proposions les solutions adéquates à vos écarts.</div>

                                        <div>Nous avons développé et optimisé des outils qui nous permettent d’analyser de façon très rapide vos processus/système/production, tout en respectant les exigences des normes Halal nationales et internationales. .</div>
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 p-10'>
                                        <img src={QuickScanImage} className='object-contain w-full h-full' alt="" />
                                    </div>

                                </>
                                :
                                <>

                                    <div className='col-span-12 sm:col-span-6 flex flex-col gap-4 text-start justify-center'>
                                        <div className='font-bold text-[#4da6e7] text-3xl'>Formation sur mesure :</div>
                                        <div>Vous êtes responsable de conformité ou en charge de la compliance au sein de votre organisation ? Vous souhaitez développer vos compétences ou celles de votre équipe, ou encore sensibiliser les collaborateurs non-spécialistes en terme de la certification / production Halal? Découvrez dès maintenant Halal QMS Center qui répond à l’ensemble de vos besoins de formation. .</div>

                                        <div>  Puisque la performance passe obligatoirement par la compétence et l'implication du personnel de tous les niveaux, Halal QMS Center a développé une large gamme de formations sur les standards Halal sur mesure pour partager et transmettre son savoir aux personnels de chaque entreprise. Notre gamme de formations peut être mise en œuvre dans vos propres locaux et elles sont adaptables à vos besoins et contexte (durée, programme, niveau de difficulté, nombre de participants...). Nous pouvons également concevoir des formations sur les standards Halal totalement sur mesure en suivant votre cahier des charges</div>
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 p-10'>
                                        <img src={FormationImage} className='object-contain w-full h-full' alt="" />
                                    </div>

                                </>


            }
        </section>

    )
}
