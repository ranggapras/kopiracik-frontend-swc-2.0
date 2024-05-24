import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/Navbars/IndexNavbar";
import { useSelector, useDispatch } from "react-redux";

import { getLogin } from "../landing/service/action";
import { deleteCart, addTransaction, getCart } from "./service/action";
import SpinnersRound from "../../components/Spinners/SpinnersRound";
import { useHistory } from "react-router-dom";
import currencyRegex from "../../utils/currencyRegex";
import { updateCart } from "./service/action";
import { data } from "autoprefixer";
const DetailPesanan = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.getCart);
  const getLocal = useSelector((state) => state.getLogin);
  const dataCarts = carts.data;
  const history = useHistory("./");

  const [nomorMeja, setNomor] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const cartDelete = async (id) => {
    if (window.confirm("Anda yakin?")) {
      const data = await dispatch(deleteCart({ token: getLocal.data.accessToken, data: id }));
      console.log(data);
      data.payload !== undefined && window.location.reload();
      // return
    } else {
      return false;
    }
  };
  const idCart = [];
  let total = 0;

  const bayar = async () => {
    const data = { idCart: idCart, total: total, meja: nomorMeja };
    console.log(data);
    const res = await dispatch(addTransaction({ data: data, token: getLocal.data.accessToken }));
    console.log(res);
    window.location.href = res.payload.data.url;
  };

  useEffect(() => {
    if (getLocal.isLogin) {
      dispatch(getCart({ token: getLocal.data.accessToken, data: getLocal.data.data.idUser }));

      if (carts.isMsg) {
        const data = {
          nameUser: getLocal.data.data.nameUser,
          phoneNumber: getLocal.data.data.phoneNumber,
        };
        dispatch(getLogin(data));
        //  setDisabled(true) : setDisabled(false);
      }
    } else {
      history.push("./");
    }
  }, [dispatch]);
  const datTambah = async (data) => {
    const datKurang = {
      description: data.description,
      idTopping: [data.idCart],
      amountItems: data.jumlah + 1,
    };

    const res = await dispatch(updateCart({ data: datKurang, token: getLocal.data.accessToken, id: data.idCart }));
    res.payload.code <= 201 && window.location.reload();
  };
  const datKurang = async (data) => {
    const datKurang = {
      description: data.description,
      idTopping: [data.idCart],
      amountItems: data.jumlah - 1,
    };
    if (data.jumlah > 1) {
      const res = await dispatch(updateCart({ data: datKurang, token: getLocal.data.accessToken, id: data.idCart }));
      res.payload.code <= 201 && window.location.reload();
    }
  };
  let count = 0;
  return (
    <div>
      {showModal ? (
        <div className="w-full flex fixed justify-center mt-12 h-full items-center">
          <div className="justify-center flex relative items-center w-7/12 h-full overflow-x-hidden overflow-y-auto p-4 absolute m-6 inset-0 z-50 outline-none focus:outline-none">
            <div className="absolut w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Masukan Nomor Meja</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <input
                    type="number"
                    placeholder="Nomor Meja"
                    class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                    onChange={(e) => {
                      setNomor(e.target.value);
                    }}
                    value={nomorMeja}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => bayar()}
                  >
                    Bayar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
      <div>
        <Navbar />
      </div>
      <div className="container  mx-auto justify-center">
        <div className="flex flex-wrap mt-20 mb-24">
          <div className="w-full flex justify-center flex-col items-center">
            <h1 className="text-xl font-bold">Detail Pesanan</h1>
            {carts.isLoading && (
              <div className="flex w-full h-full absolute justify-center items-center bg-white">
                <SpinnersRound />
              </div>
            )}
            <div className="flex w-full px-4 flex-col">
              {dataCarts?.data !== undefined &&
                dataCarts?.data.map((data, index) => {
                  console.log(count);

                  idCart.push(data.idCart);
                  if (data.status === 0) {
                    total += data.subTotal;
                    return (
                      <div className="flex w-full my-2 justify-between items-center p-4 bg-gray rounded-lg shadow-md">
                        <div className="flex flex-col w-full w-2/12 ">
                          <h1 className="text-xl font-bold ">{data.namaProduct}</h1>
                          <p>jumlah : {data.jumlah}</p>
                          <p>topping : {data.topping}</p>
                          <p>deskripsi : {data.description}</p>
                          <h1 className="text-lg font-semibold ">{currencyRegex(data.subTotal)}</h1>
                        </div>
                        <div key={data.idCart + "parent"} className="flex flex-row justify-between items-center bg-white rounded-lg shadow-lg mx-4">
                          <button
                            key={data.idCart + "kurang"}
                            className="bg-orange-500 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
                            type="button"
                            onClick={async () => {
                              datKurang(data);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <p className="px-4">{data.jumlah}</p>
                          <button
                            key={data.idCart + "tambah"}
                            className="bg-orange-500 text-white active:bg-amber-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
                            type="button"
                            onClick={async () => {
                              datTambah(data);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              cartDelete(data.idCart);
                            }}
                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
                          >
                            x
                          </button>
                        </div>
                      </div>
                    );
                  } else {
                    return <></>;
                  }
                })}
            </div>
            <div className="flex w-7/12 px-6 bg-gray py-4 rounded-lg justify-between">
              <p className="text-xl font-bold">Jumlah : </p>
              <p className="text-xl font-bold">{currencyRegex(total)}</p>
            </div>
            <button
              className={`mt-3 flex flex-row items-center justify-between ${
                dataCarts.data !== undefined && dataCarts.data.length > 0 ? `active:bg-emerald-600  bg-emerald-500` : `bg-slate-400`
              } text-white  font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
              type="button"
              disabled={dataCarts.data !== undefined && dataCarts.data.length > 0 ? false : true}
              onClick={() => setShowModal(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clip-rule="evenodd"
                />
              </svg>
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPesanan;
