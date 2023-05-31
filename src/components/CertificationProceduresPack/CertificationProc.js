import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import HalalProducer from "../HalalProducer"

function CertificationProc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Applying for Halal Certification:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              The Halal Correct Foundation has designed a systematic procedure
              for halal certification (see figure below).
              <br />
              <br />
              All processes during the audit time is designed based on Halal
              Correct Quality manual which refers to ISO/IEC 17065:2012 and GSO
              2055-2021.
              <br />
              <br />
              In addition, there are also some consideration based on the size,
              the complexity, the scope, products and production processes in
              the company (client).
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Halal Correct Requirements:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              All organizations sign a cooperation agreement, in which the
              procedure for both parties is described in a clear, recognizable
              and verifiable manner. Halal Correct is internationally recognized
              and works according to the quality standard GSO 2055-2:2021 and
              ISO/IEC 17065:2012.
              <br />
              <br />
              Halal Correct therefore sets high standards for Halal
              Certification. The Halal Guidelines for Halal slaughter, meat
              processing, and process food procedures are laid down in the Halal
              Standard. This is available on request.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
      <HalalProducer />
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Halal correct certification scheme:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              The new edition of our certification procedure is available to all
              customers and partners. The Halal Correct Certification Scheme
              2021-2022 describes the most important aspects, definitions, and
              procedures in order to have an optimal preparation.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default CertificationProc
