import React, { useEffect } from "react";
// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import HeaderStats from "components/Headers/HeaderStats";

export default function Dashboard() {
  useEffect(() => {}, []);

  return (
    <>
      <HeaderStats />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap mt-4">
          <div className="w-full  mb-12 xl:mb-0 px-4 ">
            <CardPageVisits />
          </div>
        </div>
      </div>
    </>
  );
}
