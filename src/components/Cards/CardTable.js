import React, { useEffect } from "react";
import PropTypes from "prop-types";
import currencyRegex from "utils/currencyRegex.js";

// components
import { getProducts } from "../../views/Menu/service/action.js";
import TableDropdown from "../../components/Dropdowns/TableDropdown.js";

import { useSelector, useDispatch } from "react-redux";
import { data } from "autoprefixer";

export default function CardTable({ color }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProducts.data);
  const admin = useSelector((state) => state.getLoginAdmin.data);
  useEffect(async () => {
    const res = await dispatch(getProducts(admin.accessToken));
    console.log(res);
  }, [dispatch]);
  return (
    <>
      <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={"font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white")}>Menu</h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Nama
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Harga Jual
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Harga Beli
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {products.hasOwnProperty("code") &&
                (products.code === 200 ? (
                  products.data.map((dat, index) => {
                    return (
                      <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img src={dat.photo} className="h-12 w-12 bg-white rounded-full border" alt="..."></img> <span className={"ml-3 font-bold " + +(color === "light" ? "text-blueGray-600" : "text-white")}>{dat.namaProduct}</span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-emerald-500 mr-2"></i>
                          {currencyRegex(dat.hargaJual)}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-red-500 mr-2"></i> {currencyRegex(dat.hargaBeli)}
                        </td>

                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          <TableDropdown idProduct={dat.idProduct} />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <></>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
