import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

// components
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbars/AuthNavbar.js";
import Footer from "../../components/Footers/Footer.js";
import { getLogin } from "./service/action";
export default function Landing() {
  const [name, setName] = useState("");
  const [noHp, setNoHp] = useState("");

  const ref = useRef()

  const handleToPesan = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const validateLogin = useSelector((state) => state.getLogin);
  const history = useHistory();
  const dispatch = useDispatch();
  const Login = async () => {
    const data = {
      nameUser: name,
      phoneNumber: noHp,
    };
    const response = await dispatch(getLogin(data));
    return response.payload.code === 200 && history.push("/menu");
  };
  useEffect(() => {
    console.log(getLogin.isLogin);
    validateLogin.isLogin && history.push("/menu");
  }, [validateLogin, history]);
  return (
    <>
      <Navbar transparent onClick={handleToPesan} />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">Kopi Racik</h1>
                  <p className="mt-4 text-lg text-blueGray-200">Pesan di Meja, Bayar Langsung, Pesanan Datang!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0)" }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-wallet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Pembayaran Cashless</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">Tanpa ribet dengan kembalian, pembayaran cashless mempercepat transaksi dan mempermudah pembayaran.</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-mug-hot"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Minuman Berkualitas</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">Diseduh oleh barista berpengalaman dan bahan yang berkualitas.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-check-double"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Bisa pesan sesuai keinginan</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">Dapat memesan menu yang ada dan mengubahnya sesuai dengan keinginan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">Sistem Pemesanan Kopi Racik</h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Kopi Racik menyediakan berbagai macam jenis minuman, mulai dari berbahan dasar kopi, susu, berbagai macam topping, dan dapat disesuaikan dengan keinginan pelanggan. Kemudahan memesan lewat web dan cashless payment, tidak
                  mengharuskan pelanggan menunggu di depan kasir. Pesanan selesai juga akan diberitahu melalui WhatsApp masing masing pelanggan yang memesan.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img alt="..." src={require("assets/img/coffee-beans.webp").default} className="w-full align-middle rounded-t-lg" />
                  <blockquote className="relative p-8 mb-4">
                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                      <polygon points="-30,95 583,95 583,65" className="text-lightBlue-500 fill-current"></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">Dari bahan berkualitas, barista profesional</h4>
                    <p className="text-md font-light mt-2 text-white">Bahan dasar dari bumi Indonesia yang sudah dipilah dengan baik dan diseduh oleh barista terlatih serta berpengalaman.</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 relative block bg-blueGray-800">
          <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">Pesan Sekarang!</h2>
              </div>
            </div>
          </div>
        </section>
        <section ref={ref} id="pesan" className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-24">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">Masukan Data Diri Anda. Setelah ini Anda akan memilih Pesanan. Jika pesanan selesai, notifikasi akan dikirim melalui WhatsApp!</p>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="full-name">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nama Lengkap"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="telp">
                        Nomor Handphone (WhatsApp)
                      </label>
                      <input
                        type="tel"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="No. Handphone"
                        value={noHp}
                        onChange={(e) => {
                          setNoHp(e.target.value);
                        }}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => Login()}
                        type="button"
                      >
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
