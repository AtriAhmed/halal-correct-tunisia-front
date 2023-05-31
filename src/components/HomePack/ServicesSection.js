import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import { Link } from "gatsby"

export default function ServicesSection() {
  return (
    <div className="w-full bg-[#f9f9f9] relative">
      <div className="absolute bg-[url(./images/services-right-dec.png)] w-[1136px] h-[244px] right-0"></div>
      <div className="flex justify-center items-center max-w-5xl mx-auto text-left text-lg">
        <FadeUpOnScroll>
          <section className="grid grid-cols-12 gap-5 py-24">
            <div className="col-span-6 flex flex-col gap-4 pt-5">
              <div className="shadow-xl rounded-xl bg-white p-8 flex flex-col gap-4">
                <div className="border-b flex justify-between items-center">
                  <div className="font-bold text-2xl">Méthode De Travail</div>
                  <div className="flex"><div className="rounded-l-full bg-indigo-700 h-3 w-5"></div><div className="rounded-r-full bg-blue-700 h-3 w-5"></div></div>
                </div>
                <div className="font-light">
                  Expert en systèmes de gestion de la qualité Halal, je propose un accompagnement complet pour la certification, incluant cinq étapes pratiques ainsi qu'une assistance continue pour maintenir et améliorer votre système de gestion..
                </div>
                <div className=""><Link to="/work-method" className="border rounded-full py-2 px-4 font-bold text-gray-500">Decouvrir plus</Link></div>

              </div>
              <div className="shadow-xl rounded-xl bg-white p-8 flex flex-col gap-5">
                <div className="border-b flex justify-between items-center">
                  <div className="font-bold text-2xl">Services D'audit Interne</div>
                  <div className="flex"><div className="rounded-l-full bg-indigo-700 h-3 w-5"></div><div className="rounded-r-full bg-blue-700 h-3 w-5"></div></div>
                </div>
                <div className="font-light">Vous souhaitez certifier votre organisation selon des référentiels Halal bien déterminés ? Nous intervenons en Audits première partie, pour évaluer vos systèmes et détecter les piste d’amélioration. Nos auditeurs certifiés interviennent avec professionnalisme, impartialité et savoir-être. .</div>
                <div className=""><Link to="/services/internal-audit" className="border rounded-full py-2 px-4 font-bold text-gray-500">Decouvrir plus</Link></div>
              </div>
            </div>
            <div className="col-span-6 flex flex-col gap-4">
              <div className="shadow-xl rounded-xl bg-white p-8 flex flex-col gap-4">
                <div className="border-b flex justify-between items-center">
                  <div className="font-bold text-2xl">Gestion De Processus</div>
                  <div className="flex"><div className="rounded-l-full bg-indigo-700 h-3 w-5"></div><div className="rounded-r-full bg-blue-700 h-3 w-5"></div></div>
                </div>
                <div className="font-light">Nous vous accompagnons selon vos besoins, que ce soit de manière ponctuelle ou régulière, sur site ou à distance, pour évaluer vos ambitions organisationnelles et définir les actions nécessaire.</div>
                <div className=""><Link to="/services/internal-audit" className="border rounded-full py-2 px-4 font-bold text-gray-500">Decouvrir plus</Link></div>
              </div>
              <div className="shadow-xl rounded-xl bg-white p-8 flex flex-col gap-4">
                <div className="border-b flex justify-between items-center">
                  <div className="font-bold text-2xl">Quickscan</div>
                  <div className="flex"><div className="rounded-l-full bg-indigo-700 h-3 w-5"></div><div className="rounded-r-full bg-blue-700 h-3 w-5"></div></div>
                </div>
                <div className="font-light">Pour répondre à vos besoins urgents de certification pour les marchés d'exportation, nous proposons un service de Quickscan qui comprend une analyse rapide de vos processus, procédures et matières premières, suivi d'un plan d'action adapté aux écarts identifiés, tout en respectant les normes Halal nationales et internationales.</div>
                <div className=""><Link to="/services/quickscan" className="border rounded-full py-2 px-4 font-bold text-gray-500">Decouvrir plus</Link></div>
              </div>
            </div>
          </section>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}