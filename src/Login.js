import React, { useRef } from "react";
import logo from "./images/logoc.png";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { auth, provider } from "./firebase";

function Login() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(
        userRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        /*console.log(authUser);*/
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signInGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((authUser) => {
        /*console.log(authUser);*/
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login_back">
      <div className="loginimg">
        <div className="loginright">
          <div className="loginsetup">
            <img src={logo} className="loginlogo" alt="sltc logo" />
            <div id="logintxt1">Hello there!</div>
            <div id="logintxt2">welcome</div>
            <div className="loginsearchcon">
              <StopCircleOutlinedIcon fontSize="inherit" />
              <input
                ref={userRef}
                placeholder="Email"
                className="loginsearch"
              />
            </div>
            <div className="loginsearchcon">
              <VisibilityOutlinedIcon fontSize="inherit" />
              <input
                ref={passwordRef}
                placeholder="Password"
                className="loginsearch"
                type="password"
              />
            </div>
            <div className="loginbt">
              <div id="logingoogle" onClick={signInGoogle}>
                Sign in with Google
              </div>
              <div id="loginsubmit" onClick={signIn}>
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
