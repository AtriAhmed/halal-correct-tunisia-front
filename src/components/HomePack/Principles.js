import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function Principles() {
  return (
    <div className="w-full bg-[#f9f9f9] relative">
      <div className="absolute bg-[url(./images/services-right-dec.png)] w-[1136px] h-[244px] right-0"></div>
      <div className="flex justify-center items-center max-w-xl mx-auto text-center text-lg">
        <FadeUpOnScroll>
          <section className="flex flex-col gap-4 justify-center items-center py-24">
            <div className="font-bold text-3xl">Tout Le Monde <span className="text-[#4b8ef1]">A Le Droit</span> De</div>
            <div className="flex gap-1"><div className="h-1 w-5 bg-[#4b8ef1]"></div><div className="h-1 w-5 bg-[#4b8ef1]"></div></div>
            <div>consommer des produits confirmés Halal, utiliser des produits cosmétique halal, passer leurs vacances dans des hôtels qui respectent le tourisme familial et travailler avec des banques islamiques dans les pays musulmans, en Europe et dans le monde. C'est pourquoi Halal QMS Center a été engagé à améliorer continuellement son propre système de gestion de la qualité et à développer davantage le marché halal mondial</div>
          </section>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default Principles