import React from "react"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"
import serviceIcon01 from "../images/service-icon-01.png"
import serviceIcon02 from "../images/service-icon-02.png"
import serviceIcon03 from "../images/service-icon-03.png"
import serviceIcon04 from "../images/service-icon-04.png"
import { Link } from "gatsby"

export default function AboutUs() {
  return (
    <div className="w-full max-w-7xl mx-auto p-10">
      <FadeUpOnScroll>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 shadow-xl p-7 flex flex-col gap-4 justify-between">
            <div><img src={serviceIcon01} /></div>
            <div className="font-bold text-xl">Valeurs Fondamentales</div>
            <div className="text-sm">Engagement envers principes clés : Expertise, Orientation, Intégrité, Amélioration, Confiance.</div>
            <div className=""><Link to="/about" className="text-[#0F70B7] underline" >En savoir plus</Link></div>
          </div>
          <div className="col-span-3 shadow-xl p-7 flex flex-col gap-4 justify-between">
            <div><img src={serviceIcon02} /></div>
            <div className="font-bold text-xl">Notre Mission</div>

            <div className="text-sm">Halal QMS Center est la solution pour les industriels, les abattoirs, les restaurants et les hôtels qui font face à une transition vers le Halal</div>
            <div className=""><Link to="/about" className="text-[#0F70B7] underline" >En savoir plus</Link></div>
          </div>
          <div className="col-span-3 shadow-xl p-7 flex flex-col gap-4 justify-between">
            <div><img src={serviceIcon03} /></div>
            <div className="font-bold text-xl">Notre Equipe</div>

            <div className="text-sm">Notre équipe d'experts en gestion de la qualité Halal. Accompagnement personnalisé, expérience éprouvée.</div>
            <div className=""><Link to="/about" className="text-[#0F70B7] underline" >En savoir plus</Link></div>
          </div>
          <div className="col-span-3 shadow-xl p-7 flex flex-col gap-4 justify-between">
            <div><img src={serviceIcon04} /></div>
            <div className="font-bold text-xl">Halal QMS Center</div>
            <div className="text-sm">Vous guide vers la certification Halal , pour assurer le maintien de votre certificat avec le respect permanent des lois et des normes nationales et internationales.</div>
            <div className=""><Link to="/about" className="text-[#0F70B7] underline" >En savoir plus</Link></div>
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  )
}
