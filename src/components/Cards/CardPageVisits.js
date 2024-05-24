import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import currencyRegex from "utils/currencyRegex";
import { getTransactions } from "views/admin/service/action";
import { useHistory } from "react-router";
import { putTransaction } from "views/admin/service/action";
import { getTransactionById } from "views/admin/service/action";

export default function CardPageVisits() {
  const history = useHistory();
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.getTransactions);
  const token = useSelector((state) => state.getLoginAdmin);
  // const dataDetail = useSelector((state) => state.getTransactionById.data);
  const [showModal, setShowModal] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);
  useEffect(async () => {
    console.log(token.data.accessToken);
    const res = await dispatch(getTransactions(token.data.accessToken));
    console.log(res);
    if (res.payload.code === 401) {
      return history.push("/auth");
    }
  }, [dispatch]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg min-h-screen-67">
        {showModal ? (
          <div className="w-full h-full flex absolute justify-center items-center z-99 ">
            <div className="justify-center bg-white h-full items-center w-full overflow-x-hidden    z-50 ">
              <div className=" flex  h-full">
                {/*content*/}
                <div className="border-0  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-50 rounded-t">
                    <h3 className="text-3xl font-semibold">Detail-{dataDetail.orderId}</h3>
                    <button
                      className="bg-transparent flex justify-center items-center text-white  font-bold uppercase text-xs   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                    </button>
                  </div>
                  {/*body*/}
                  {console.log(dataDetail)}
                  <div className="relative p-4 flex-auto ">
                    <h1 className="text-lg font-bold">Nama : {dataDetail.nameUser}</h1>
                    <h1 className="text-lg font-bold">Meja : {dataDetail.meja}</h1>
                    <h1 className="text-lg font-bold">Total : {currencyRegex(dataDetail.total)}</h1>
                    {dataDetail.carts.map((datCart) => {
                      return (
                        <div className="p-4 bg-blueGray-50 rounded-lg mt-4 shadow-lg">
                          <h1 className="text-xl font-bold ">{datCart.namaProduct}</h1>
                          <p>jumlah : {datCart.jumlah}</p>
                          <p>topping : {datCart.namaProduct}</p>
                          <p>deskripsi : {datCart.description}</p>
                        </div>
                      );
                    })}
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">Pesanan</h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Nama User</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No Hp</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Id Order</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total Harga</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Status</th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {transaction.data.code >= 201 &&
                transaction.data.data.map((dat, index) => {
                  const status = dat.statusTransaction;
                  return (
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{dat.nameUser}</th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{dat.phoneNumber}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{dat.orderId}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{currencyRegex(dat.total)}</td>
                      {dat.statusTransaction === 0 ? (
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex">
                          <i className="fas fa-circle text-amber-500 mr-2"></i> Belum Dibayar
                        </td>
                      ) : (
                        <></>
                      )}
                      {dat.statusTransaction === 1 ? (
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-emerald-500 mr-2"></i> Sukses
                        </td>
                      ) : (
                        <></>
                      )}
                      {dat.statusTransaction === 2 ? (
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button
                            className="bg-emerald-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={async () => {
                              const data = { status: 1 };
                              const res = await dispatch(putTransaction({ data: data, id: dat.idTransaction, token: token.data.accessToken }));
                              res.payload.code <= 201 && window.location.reload();
                            }}
                          >
                            Proses
                          </button>
                        </td>
                      ) : (
                        <></>
                      )}
                      {dat.statusTransaction === 3 ? (
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-circle text-red-500 mr-2"></i> Gagal
                        </td>
                      ) : (
                        <></>
                      )}
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={async () => {
                            setDataDetail(dat);
                            setShowModal(true);
                            // const res = await dispatch(getTransactionById({ id: dat.idTransaction, token: token.data.accessToken }));
                            // console.log(res.payload);
                            // res.payload.code <= 201 && setShowModal(true);
                          }}
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
