import React from "react"
import Seo from "../../components/seo"
import About from "../../components/AboutPack/About"
import Courses1 from '../../images/courses-01.jpg'

function index() {
  return (
    <>
      <About />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-4 flex flex-col justify-between p-10">
            <div className="border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center">Halal QMS Center</div>
            <div className="border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center">Notre mission</div>
            <div className="border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center">La mission Halal QMS Center</div>
            <div className="border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center">Notre équipe</div>
          </div>
          <div className="col-span-8 shadow-xl bg-white p-6">
            <div className="grid grid-cols-12 gap-4">

              <div className="col-span-5 flex items-center"><img src={Courses1} alt="" /></div>
              <div className="col-span-7 flex flex-col gap-4">
                <div className="font-bold text-xl">Notre équipe</div>
                Notre équipe de consultants possède une grande expérience dans l'accompagnement des clients vers la mise en œuvre réussie de leurs systèmes de gestion de la qualité Halal conformément aux normes et aux directives (d'évaluation). Ils ont de nombreuses années d'expérience pratique dans le domaine de la gestion de la qualité Halal grâce aux certificats de qualité correspondants..L'étude continue des problèmes des entreprises, depuis les difficultés d'application et d'interprétation des réglementations auxquelles elles s'adressent et auxquelles elles doivent se conformer , ont permis à Halal QMS Center d'acquérir une expérience de première importance en tant partenaire d’accompagnement reconnu au niveau national et international..

                Vous avez des différents processus et des différents produits/ligne de production/services ? Vous n’avez pas une cartographie des processus ??</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index

export const Head = () => <Seo title="Who are we" />
