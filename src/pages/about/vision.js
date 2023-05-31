import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Seo from "../../components/seo"
import VisionDesc from "../../components/VisionPack/VisionDesc"
import vision1 from "../../images/vision_1.png"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function vision() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/lab_1.jpg)] bg-cover bg-center"></div>
      <VisionDesc />
      <FadeUpOnScroll>
        <img
          src={vision1}
          alt="vision"
          className="w-full max-w-[600px] m-auto py-10"
        />
      </FadeUpOnScroll>
      <HalalProducer />
    </div>
  )
}

export default vision

export const Head = () => <Seo title="Vision" />
