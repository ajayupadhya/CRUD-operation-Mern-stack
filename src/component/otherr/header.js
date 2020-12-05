import React, { useState, useContext } from "react";
import "./header.css";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Context } from "../../context/authContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: "420px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputField: {
    display: "flex",

    flexDirection: "column",
    height: "340px",
    width: "350px",
    justifyContent: "space-evenly",
    marginTop: "30px",
  },
  field: {
    fontSize: "20px",
    marginLeft: "20px",
  },
  but: {
    marginLeft: "35%",
    marginTop: "10px",
  },
  inp: {
    border: "0px",
    marginLeft: "20px",
    outline: "none",
    fontSize: "19px",
  },
  all: {
    border: ".2px solid black",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    height: "40px",
  },
}));

const Header = ({ head }) => {
  const [nameup, setnameup] = useState("");
  const [emailup, setemailup] = useState("");
  const [emailin, setemailin] = useState("");
  const [passwordup, setpasswordup] = useState("");
  const [passwordin, setpasswordin] = useState("");
  const classes = useStyles();
  const [opensignup, setOpensignup] = React.useState(false);
  const [opensignin, setOpensignin] = React.useState(false);

  const { signup, signin , signout } = useContext(Context);
  const handleOpenSignup = () => {
    setOpensignup(true);
  };

  const handleCloseSignup = () => {
    setOpensignup(false);
  };
  const handleOpenSignin = () => {
    setOpensignin(true);
  };

  const handleCloseSignin = () => {
    setOpensignin(false);
  };
  const SignUp = () => {
    signup(emailup, passwordup, nameup);
    setnameup("");
    setemailup("");
    setpasswordup("");
  };
  const SignIn = () => {
    signin(emailin, passwordin);
    setemailin("");
    setpasswordin("");
  };

  return (
    <div className="header">
      <h3> Simple Mart</h3>
      {head ? (
        <p style = {{color:"orange" , fontSize:"20px" , marginRight:"100px" , cursor:"pointer"}} onClick = { signout}>Sign Out</p>
      ) : (
        <div className="headercontent">
          <div className="signup">
            <button type="button" onClick={handleOpenSignup}>
              Signup
            </button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={opensignup}
              onClose={handleCloseSignup}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={opensignup}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">SignUp</h2>
                  <div id="transition-modal-description">
                    <div className={classes.inputField}>
                      <div className={classes.all}>
                        <span className={classes.field}>Name :</span>{" "}
                        <input
                          value={nameup}
                          className={classes.inp}
                          onChange={(e) => setnameup(e.target.value)}
                        />
                      </div>
                      <div className={classes.all}>
                        <span className={classes.field}>Email : </span>{" "}
                        <input
                          value={emailup}
                          className={classes.inp}
                          onChange={(e) => setemailup(e.target.value)}
                        />
                      </div>
                      <div className={classes.all}>
                        <span className={classes.field}>Password : </span>{" "}
                        <input
                          value={passwordup}
                          className={classes.inp}
                          onChange={(e) => setpasswordup(e.target.value)}
                        />
                      </div>
                      <div className={classes.but}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={SignUp}
                        >
                          SignUp
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
          <div className="signin">
            <button type="button" onClick={handleOpenSignin}>
              SignIn
            </button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={opensignin}
              onClose={handleCloseSignin}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={opensignin}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">SignIn</h2>
                  <div id="transition-modal-description">
                    <div className={classes.inputField}>
                      <div className={classes.all}>
                        <span className={classes.field}>Email : </span>{" "}
                        <input
                          value={emailin}
                          className={classes.inp}
                          onChange={(e) => setemailin(e.target.value)}
                        />
                      </div>
                      <div className={classes.all}>
                        <span className={classes.field}>Password : </span>{" "}
                        <input
                          value={passwordin}
                          className={classes.inp}
                          onChange={(e) => setpasswordin(e.target.value)}
                        />
                      </div>
                      <div className={classes.but}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={SignIn}
                        >
                          SignIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
