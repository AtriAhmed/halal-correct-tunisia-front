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

function GuaranteeTabs() {
  const [currentTab, setCurrentTab] = useState("tab1")

  return (
    <div className="w-full">
      <div className="w-full px-4 scr800:px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold  text-3xl scr800:text-4xl text-center scr800:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Halal Correct Certification has drawn up a number of principles:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll className="pt-8">
          <Tabs
            value="tab1"
            className="halalTabs flex flex-col scr800:flex-row gap-3 scr800:gap-0 font-poppins font-medium"
          >
            <TabsHeader className="scr800:w-max scr800:max-w-[300px] scr800:mr-6 p-0 scr800:border-r-2 border-teal-500 rounded-none flex flex-col text-center scr800:text-left">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={` cursor-pointer p-2 `}
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

export default GuaranteeTabs

const data = [
  {
    label: "Use of the Halal Correct logo",
    value: "tab1",
    desc: (
      <>
        Halal Correct logo is registered at Benelux office for Intellectual
        Property. Any kinds of use for our logo need to be communicated with us.
        The third parties is allowed to use the logo only if Halal Correct has
        given its written consent.
        <br />
        <br />
        The use of the logo on packaging is only allowed for clients who have a
        contract with Halal Correct Certification and who were given written
        consent which includes a description of where, how, and for which
        product groups the logo can be used.
      </>
    ),
  },
  {
    label: "Halal Correct certificates",
    value: "tab2",
    desc: (
      <>
        The issuance of halal certificates can be done after all certification
        procedure have been passed by the company/client. The contract also
        needs to be signed before the certification begins. The member of the
        Executive Board and the chairman of the Sharia/religious council will be
        two authorized parties who will sign and validate the contract.
        <br />
        <br />
        The Halal Correct certificates are intended for the clients and their
        customers to guarantee the dignity of the halal products. It is strictly
        prohibited to use the Halal Correct certificates as proof of halal
        dignity in restaurants and in shops/retail branch.
      </>
    ),
  },
]
