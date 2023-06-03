import React, { useState } from "react"
import Seo from "../../components/seo"
import About from "../../components/AboutPack/About"
import Courses1 from '../../images/courses-01.jpg'
import NewAboutCard from "../../components/NewAboutPage/NewAboutCard"

const data = [
  {
    title: "Content 1",
    content: "Content 1",
    img: Courses1
  },
  {
    title: "Title 2",
    content: "Content 2",
    img: Courses1
  },
  {
    title: "Title 3",
    content: "Content 3",
    img: Courses1
  },
  {
    title: "Notre équipe",
    content: "Notre équipe de consultants possède une grande expérience dans l'accompagnement des clients vers la mise en œuvre réussie de leurs systèmes de gestion de la qualité Halal conformément aux normes et aux directives (d'évaluation). Ils ont de nombreuses années d'expérience pratique dans le domaine de la gestion de la qualité Halal grâce aux certificats de qualité correspondants..L'étude continue des problèmes des entreprises, depuis les difficultés d'application et d'interprétation des réglementations auxquelles elles s'adressent et auxquelles elles doivent se conformer , ont permis à Halal QMS Center d'acquérir une expérience de première importance en tant partenaire d’accompagnement reconnu au niveau national et international.. Vous avez des différents processus et des différents produits/ligne de production/services ? Vous n’avez pas une cartographie des processus ??",
    img: Courses1
  }
]

export default function Index() {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <About />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-4 flex flex-col gap-4 p-10">
            <div className={`transition duration-300 border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center cursor-pointer ${selected == 0 ? 'bg-[rgb(15,112,183)] text-white' : 'text-[rgb(15,112,183)]'}`} onClick={() => setSelected(0)} >Halal QMS Center</div>
            <div className={`transition duration-300 border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center cursor-pointer ${selected == 1 ? 'bg-[rgb(15,112,183)] text-white' : 'text-[rgb(15,112,183)]'}`} onClick={() => setSelected(1)}>Notre mission</div>
            <div className={`transition duration-300 border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center cursor-pointer ${selected == 2 ? 'bg-[rgb(15,112,183)] text-white' : 'text-[rgb(15,112,183)]'}`} onClick={() => setSelected(2)}>La mission Halal QMS Center</div>
            <div className={`transition duration-300 border-2 border-[rgb(15,112,183)] text-[rgb(15,112,183)] font-bold text-xl p-4 text-center cursor-pointer ${selected == 3 ? 'bg-[rgb(15,112,183)] text-white' : 'text-[rgb(15,112,183)]'}`} onClick={() => setSelected(3)}>Notre équipe</div>
          </div>
          <NewAboutCard title={data[selected].title} content={data[selected].content} img={data[selected].img} />
        </div>
      </div>
    </>
  )
}

export const Head = () => <Seo title="Who are we" />
