import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Context } from "../../context/authContext";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderBottom: "1px solid orange",
    borderTop: "1px solid orange",
    justifyContent: "space-between",
    height: "150px",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  inp: {
    display: "flex",
    justifyContent: "space-evenly",

    width: "80%",
    height: "150px",
    alignItems: "center",
    color: "white",
  },
  name: {
    fontSize: "25px",
  },
  inputfield: {
    outline: "none",
    border: "0px",
    backgroundColor: "rgb(82, 71, 56)",
    color: "white",
    fontSize: "25px",
    marginLeft: "20px",
  },
}));

const Add = ({ updates , i ,n ,q}) => {
  const { addproduct, updateProduct } = useContext(Context);
  const classes = useStyles();
  const [addname, setaddname] = useState(n);
  const [addquantity, setaddquantity] = useState(q);
  const add = () => {
    console.log("add");
    if (updates) {
      updateProduct(addname, addquantity , i);
    } else {
      addproduct(addname, addquantity);
    }

    setaddname("");
    setaddquantity("");
  };

  return (
    <div className={classes.root}>
      <div className={classes.inp}>
        <p>
          <span className={classes.name}>Product Name :</span>
          <input
            value={addname}
            className={classes.inputfield}
            onChange={(e) => setaddname(e.target.value)}
          />
        </p>
        <p>
          <span className={classes.name}>Quantity :</span>
          <input
            value={addquantity}
            className={classes.inputfield}
            onChange={(e) => setaddquantity(e.target.value)}
          />
        </p>

        <Button
          variant="contained"
          style={{ backgroundColor: "orange" }}
          onClick={add}
        >
          {updates ? updates : "Add Product"}
        </Button>
      </div>
    </div>
  );
};
export default Add;
