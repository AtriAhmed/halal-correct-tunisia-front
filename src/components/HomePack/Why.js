import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { useUIToolsContext } from "../../contexts/UIToolsProvider"
import ZoomInOnScroll from "../../lib/ZoomInOnScroll"

function Why() {
  const { setVideoOpen } = useUIToolsContext()

  return (
    <div
      className={`min-h-screen w-full whyBackground relative flex items-center justify-center`}
    >
      <div className="absolute h-full overflow-hidden pointer-events-none">

        <div className="aspect-[1826/915] min-w-full min-h-full relative z-[-1] top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <video autoPlay loop muted>
            <source src="/output.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <ZoomInOnScroll className="w-full">
        <div className="w-full max-w-w1300 m-auto px-8 py-32 flex flex-col scr1000:flex-row">
          <div className="w-full scr1000:w-1/2 flex flex-col gap-6 scr1000:gap-12 items-center scr1000:items-start">
            <h1 className="capitalize font-poppins font-bold text-white text-3xl transition-all duration-1000 scr1000:text-5xl text-center scr1000:text-left">
              <div className="text-[#0F70B7] text-start">Halal QMS Center</div>
              <span className="block text-start">Vous guider vers la certification Halal</span>
            </h1>
            <Link
              to="/about"
              className="uppercase font-poppins font-semibold text-md text-white rounded-full border-2 border-[#0F70B7] px-5 py-1 bg-transparent hover:bg-[#0F70B7] transition duration-500"
            >
              En savoir plus
            </Link>
          </div>
          <div className="w-full scr1000:w-1/2 flex items-center justify-center">
            <button
              style={{ backgroundImage: "radial-gradient(circle, rgba(15,112,183,1) 50%, rgba(15,112,183,0.4) 52%)" }}
              className="group hover:scale-125 transition duration-300 w-20 h-20 my-10 rounded-[50%] flex items-center justify-center "
              onClick={() => setVideoOpen(true)}
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-white group-hover:scale-125 translate-x-[3px] transition duration-300"
                size="2x"
              />
            </button>
          </div>
        </div>
      </ZoomInOnScroll>
    </div>
  )
}

export default Why
