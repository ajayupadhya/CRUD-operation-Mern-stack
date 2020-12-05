import React, { useContext, useEffect , useState} from "react";
import { Context } from "../../context/authContext";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "./allproduct.css";
import Add from "./add";
import UpdateIcon from "@material-ui/icons/Update";
const AllProduct = ({ dele, upd }) => {
  const { allproducts, state, deleteproduct, updateProduct } = useContext(
    Context
  );
  const [n, setn] = useState("")
  const [q, setq] = useState("")
  const [i, seti] = useState("")
  const [up, setup] = useState(false);
  useEffect(() => {
    allproducts();
  }, []);
const upds = (id , name , quantity) =>{
    setup(true)
    setn(name)
    seti(id)
    setq(quantity)
}
  const rows = state.ProductData;
  return (
    <>
      {up ? (
        <Add updates = {"Update"}  n = {n} i = {i} q = {q} />
      ) : (
        <div className="table">
          <table className="tabdata">
            <tr className="tabrow">
              <td>Name</td>
              <td>Quantity</td>
              <td>Date</td>

              <td>
                {dele ? dele : null}
                {upd ? upd : null}
              </td>
            </tr>

            {rows ? rows.map((row) => {
              return (
                <tr className="tabrowin">
                  <td>{row.name}</td>
                  <td>{row.quantity}</td>
              <td>{row.createdAt}</td>
                  <td>
                    {dele ? (
                      <DeleteOutlineIcon
                        style={{ color: "White", fontSize: "30px" , cursor:"pointer"}}
                        onClick={() => deleteproduct(row._id , row.name)}
                      />
                    ) : null}
                    {upd ? (
                      <UpdateIcon
                        style={{ color: "White", fontSize: "30px" }}
                        onClick={() => upds(row._id , row.name , row.quantity)}
                      />
                    ) : null}
                  </td>
                </tr>
              );
            }): null}
          </table>
        </div>
      )}
    </>
  );
};

export default AllProduct;
