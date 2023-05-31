import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function IntegrityPolicy() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Integrity policy:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center scr800:text-left text-slate-900">
            We do it all for the halal consumer, according to Halal Correct's
            motto. Employees at Halal Correct contribute to this philosophy,
            which is something to be proud of. The four additional work concepts
            that Halal Correct has particularly named as being the cornerstone
            of Halal Correct are "Confidence in workmanship," "Consciously
            ethical," "Improving and learning continuously," and "Objective
            approach." Halal Correct must be trustworthy to consumers. In many
            ways, Halal consumers depend on the Halal review. The Halal Correct
            organization must be moral as a result. This calls for Halal Correct
            to conduct its business with integrity and dependability and to
            treat its customers fairly and respectfully.
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              Integrity and impartiality:
              <br />
              <br />
              Halal Correct Certification (Halal Correct Certification)
              guarantees its impartiality policy and confidentiality with
              respect to the delivery of all our services. The Halal Correct
              Certification managers and auditors are thoroughly screened and
              trained to ensure their integrity, impartiality, and
              confidentiality. The Executive Board and employees of Halal
              Correct Certification have no personal connections with the
              companies we certify, nor do they have any commercial or financial
              interest in our certified companies.
              <br />
              <br />
              All information about our financial and operational transactions
              with our clients are recorded, and such records are also available
              for inspection by our independent impartiality and confidentiality
              committee.
            </li>
            <li className="pt-3">
              Commission to guarantee Impartiality and Confidentiality:
              <br />
              <br />
              The Halal Correct Certification Foundation is supervised by an
              independent committee of balanced representation of interested
              stakeholders in the sector who test and guarantee the impartiality
              and confidentiality of the organization.
              <br />
              <br />
              To read more kindly{" "}
              <a
                href="https://halalcorrect.com/integritypolicies/document/view/The%20importance%20of%20a%20Halal%20Correct%20organization%20that%20has%20integrity.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                click here
              </a>
              .
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default IntegrityPolicy
