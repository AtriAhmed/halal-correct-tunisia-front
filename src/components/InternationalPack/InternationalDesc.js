import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function InternationalDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            International approval:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              Did you know that Halal Correct Certification is the Halal
              organization with the most international approvals in Europe?
              <br />
              <br />
              The Halal Correct Certification Foundation (TQ HCC) is accredited
              and recognized by many international Islamic authorities and is
              supervised by the independent Islamic Council for Fatwa and
              Research in the Netherlands (The Islamic Board for Fatwa &
              Research in the Netherlands). The Imams of the Islamic Council for
              Fatwa and Research are representatives of the four largest Islamic
              law schools.
              <br />
              <br />
              Halal Correct has obtained the following recognitions: MUI -
              Indonesia, JAKIM- Malaysia, MUIS- Singapore, GCC - Accreditation
              centre, United Arab Emirates ESMA, Gimdes...
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default InternationalDesc
