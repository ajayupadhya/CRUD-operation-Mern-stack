import React, { useState } from "react";
import "./product.css";
import Header from "./otherr/header";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import UpdateIcon from "@material-ui/icons/Update";
import EditIcon from "@material-ui/icons/Edit";
import AllProduct from "./otherr/allproduct";
import Add from "./otherr/add";

const Product = () => {
  const [main, setmain] = useState(true);
  const [adds, setadd] = useState(false);
  const [dele, setdele] = useState(false);
  const [upda, setupda] = useState(false);
  const add = () => {
    setadd(true);
    setmain(false);
    setdele(false);
    setupda(false);
  };
  const deleted = () => {
    setdele(true);
    setadd(false);
    setmain(false);
    setupda(false);
  };
  const allmain = () => {
    setmain(true);
    setadd(false);
    setdele(false);
    setupda(false);
  };
  const updat = () => {
    setmain(false);
    setadd(false);
    setdele(false);
    setupda(true);
  };
  return (
    <div className="product">
      <Header head = {"Sign Out"}/>
      <div className="productheader">
        <p onClick={allmain}>All Products</p>
        <div className="icon">
          <AddCircleOutlineIcon
            fontSize="large"
            style={{ color: "orange" }}
            onClick={add}
          />
          <DeleteOutlineIcon
            fontSize="large"
            style={{ color: "orange" }}
            onClick={deleted}
          />
          <UpdateIcon
            fontSize="large"
            style={{ color: "orange" }}
            onClick={updat}
          />
          
        </div>
      </div>
      {main ? <AllProduct /> : null}
      {adds ? <Add /> : null}
      {dele ? <AllProduct dele={"Delete"} /> : null}
      {upda ? <AllProduct upd = {"Update"} /> : null}
    </div>
  );
};

export default Product;
