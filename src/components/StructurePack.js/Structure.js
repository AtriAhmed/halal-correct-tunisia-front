import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function Structure() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Company structure:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-center scr800:text-left text-slate-900">
              Mr. Ben Ali-Salah is founder of Halal Correct Certification and is
              one of the leading pioneers in the Halal food market in the
              Netherlands and Europe.
              <br />
              <br /> Our departments work daily on achieving the organizational
              goals, with the purpose to make Halal food accessible to everyone.
              The organization chart below shows a simple representation of the
              departments in the organization. The blue lines represent external
              departments.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default Structure
