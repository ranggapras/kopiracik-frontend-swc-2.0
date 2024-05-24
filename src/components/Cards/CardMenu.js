import React from "react";
import propTypes from "prop-types";
import currencyRegex from "utils/currencyRegex";
const CardMenu = ({ onClick, detailProduct, idProduct, setData }) => {
  const setOpen = (data) => {
    setData(detailProduct);
    return onClick();
  };
  return (
    <div className="md:w-3/12 w-full mt-3 px-4 flex flex-col ">
      <div className="flex-col flex bg-white shadow-lg  rounded-lg p-4  ">
        <img alt="..." src={detailProduct.photo} className="w-full align-middle h-48 md:h-48 rounded-lg object-contain" />
        <div className="px-2 py-2 flex justify-between flex-col ">
          <div className="flex flex-col">
            <h1 className="font-semibold">{detailProduct.namaProduct}</h1>
            <p className="font-semibold">{currencyRegex(detailProduct.hargaJual)}</p>
            <p className="text-xs">
              {detailProduct.description === null &&
                (() => {
                  return <></>;
                })}
            </p>
          </div>
          <div className="justify-center flex mt-2 items-center">
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
              onClick={() => {
                setOpen(detailProduct.idProduct);
              }}
              type="button"
            >
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CardMenu.propTypes = { onClick: propTypes.func, detailProduct: propTypes.object, idProduct: propTypes.func, setData: propTypes.func };
export default CardMenu;
