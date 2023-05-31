import { Link } from "gatsby"
import React from "react"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"

function HalalProducer() {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl py-10 mx-auto px-8">
        <FadeUpOnScroll>
          <section className="mx-auto px-5 scr1000:px-20 py-10 border border-[#0F70B7] rounded-[80px] relative before:border-4 before:border-[#0F70B7] before:rounded-[85px] before:absolute before:inset-[-7px] before:z-[-1]">
            <h3 className="pb-4 px-6 font-poppins font-normal text-xl scr800:text-2xl text-center text-[#0F70B7]">
              Are you a Halal producer or Halal supplier?
              <br /> if you are interested in the international Halal
              certifications
            </h3>
            <Link
              to="/contact/apply"
              className="w-fit mx-auto block font-poppins font-semibold text-md text-white rounded-full border-2 border-[#0F70B7] px-5 py-1 bg-[#0F70B797] hover:bg-[#0F70B7] transition duration-500 uppercase"
            >
              Apply now
            </Link>
          </section>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default HalalProducer
