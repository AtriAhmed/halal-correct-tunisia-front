import React, { useState } from "react"
import Seo from "../../components/seo"
import About from "../../components/AboutPack/About"
import TeamImage from '../../images/notre-equipe.jpg'
import MissionImage from '../../images/mission.jpg'
import NewAboutCard from "../../components/NewAboutPage/NewAboutCard"

const data = [
  {
    title: "Accompagnement vers la certification Halal ",
    content: "Vous guide vers la certification Halal, pour assurer le maintien de votre certificat avec le respect permanent des lois, des réglementations et des normes nationales et internationales. En tant que partenaire d’accompagnement, nous réfléchissons de manière proactive à la résolution de divers problèmes grâce à notre vision transversale de vos projets. .La mission de Halal QMS Center ne se limite pas à valider la conformité aux normes nationales et internationales.mais consiste à travailler en étroite collaboration avec les clients dans le but de réduire les coûts de l’entreprise, en minimisant les risques liés à une gestion non contrôlée des processus...",
    img: MissionImage
  },
  {
    title: "Notre équipe",
    content: "Notre équipe de consultants possède une grande expérience dans l'accompagnement des clients vers la mise en œuvre réussie de leurs systèmes de gestion de la qualité Halal conformément aux normes et aux directives (d'évaluation). Ils ont de nombreuses années d'expérience pratique dans le domaine de la gestion de la qualité Halal grâce aux certificats de qualité correspondants..L'étude continue des problèmes des entreprises, depuis les difficultés d'application et d'interprétation des réglementations auxquelles elles s'adressent et auxquelles elles doivent se conformer, ont permis à Halal QMS Center d'acquérir une expérience de première importance en tant partenaire d’accompagnement reconnu au niveau national et international.. Vous avez des différents processus et des différents produits/ligne de production/services ? Vous n’avez pas une cartographie des processus ??",
    img: TeamImage
  }
]

export default function Index() {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <About />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 sm:gap-20">
          <div className="col-span-12 sm:col-span-4 flex sm:flex-col  gap-4 p-5 sm:p-10 text-sm sm:text-xl">
            <div className={` transition duration-300 border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold p-4 text-center cursor-pointer ${selected == 0 ? 'bg-[rgb(15,112,183)] text-white' : 'text-[rgb(15,112,183)]'}`} onClick={() => setSelected(0)}>Accompagnement vers la certification Halal</div>
            <div className={` transition duration-300 border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold p-4 text-center cursor-pointer ${selected == 1 ? 'bg-[rgb(15,112,183)] text-white' : 'text-[rgb(15,112,183)]'}`} onClick={() => setSelected(1)}>Notre équipe</div>
          </div>
          <NewAboutCard title={data[selected].title} content={data[selected].content} img={data[selected].img} />
        </div>
      </div>
    </>
  )
}

export const Head = () => <Seo title="Who are we" />
