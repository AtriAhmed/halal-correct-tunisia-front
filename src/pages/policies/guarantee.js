import React from "react"
import AnimalWalefare from "../../components/GuaranteePack/AnimalWalefare"
import GuaranteeDesc from "../../components/GuaranteePack/GuaranteeDesc"
import GuaranteeTabs from "../../components/GuaranteePack/GuaranteeTabs"
import HalalGuarantee from "../../components/GuaranteePack/HalalGuarantee"
import ProtectServices from "../../components/GuaranteePack/ProtectServices"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/factory_1.jpg)] bg-cover bg-center"></div>

      <GuaranteeDesc />
      <ProtectServices />
      <GuaranteeTabs />
      <HalalProducer />
      <HalalGuarantee />
      <AnimalWalefare />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => (
  <Seo
    title="Halal guarantee"
    description="We use a structural procedure to select, train and authorize our auditor and Islamic Affair Expert to do the audit."
  />
)
