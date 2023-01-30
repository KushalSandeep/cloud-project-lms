//import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import LecHeader from "./LecHeader";
import Sidebarl from "./Sidebarl";
import Sidebarr from "./Sidebarr";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { useEffect, useState } from "react";
import db, { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/userSlice";
import dul from "./images/dul.jpg";
import han from "./images/han.jpg";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [role, setRole] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        var docRef = db.collection("users").doc(userAuth.email);
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              db.collection("users")
                .doc(userAuth.email)
                .onSnapshot((doc) => {
                  const data = doc.data();
                  setRole(data.role);
                  setName(data.name);
                });
              dispatch(
                login({
                  uid: userAuth.uid,
                  email: userAuth.email,
                })
              );
            } else {
              alert(
                "Not a registered email!\nInform the admin to add your mail to the system"
              );
              auth.signOut();
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : role === "lecture" ? (
        <div className="main">
          <Routes>
            <Route
              path="/dashboard"
              element={<Sidebarl dul={han} nam={name} />}
            ></Route>
            <Route
              path="/myprofile"
              element={<Sidebarl dul={han} nam={name} />}
            ></Route>
            <Route
              path="/mail"
              element={<Sidebarl dul={han} nam={name} />}
            ></Route>
            <Route
              path="/attendance"
              element={<Sidebarl dul={han} nam={name} />}
            ></Route>
            <Route
              path="/settings"
              element={<Sidebarl dul={han} nam={name} />}
            ></Route>
            <Route
              path="/messages"
              element={<Sidebarl dul={han} nam={name} />}
            ></Route>
            <Route path="*" element={<Sidebarl dul={han} nam={name} />}></Route>
          </Routes>
          <LecHeader />
          <Sidebarr />
        </div>
      ) : (
        <div className="main">
          <Routes>
            <Route
              path="/dashboard"
              element={<Sidebarl dul={dul} nam={name} />}
            ></Route>
            <Route
              path="/myprofile"
              element={<Sidebarl dul={dul} nam={name} />}
            ></Route>
            <Route
              path="/mail"
              element={<Sidebarl dul={dul} nam={name} />}
            ></Route>
            <Route
              path="/attendance"
              element={<Sidebarl dul={dul} nam={name} />}
            ></Route>
            <Route
              path="/settings"
              element={<Sidebarl dul={dul} nam={name} />}
            ></Route>
            <Route
              path="/messages"
              element={<Sidebarl dul={dul} nam={name} />}
            ></Route>
            <Route path="*" element={<Sidebarl dul={dul} nam={name} />}></Route>
          </Routes>
          <Header />
          <Sidebarr />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
