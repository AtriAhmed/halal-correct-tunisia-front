import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Locations from "../../components/LocationsPack/Locations"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/lab_1.jpg)] bg-cover bg-center"></div>
      <Locations />
      <HalalProducer />
      <FadeUpOnScroll>
        <iframe
          title="halal correct location"
          style={{ border: "0", width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d104678.5222531902!2d4.486391247786665!3d52.1045934776677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c65fe50fdd81%3A0xb9c5b12ae8d99c5d!2sHalal%20Correct%20Certification!5e0!3m2!1sfr!2stn!4v1648082632734!5m2!1sfr!2stn"
          width="800"
          height="800"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </FadeUpOnScroll>
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Locations" />
