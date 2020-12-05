import createContext from "./createContext";
import trackerApi from "../api/tracker";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return {
        errorMessage: "",
        token: action.payload,
        isSignedIn: true,
      };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "del":
        return state
    case "signout":
      return { ...state, isSignedIn: action.payload };
    case "alldata":
      return { ...state, errorMessage: "", ProductData: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async (email, password, name) => {
    try {
      const response = await trackerApi.post("/signup", {
        email,
        password,
        name,
      });

      dispatch({ type: "signup", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload:
          "User already exist or Something went wrong from our side Retry",
      });
      console.log(err.message);
      console.log("errore");
    }
  };
};
const signin = (dispatch) => {
  return async (email, password) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });

      await localStorage.setItem("Token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
        isSignedIn: true,
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Email or Password are not correct",
      });
      console.log(err);
    }
  };
};
const signout = (dispatch) => {
  return async () => {
    console.log("called")
    await localStorage.removeItem("Token");
    dispatch({ type: "signout", payload: false });
    
  };
};

const allproducts = (dispatch) => {
  return async () => {
    try {
      const response = await trackerApi.get("/product");
      dispatch({
        type: "alldata",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Product not found",
      });
      console.log(err);
    }
  };
};

const addproduct = (dispatch) => {
  return async (name, quantity) => {
    try {
      const response = await trackerApi.post("/addproduct", {
        name,
        quantity,
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Product not uploaded",
      });
      console.log(err.message);
      console.log("errore");
    }
  };
};
const deleteproduct = (dispatch) => {
  return async (id, name) => {
    console.log(id, name);
    try {
      const rep = await trackerApi.delete('/deleteproduct/'+id);
      dispatch({
        type:"del"
      })
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Product not Deleted",
      });
      console.log(err.message);
      console.log("errore");
    }
  };
};

const updateProduct = (dispatch) => {
  return async (name, quantity, id) => {
    console.log(name, quantity, id);
    try {
      const res = await trackerApi.put('/updateproduct/'+id, { name, quantity});
      console.log(res);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Product not Updated",
      });
      console.log(err.message);
      console.log("errore");
    }
  };
};

export const { Context, Provider } = createContext(
  AuthReducer,
  {
    signup,
    signin,
    signout,
    allproducts,
    addproduct,
    updateProduct,
    deleteproduct,
  },
  { isSignedIn: false, errorMessage: "", token: "", ProductData: {} }
);
