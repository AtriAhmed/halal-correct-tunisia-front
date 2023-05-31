import React from "react"
import Apply from "../../components/ContactPack/Apply"
import Seo from "../../components/seo"

function index() {
  return (
    <div className="w-full min-h-screen px-3 py-6 flex items-center justify-center relative  before:absolute before:inset-0 before:z-[-1] before:bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(163,250,238,1)_100%)] before:bg-cover before:bg-center">
      <Apply />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Apply" />
