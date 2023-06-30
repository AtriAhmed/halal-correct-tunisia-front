import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import { Link } from "gatsby"
import ServiceCard from "../NewHomePage/Services/ServiceCard"
import { faChartBar, faClipboardCheck, faEye, faLightbulb } from "@fortawesome/free-solid-svg-icons"

const data = [
  {
    title: "Méthode De Travail",
    content: "Expert en systèmes de gestion de la qualité Halal, je propose un accompagnement complet pour la certification, incluant cinq étapes pratiques ainsi qu'une assistance continue pour maintenir et améliorer votre système de gestion..",
    link: "/services"
  },
  {
    title: "Services D'audit Interne",
    content: "Vous souhaitez certifier votre organisation selon des référentiels Halal bien déterminés ? Nous intervenons en Audits première partie, pour évaluer vos systèmes et détecter les piste d’amélioration. Nos auditeurs certifiés interviennent avec professionnalisme, impartialité et savoir-être. .",
    link: "/services"
  }
  ,
  {
    title: "Gestion De Processus",
    content: "Nous vous accompagnons selon vos besoins, que ce soit de manière ponctuelle ou régulière, sur site ou à distance, pour évaluer vos ambitions organisationnelles et définir les actions nécessaire.",
    link: "/services"
  },
  {
    title: "Quickscan",
    content: "Pour répondre à vos besoins urgents de certification pour les marchés d'exportation, nous proposons un service de Quickscan qui comprend une analyse rapide de vos processus, procédures et matières premières, suivi d'un plan d'action adapté aux écarts identifiés, tout en respectant les normes Halal nationales et internationales.",
    link: "/services"
  },

]

export default function ServicesSection() {
  return (
    <div className="w-full bg-[#f9f9f9] relative">
    <div className="absolute bg-[url(./images/services-right-dec.png)] w-[1136px] h-[244px] right-0"></div>
    <div className="flex justify-center items-center max-w-5xl mx-auto text-left text-lg">
      <FadeUpOnScroll>
        <section className="grid grid-cols-12 gap-5 py-24 px-5 xl:px-0">
          {data.map(service => <ServiceCard title={service.title} content={service.content} link={service.link} icon={service.icon} />)}
        </section>
      </FadeUpOnScroll>
    </div>
  </div>
  )
}