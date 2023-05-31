import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Seo from "../../components/seo"
import Structure from "../../components/StructurePack.js/Structure"
import structure1 from "../../images/structure_1.jpg"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function structure() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/storage_1.jpg)] bg-cover bg-center"></div>
      <Structure />
      <HalalProducer />
      <FadeUpOnScroll>
        <img src={structure1} alt="Structure" className="mx-auto py-10" />
      </FadeUpOnScroll>
    </div>
  )
}

export default structure

export const Head = () => <Seo title="Company structure" />
