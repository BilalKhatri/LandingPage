import React from "react";
import Title from "../Component/SecTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swiper1 from "./Swiper1";
import Swiper2 from "./Swiper2";
import Swiper3 from "./Swiper3";
import Swiper4 from "./Swiper4";
import Swiper5 from "./Swiper5";

export default function ServicesTabs() {
  return (
    <>
      <div className="publishing-tabs">
        <div className="container">
          <div className="sectophead">
            <Title
              title={[
                "We Go ",
                <span className="yello-bold">Beyond Publishing</span>,
                ". A Book So You Can Reach Heights.",
                <span className="yello-bold">Portfolio</span>,
                "Says It All!",
              ]}
              subheading="Have a look at our portfolio and decide the best for your book. At Pearson Book Publishers, we put YOU first, expanding our portfolio so you do not have to pause at any step."
            />
          </div>
        </div>

        <div className="services-tabs">
          <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
            <TabList>
              <Tab>Fiction</Tab>
              <Tab>Non-Fiction</Tab>
              <Tab>Biography</Tab>
              <Tab>Children’s Book</Tab>
              <Tab>Informative</Tab>
            </TabList>

            <TabPanel>
            <Swiper1/>
            </TabPanel>
            <TabPanel>
            <Swiper2/>
            </TabPanel>
            <TabPanel>
            <Swiper3/>
            </TabPanel>
            <TabPanel>
            <Swiper4/>
            </TabPanel>
            <TabPanel>
            <Swiper5/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
