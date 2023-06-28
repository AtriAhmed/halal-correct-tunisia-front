import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import footerBG from "../images/footer-bg.jpg"

function Footer() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1600px] mx-auto px-8 pt-10 flex flex-col gap-4 mb-4">
        <section className="px-8 scr1000:px-20 py-10 border-2 border-[#0F70B7] rounded-lg grid grid-cols-1 scr600:grid-cols-2 scr1100:grid-cols-4 gap-6 relative before:border-2 before:border-[#0F70B7] before:rounded-xl before:absolute before:inset-[-7px] before:z-[-1]">
          <div>
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#0F70B7] uppercase">
              HALAL CORRECT CERTIFICATION
            </h3>
            <ul className="font-poppins font-light text-sm">
              <li>
                <span className="font-semibold">Adresse: </span>
                immeuble new Tower - centre urbain nord – Tunis
              </li>
              <li>
                <span className="font-semibold">P.: </span>
                <a
                  href="tel:+31 71 523 57 70"
                  className="text-blue-500 hover:text-[blue-700] transition duration-300"
                >
                  (+216) 29503804
                </a>
              </li>
              <li>
                <span className="font-semibold">F.: </span>
                <a
                  href="tel:+31 71 523 57 70"
                  className="text-blue-500 hover:text-[blue-700] transition duration-300"
                >
                  (+216) 71734580
                </a>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:info@halalcorrect.com"
                  className="text-[#0F70B7] hover:text-blue-700 transition duration-300"
                >
                   halalQMS@halalcorrect.com
                </a>
                <a
                  href="mailto:info@halalcorrect.com"
                  className="text-[#0F70B7] hover:text-blue-700 transition duration-300"
                >
                   Office@halaqmscenter.com
                </a>
              </li>
            </ul>
            <div className="mt-3 flex gap-2 flex-wrap">
              <a
                href="https://twitter.com/CorrectHalal?fbclid=IwAR2b53dwdUFMs7ceU1D4C-2CCLJ4MeLU3oVVktobGD_UrhEUO3rIsJRB-sM"
                className="w-10 h-10 rounded-[50%] flex items-center justify-center bg-[#0F70B7] hover:bg-teal-600 transition duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white"
                  size="lg"
                />
              </a>
              <a
                href="https://www.facebook.com/HalalCorrect/"
                className="w-10 h-10 rounded-[50%] flex items-center justify-center bg-[#0F70B7] hover:bg-teal-600 transition duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white"
                  size="lg"
                />
              </a>
              <a
                href="https://www.instagram.com/halalcorrectcertification/?fbclid=IwAR1U7smeVmtDIcihlAYncNIu51CquhDowjm699XGB6iXHn4plsjSJQuoUfc"
                className="w-10 h-10 rounded-[50%] flex items-center justify-center bg-[#0F70B7] hover:bg-teal-600 transition duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white"
                  size="lg"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/tqhcc-halalcorrectcertification/"
                className="w-10 h-10 rounded-[50%] flex items-center justify-center bg-[#0F70B7] hover:bg-[#0F70B7] transition duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-white"
                  size="lg"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#0F70B7] uppercase">
              Liens Utiles
            </h3>
            <ul className=" font-poppins font-normal text-sm flex flex-col gap-4">
              {usefulLinks.map(element => (
                <li
                  key={element.text}
                  className="text-black hover:text-blue-500 transition duration-300"
                >
                  {"> "}
                  <Link to={element.path}>{element.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="pb-4 font-poppins font-semibold text-xl text-[#0F70B7] uppercase">
              Nos Services
            </h3>
            <ul className="font-poppins font-normal text-sm flex flex-col gap-4">
              {contactLinks.map(element => (
                <li
                  key={element.text}
                  className="text-black hover:text-blue-500 transition duration-300"
                >
                  {"> "}
                  <Link to={element.path}>{element.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/qms.png"
              alt="halal correct logo"
              className="w-full max-w-[300px]"
            />
          </div>
        </section>
        <p className="py-5 mx-auto font-poppins font-light text-lg text-white text-center w-full" style={{ backgroundImage: `url(${footerBG})` }}>
          © Copyright{" "}
          <span className="font-semibold">Halal Correct Certification.</span>{" "}
          All Rights Reserved Powered by CODA-TECH
        </p>
      </div>
    </div>
  )
}

export default Footer

const usefulLinks = [
  {
    text: "A propos",
    path: "/about",
  },
  {
    text: "Certification",
    path: "/work-method",
  },
  {
    text: "Nos services",
    path: "/services/internal-audit",
  }
]
const contactLinks = [
  {
    text: "Quick Scan",
    path: "/services/quickscan",
  },
  {
    text: "Service d'audit en ligne",
    path: "/services/internal-audit",
  },
  {
    text: "Gestion de processus",
    path: "/services/internal-audit",
  }
]
