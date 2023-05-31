import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function VisionDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Vision, mission and core values:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h3 className="pt-4 font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-sky-600 capitalize transition-all duration-1000 ">
            Our Vision:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="py-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              We believe that people have the right to consume reliable halal
              products, in the Netherlands as well as in Europe and the rest of
              the world. That is why we are committed to continuously improve
              our own quality management system. To achieve this, we are working
              more and more on an international level and we increasingly aim
              for international accreditation.
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-sky-600 capitalize transition-all duration-1000 ">
            Our Mission:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="py-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              The mission of Halal Correct is to assist people and organizations
              who want to consume certified halal products. We certify
              slaughterhouses and food processing industries around Europe, and
              we are experts when it comes to the application of the right
              processes of halal practices we certify and which are involved in
              the preparation, processing, handling, packaging, transportation,
              and distribution of food products.
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-sky-600 capitalize transition-all duration-1000 ">
            Core values:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              Halal Correct Certification has established a list of principles.
              These principles are guidelines for the determination of processes
              and work method. The 5 principles of trust and expertise,
              conscious integrity, improvements and continuous learning, and an
              objective approach are the building blocks of Halal Correct.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default VisionDesc
