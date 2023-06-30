import React from "react"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"
import serviceIcon01 from "../images/service-icon-01.png"
import serviceIcon02 from "../images/service-icon-02.png"
import serviceIcon03 from "../images/service-icon-03.png"
import serviceIcon04 from "../images/service-icon-04.png"
import serviceIconHover01 from "../images/service-icon-hover-01.png"
import serviceIconHover02 from "../images/service-icon-hover-02.png"
import serviceIconHover03 from "../images/service-icon-hover-03.png"
import serviceIconHover04 from "../images/service-icon-hover-04.png"
import AboutCard from "./NewHomePage/About/AboutCard"

const data = [
  {
    img: serviceIcon01,
    hoverImg: serviceIconHover01,
    title: "Valeurs Fondamentales",
    content: "Engagement envers principes clés : Expertise, Orientation, Intégrité, Amélioration, Confiance."
  },
  {
    img: serviceIcon02,
    hoverImg: serviceIconHover02,
    title: "Notre Mission",
    content: "Halal QMS Center est la solution pour les industriels, les abattoirs, les restaurants et les hôtels qui font face à une transition vers le Halal"
  },
  {
    img: serviceIcon03,
    hoverImg: serviceIconHover03,
    title: "Notre Equipe",
    content: "Notre équipe d'experts en gestion de la qualité Halal. Accompagnement personnalisé, expérience éprouvée."
  },
  {
    img: serviceIcon04,
    hoverImg: serviceIconHover04,
    title: "Halal QMS Center",
    content: "Vous guide vers la certification Halal , pour assurer le maintien de votre certificat avec le respect permanent des lois et des normes nationales et internationales."
  },
]

export default function AboutUs() {
  return (
    <div className="w-full max-w-7xl mx-auto p-10">
    <FadeUpOnScroll>
      <div className="grid grid-cols-12 gap-4">
        {data.map(card => <AboutCard img={card.img} hoverImg={card.hoverImg} title={card.title} content={card.content} />)}
      </div>
    </FadeUpOnScroll>
  </div>
  )
}
