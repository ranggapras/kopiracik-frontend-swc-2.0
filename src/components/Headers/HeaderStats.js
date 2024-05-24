import React, { useState, useEffect } from "react";

// components
import { useDispatch, useSelector } from "react-redux";
import CardStats from "../../components/Cards/CardStats.js";
import { getSummary } from "views/admin/service/action.js";
import { getLogin } from "views/landing/service/action.js";
import currencyRegex from "utils/currencyRegex.js";
export default function HeaderStats() {
  const dispatch = useDispatch();
  const dataSummary = useSelector((state) => state.getSummary.data);

  const getLocal = useSelector((state) => state.getLogin);
  useEffect(() => {
    getLocal.isLogin && dispatch(getSummary({ token: getLocal.data.accessToken }));
  }, [dispatch]);
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL PENJUALAN HARIAN"
                  statTitle={dataSummary.hasOwnProperty("data") && currencyRegex(dataSummary.data.daily)}
                  // statArrow="up"
                  // statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Hari Ini"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL PENJUALAN BULANAN"
                  statTitle={dataSummary.hasOwnProperty("data") && currencyRegex(dataSummary.data.monthly)}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Bulan Ini"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="JUMLAH BARANG TERJUAL"
                  statTitle={dataSummary.hasOwnProperty("data") && parseInt(dataSummary.data.totaldaily)}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Hari Ini"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="JUMLAH BARANG TERJUAL"
                  statTitle={dataSummary.hasOwnProperty("data") && parseInt(dataSummary.data.totalmonthly)}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Bulan Ini"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
