//import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Sidebarl from "./Sidebarl";
import Sidebarr from "./Sidebarr";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
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
      ) : (
        <div className="main">
          <Routes>
            <Route path="/dashboard" element={<Sidebarl />}></Route>
            <Route path="/myprofile" element={<Sidebarl />}></Route>
            <Route path="/mail" element={<Sidebarl />}></Route>
            <Route path="/attendance" element={<Sidebarl />}></Route>
            <Route path="/settings" element={<Sidebarl />}></Route>
            <Route path="/messages" element={<Sidebarl />}></Route>
            <Route path="*" element={<Sidebarl />}></Route>
          </Routes>
          <Header />
          <Sidebarr />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
