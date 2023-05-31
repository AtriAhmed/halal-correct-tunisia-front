import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"
import { useState } from "react"

function PartnershipsTab() {
  const [currentTab, setCurrentTab] = useState("tab1")

  return (
    <div className="w-full">
      <div className="w-full px-4 scr800:px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold  text-3xl scr800:text-4xl text-center scr800:text-left text-[#0F70B7] capitalize transition-all duration-1000 ">
            Recognitions and partnerships :
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll className="pt-8">
          <Tabs
            value="tab1"
            className="halalTabs flex flex-col scr800:flex-row gap-3 scr800:gap-0 font-poppins font-medium"
          >
            <TabsHeader className="scr800:w-max scr800:max-w-[300px] scr800:mr-6 p-0 scr800:border-r-2 border-[#0F70B7] rounded-none flex flex-col text-center scr800:text-left">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={` cursor-pointer p-2`}
                  onClick={() => setCurrentTab(value)}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="text-justify">
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="py-0">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default PartnershipsTab

const data = [
  {
    label: "Accreditation and partnerships",
    value: "tab1",
    desc: (
      <>
        The Halal Correct Certification Foundation (TQ HCC) is accredited and
        recognized by many international Islamic authorities and is supervised
        by the independent Islamic Council for Fatwa and Research in the
        Netherlands (The Islamic Board for Fatwa & Research in the Netherlands –
        IBFR). The Islamic Board for Fatwa & Research represents the four
        largest Islamic law schools and maintains close contact with relevant
        Islamic institutions in Europe and worldwide. Food technology;
        Foundation TQ HCC makes use of the expertise of specialized food
        agencies such as Eurofins Food & Feed Testing (International) and
        Scienta Nova in the Netherlands for research and laboratory services.
      </>
    ),
  },
  {
    label: "Unique in international halal accreditations",
    value: "tab2",
    desc: (
      <>
        Halal Correct Certification works in compliance with the internationally
        recognized halal guidelines based on the quality management system ISO
        9001:2015/ EC 17065:2012 and EC 19011:2011. To provide additional
        transparency and halal guarantee, it is our goal to obtain a broad
        international recognition.
      </>
    ),
  },
]
