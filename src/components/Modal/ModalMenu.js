import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import Select from "../../components/Select/Select";
import { useSelector, useDispatch } from "react-redux";
// import { getTopping } from "views/Menu/service/action";
import { addCart } from "views/Menu/service/action";
import currencyRegex from "utils/currencyRegex";
const ModalMenu = ({ onClose, onOpen, token, idUser, dataProduct }) => {
  const dispatch = useDispatch();
  const data = [{ data: "test1" }];
  const [jumlah, setJumlah] = useState(1);
  const [jenis, setJenis] = useState("");
  // const [kopi, setKopi] = useState("");
  // const [gula, setGula] = useState("");
  // const [es, setEs] = useState("");
  // const [sirup, setSirup] = useState("");
  // const [susu, setSusu] = useState("");
  // const [topping, setTopping] = useState("00000000-0000-0000-0000-000000000000");
  // const toppings = useSelector((state) => state.getTopping);
  const pushCart = () => {
    const data = {
      idUser: idUser,
      idProduct: dataProduct.idProduct,
      // idTopping: [topping],
      description: `hehe`,
      amountItems: jumlah,
    };

    console.log(data);
    dispatch(addCart({ data: data, token: token }));
  };

  // useEffect(() => {
  //   dispatch(getTopping(token));
  // }, [dispatch]);
  return (
    <div className=" w-full flex h-full bottom-0 bg-gray border-2 border-black fixed bottom z-99  overflow-scroll">
      <div className="flex h-full w-full justify-start flex-col bg-gray">
        <div className="flex flex-row justify-between p-4 bg-white mb-2 shadow-md">
          <div>
            <h1 className="text-3xl font-semibold">{dataProduct.namaProduct}</h1>
            <p className="text-xs font-semibold mt-2">{currencyRegex(dataProduct.hargaJual)}</p>
          </div>
          <div className="px-2 py-1">
            <button
              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
              onClick={() => {
                onClose();
              }}
            >
              x
            </button>
          </div>
        </div>
        <form className="flex flex-col h-full justify-between ">
          <div>
            <div className="flex flex-row items-center  mt-2 justify-between p-4 bg-white mb-4 shadow-md">
              <p className="text-base font-semibold mr-4">Jumlah Pesanan</p>
              <input
                type="number"
                placeholder="Jumlah"
                min={1}
                className=" px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline "
                value={jumlah}
                onChange={(e) => {
                  setJumlah(e.target.value);
                }}
              />
            </div>

            {/* <div className="flex px-4 flex-col bg-white mb-4 shadow-md">
              {dataProduct.type === 1 && <Select label={"Jenis"} state={{ data: jenis, setData: setJenis }} />}
              {(dataProduct.type === 1 || dataProduct.type === 2) && <Select label={"Kopi"} state={{ data: kopi, setData: setKopi }} />}
              <p className="text-xs font-semibold mb-5">{dataProduct.description}</p>
              {(dataProduct.type === 0 || dataProduct.type === 2) && <Select label={"Gula"} state={{ data: gula, setData: setGula }} />}
              {(dataProduct.type === 0 || dataProduct.type === 2) && dataProduct.id !== "7a6c5563-259a-4554-9cea-0245371691c2" && <Select label={"Es"} state={{ data: es, setData: setEs }} />}
              {(dataProduct.type === 0 || dataProduct.type === 2) && <Select label={"Susu"} state={{ data: susu, setData: setSusu }} />}
            </div> */}
            {/* <div className="flex flex-col bg-white mb-4 px-6 shadow-md">
              <p className="text-xl font-bold  mt-8  mb-8">Topping</p>
              {toppings.data.data !== undefined &&
                toppings.data.data.map((data, index) => {
                  return (
                    <>
                      <div key={index} className="flex justify-between items-center">
                        <label className="text-base font-semibold" for={data.name}>
                          {data.name}
                        </label>
                        <div className="flex items-center">
                          <p className="text-base text-center font-bold mr-2">+{data.hargaJual}</p>
                          <input
                            type="radio"
                            id={data.name}
                            value={topping}
                            onChange={(e) => {
                              setTopping(data.idTopping);
                            }}
                            name="topping"
                          ></input>
                        </div>
                      </div>
                      <hr className="mt-2 mb-2"></hr>
                    </>
                  );
                })}
            </div> */}
          </div>
          <div className="p-4 flex w-full rounded-t-lg bg-white shadow-md">
            <button
              className="w-full mt-3 mb-4 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
              onClick={() => {
                pushCart();
                onClose();
                onOpen();
              }}
              type="button"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
ModalMenu.propTypes = { onClose: propTypes.func, onOpen: propTypes.func, token: propTypes.string, isUser: propTypes.string, dataProduct: propTypes.string };
export default ModalMenu;
