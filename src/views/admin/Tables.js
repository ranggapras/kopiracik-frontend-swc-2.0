import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import HeaderStats from "components/Headers/HeaderStats";
export default function Tables() {
  return (
    <>
      {/* <HeaderStats  /> */}
      <div className="px-4 md:px-10 mx-auto w-full m-24">
        <div className="flex flex-wrap pt-12">
          <div className="w-full mb-12 px-4">
            <CardTable />
          </div>
          {/* <div className="w-full mb-12 px-4">
            <CardTable color="dark" />
          </div> */}
        </div>
      </div>
    </>
  );
}
