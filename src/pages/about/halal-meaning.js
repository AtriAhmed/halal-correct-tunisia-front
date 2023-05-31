import React from "react"
import HalalProducer from "../../components/HalalProducer"
import BasedOn from "../../components/MeaningPack/BasedOn"
import MeaningDesc from "../../components/MeaningPack/MeaningDesc"
import MeaningFeatures from "../../components/MeaningPack/MeaningFeatures"
import MeaningTabs from "../../components/MeaningPack/MeaningTabs"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/lab_1.jpg)] bg-cover bg-center"></div>
      <MeaningDesc />
      <BasedOn />
      <HalalProducer />
      <MeaningTabs />
      <MeaningFeatures />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => (
  <Seo
    title="Halal meaning"
    description="Halal means Permissible. Related to food, it is the permissible food to be consumed based on Islamic rule. It does not only focus on an end-product, but also to all actions take place prior the delivery to our table."
  />
)
