import "./App.css";
import React , {useContext} from 'react'
import Main from "./component/main";
import Product from "./component/product";
import { Context, Provider as AuthProvider } from "./context/authContext";

const  App = () => {
  const {state} = useContext(Context)
  console.log(state.isSignedIn)
  return (
    <div className="App">
      {state.isSignedIn ? <Product/> : <Main/>}
      
    </div>
  );
}
const Ap = App;

export default () => {
  return (
    <AuthProvider>
      <Ap/>
    </AuthProvider>
  );
};
