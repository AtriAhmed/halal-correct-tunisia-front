import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { useEffect } from "react"
import { useUIToolsContext } from "../contexts/UIToolsProvider"
import Dropdown from "../lib/Dropdown"

function Navbar({ location }) {
  const { setMobileNavbarOpen } = useUIToolsContext()

  return (
    <div className="fixed z-[100] w-full bg-[rgba(0,0,0,.45)]">
      <div className="w-full max-w-w1300 flex items-center justify-between m-auto px-3 py-4">
      <Link to="/">
          <h2 className="font-bold uppercase font-poppins text-xl scr1100:text-3xl text-center text-white transition-all duration-300">
            HALAL QMS
            <span className="scr600:hidden">
              <br />
            </span>{" "}
            CENTER
          </h2>
        </Link>
        <button
          className="min-[950px]:hidden"
          onClick={() => setMobileNavbarOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-white" size="2x" />
        </button>
        <ul className="hidden min-[950px]:flex gap-4 text-sm list-none">
          <li
            className={`py-2 font-open font-normal transition duration-300 ${location?.pathname === "/"
              ? "text-[#0F70B7]"
              : "text-white hover:text-[#a1d3f7]"
              }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li className={`py-2 font-open font-normal transition duration-300 ${location?.pathname.indexOf("/about") === 0
            ? "text-[#0F70B7]"
            : "text-white hover:text-[#a1d3f7]"
            }`} >
            <Link to="/about">À propos</Link>
          </li>
          <li className={`py-2 font-open font-normal transition duration-300 ${location?.pathname.indexOf("/work-method") === 0
            ? "text-[#0F70B7]"
            : "text-white hover:text-[#a1d3f7]"
            }`} >
            <Link to="/our-mission">Notre mission</Link>
          </li>
          <li className={`py-2 font-open font-normal transition duration-300 ${location?.pathname.indexOf("/services") === 0
            ? "text-[#0F70B7]"
            : "text-white hover:text-[#a1d3f7]"
            }`} >
            <Link to="/services">Nos services</Link>
          </li>
          <li>
            <Dropdown
              {...contactItems}
              path="/contact"
              active={location?.pathname.indexOf("/contact") === 0}
            />
          </li>
        </ul>
        <Link
          to="/contact/apply"
          className="px-5 py-2 border-2 border-[#0F70B7] rounded-full hidden min-[950px]:block font-open font-normal text-sm text-white uppercase hover:bg-[#0F70B7] transition duration-500"
        >
          APPLIQUER
        </Link>
      </div>
    </div>
  )
}

export default Navbar

const policiesItems = {
  title: "Nos Services",
  items: [
    {
      text: "Quickscan",
      path: "/services/quickscan",
    },
    {
      text: "Formation sur mesure",
      path: "/services/quickscan",
    },
    {
      text: "Services d'audit interne",
      path: "/services/internal-audit",
    },
    {
      text: "Presentation de service",
      path: "/services/internal-audit",
    },
    {
      text: "Gestion de processus",
      path: "/services/internal-audit",
    },
  ],
}

const contactItems = {
  title: "contact",
  items: [
    {
      text: "Demande d'information",
      path: "/contact/information",
    },
    {
      text: "Feedback",
      path: "/contact/feedback",
    },
    {
      text: "Réclamation",
      path: "/contact/complaint",
    },
    {
      text: "Vérification du certificat",
      path: "/contact/check",
    }
  ],
}
