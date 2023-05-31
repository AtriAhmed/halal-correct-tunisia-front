import React from "react"
import Complaint from "../../components/ContactPack/Complaint"
import Seo from "../../components/seo"

function index() {
  return (
    <div className="w-full min-h-screen px-3 py-6 flex items-center justify-center relative bg-[rgb(255,255,255,.7)] before:absolute before:inset-0 before:z-[-1] before:bg-[url(./images/fruits.jpg)] before:bg-cover before:bg-center">
      <Complaint />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Complaint" />
