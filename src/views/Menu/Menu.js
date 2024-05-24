import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbars/IndexNavbar";
import CardMenu from "../../components/Cards/CardMenu";
import ModalMenu from "../../components/Modal/ModalMenu";
import Cart from "../../components/Modal/Cart";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./service/action";
import { getLogin } from "../landing/service/action";
import { data } from "autoprefixer";
import { useHistory } from "react-router-dom";
const Menu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState(false);
  const [dataModal, setDataModal] = useState("");

  const products = useSelector((state) => state.getProducts);
  const getLocal = useSelector((state) => state.getLogin);
  const dataProducts = products.data;

  useEffect(() => {
    if (getLocal.isLogin) {
      dispatch(getProducts(getLocal.data.accessToken));
      if (products.isMsg) {
        const data = {
          nameUser: getLocal.data.data.nameUser,
          phoneNumber: getLocal.data.data.phoneNumber,
        };
        dispatch(getLogin(data));
      }
    } else {
      history.push("./");
    }
  }, []);
  return (
    <>
      <div className="fixed bottom-0 mb-2 flex justify-center w-full">
        <Cart />
      </div>

      {showModal && (
        <ModalMenu
          onClose={() => setShowModal(false)}
          onOpen={() => {
            setCart(true);
          }}
          token={getLocal.data.accessToken}
          idUser={getLocal.data.data.idUser}
          dataProduct={dataModal}
        />
      )}
      <div>
        <Navbar />
      </div>
      <div className="container  mx-auto justify-center">
        <div className="w-full flex mt-20 justify-center">
          <h1 className="text-xl font-bold">Our Product</h1>
        </div>
        <div className="flex flex-wrap justify-center flex-row mb-24 items-stretch">
          {dataProducts.data !== undefined
            ? products.data.data.map((dat) => {
                return <CardMenu onClick={() => setShowModal(true)} detailProduct={dat} setData={setDataModal} />;
              })
            : console.log("gagal")}
        </div>
      </div>
    </>
  );
};

export default Menu;
