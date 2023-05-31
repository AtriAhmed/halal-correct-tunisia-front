import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"
import AuditingServices from "../../components/ServicesPack/AuditingServices"
import QuickScan from "../../components/ServicesPack/QuickScan"
import TrainingService from "../../components/ServicesPack/TrainingService"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/doctor_1.jpg)] bg-cover bg-center"></div>

      <FadeUpOnScroll>
        <h3 className="w-full px-8 pt-10 max-w-w1300 mx-auto font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
          Vision, mission and core values:
        </h3>
      </FadeUpOnScroll>
      <QuickScan />
      <AuditingServices />
      <HalalProducer />
      <TrainingService />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Services" />
