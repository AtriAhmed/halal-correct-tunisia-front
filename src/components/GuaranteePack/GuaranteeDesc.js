import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function GuaranteeDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Halal Correct Quality guarantee:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              The guarantee for quality and continuity plays a pivotal concern
              at Halal correct system. We use a structural procedure to select,
              train and authorize our auditor and Islamic Affair Expert to do
              the audit. We also focus on investing our team to help us reach
              our goals in the future.
              <br />
              <br />
              The Halal Correct Certification activities are according to ISO
              17065, ISO 17021:1-2012 and Gulf standard 2055:2-2021 to ensure
              the quality and services we provide for our clients. This is why
              Halal Correct Certification will always be striving to improve its
              own quality management.
              <br />
              <br />
              Our lead auditors are continuously working through traineeships to
              develop and to train different auditors for different scope
              application areas, so our auditors with the right knowledge will
              be more widely employable. All auditors are in possession of ISO
              19011 quality standard (auditing and audit techniques).
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default GuaranteeDesc
