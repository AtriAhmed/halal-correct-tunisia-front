import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function BasedOn() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            These religious precepts regarding food are based on:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>The Quran (the holy book of the Muslims).</li>
            <li>
              The Sunnah (the tradition and way of life of the Prophet
              Muhammad).
            </li>
            <li>The Consensus of the Muslim Community.</li>
            <li>
              Analogy, based on the primary sources of Islam as explained by
              recognized Islamic scholars
            </li>
          </ul>
          <p className="pt-6 font-open font-normal text-base text-center scr800:text-left text-slate-900">
            In daily life, food is a necessary part and thus these dietary laws
            also play an important role in the life of the Muslim. Halal is also
            an identity of conscious living. Halal therefore stands for quality,
            hygiene and lifestyle. (source: Ikeethalal.nl).
          </p>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default BasedOn
