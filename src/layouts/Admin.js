import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views
import CardFormUpdate from "../components/Cards/CardFormUpdate.js";
import Dashboard from "../views/admin/Dashboard.js";
import Maps from "../views/admin/Maps.js";
import Settings from "../views/admin/Settings.js";
import Tables from "../views/admin/Tables.js";
import { getLoginAdmin } from "views/auth/service/action.js";
export default function Admin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const Admin = useSelector((state) => state.getLoginAdmin.data);
  console.log(Admin);
  useEffect(async() => {
    
  }, []);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/menu" exact component={Tables} />
            <Route path="/admin/menu/:id" component={CardFormUpdate} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
