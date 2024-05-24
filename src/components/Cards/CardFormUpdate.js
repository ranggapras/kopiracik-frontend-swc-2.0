import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductsById, putProduct } from "views/Menu/service/action";
import { useHistory } from "react-router-dom";
const CardFormUpdate = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const history = useHistory();
  const productsByid = useSelector((state) => state.getProductsById);
  const getLocal = useSelector((state) => state.getLoginAdmin);
  const [idProduct, setIdProduct] = useState("");
  const [nama, setNama] = useState("");
  const [hargaJual, setHargaJual] = useState("");
  const [hargaBeli, setHargaBeli] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [photo, setPhoto] = useState("");

  console.log(productsByid);
  useEffect(async () => {
    const res = await dispatch(getProductsById({ id: id, token: getLocal.data.accessToken }));

    if (res.payload.code === 200) {
      setDeskripsi(res.payload.data.description);
      setHargaBeli(res.payload.data.hargaBeli);
      setHargaJual(res.payload.data.hargaJual);
      setNama(res.payload.data.namaProduct);
      setIdProduct(res.payload.data.idProduct);
      setPhoto(res.payload.data.photo);
    }
  }, [dispatch]);
  return (
    <div>
      <div className="px-4 md:px-10 mx-auto w-full m-24">
        <div className="flex flex-wrap pt-12">
          <div className="w-full mb-12 px-4">
            <form>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Nama
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Nama"
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                  }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Harga Beli
                </label>
                <input
                  type="number"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Rp"
                  value={hargaBeli}
                  onChange={(e) => {
                    setHargaBeli(e.target.value);
                  }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Harga Jual
                </label>
                <input
                  type="number"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Rp"
                  value={hargaJual}
                  onChange={(e) => {
                    setHargaJual(e.target.value);
                  }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Deskripsi
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Deskripsi"
                  value={deskripsi}
                  onChange={(e) => {
                    setDeskripsi(e.target.value);
                  }}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  onClick={async () => {
                    const data = {
                      namaProduct: nama,
                      hargaBeli: hargaBeli,
                      hargaJual: hargaJual,
                      description: deskripsi,
                      photo: photo,
                    };
                    const res = await dispatch(putProduct({ id: id, token: getLocal.data.accessToken, data: data }));
                    res.payload.code <= 201 && history.push("/admin/menu");
                  }}
                  type="button"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
          {/* <div className="w-full mb-12 px-4">
            <CardTable color="dark" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardFormUpdate;
