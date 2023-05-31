import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function AnimalWalefare() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Animal welfare:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              The welfare of the animals that are intended for halal slaughter
              is a very important part of the traditional halal certification
              procedure of Halal Correct certification. The traditional and
              ritual halal slaughter system demands a holistic approach to make
              sure that all the traditionally halal-slaughtered meat complies
              with the high standards of animal welfare. In addition, the
              traditionally halal-trained supervisors and technical auditors
              will work closely with the traditional halal-certified
              slaughterhouses to ensure that the Tayyib (health) element of
              halal is carried out properly. This will provide safe and
              high-quality meat and it safeguards the standards for animal
              welfare. Halal Correct Certification is also part of the committee
              for slaughtering without the use of stunning or anesthetics, which
              was established by the Dutch government to safeguard the animal
              welfare during halal slaughtering.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default AnimalWalefare
