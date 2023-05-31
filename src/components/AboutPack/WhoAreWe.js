import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function WhoAreWe() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-[#0F70B7] capitalize transition-all duration-1000">
            Who are we?
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              Halal Correct Certification provides certification of
              manufacturers and suppliers of halal products. With our experience
              of many years, Halal Correct Certification has a reputation for
              being a unique, professional,and expert organization in the
              Netherlands and Europe.
              <br />
              <br /> Halal Correct does not actively seek clients but is
              approached by different companies around Europe to do
              business.Over the past ten years, Halal Correct has become one of
              the most knowledgeable Halal organizations in Europe.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default WhoAreWe
