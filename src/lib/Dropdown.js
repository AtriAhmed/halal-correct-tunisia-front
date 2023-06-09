import { Transition } from "@headlessui/react"
import React, { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

function Dropdown({ title, path = "", items, active }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  function handleMouseEnter(e) {
    setIsOpen(true)
  }

  function handleMouseLeave() {
    setIsOpen(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <button
        className={`py-2 relative font-open font-normal capitalize transition duration-300 before:w-full before:h-[20px] before:absolute before:top-[95%] ${isOpen ? "before:block" : "before:hidden"
          }  ${active ? "text-[#0F70B7]" : "text-white hover:text-[#a1d3f7]"}`}
        ref={dropdownRef}
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-2 text-sm transition duration-300 ${isOpen ? "-rotate-180" : ""
            }`}
        />
      </button>

      <Transition
        show={isOpen}
        enter="transition duration-300"
        enterFrom="translate-y-[30px] opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition duration-300"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-[30px] opacity-0"
      >
        <ul className="w-max max-w-[200px] p-4 rounded shadow absolute top-full left-[-20px] bg-white translate-y-[10px] list-none">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path || ""}
                className="p-1 rounded block font-normal hover:text-[#0F70B7] transition duration-300"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  )
}

export default Dropdown
