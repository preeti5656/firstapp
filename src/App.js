import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EventHandling from "./component/EventHandling";
import Gallery from "./component/Gallery";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import NotFound from "./component/NotFound";
import Productlist from "./component/Productlist";
import {createTheme } from "@mui/material";
import {ThemeProvider } from "@mui/material";
import { useState } from "react";
import Chat from "./component/Chat";
import UsingMaterial from "./component/UsingMaterial";
import memeCreator from "./component/memeCreator";
import Register from "./component/Register";




function App() {
  const [darkTheme, setdarkTheme] = useState(false);
  const theme1 = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#61dafb",
      },
      error: {
        main: "#fd7e14",
      },
    },
  });
  
  const theme2 = createTheme({
    palette: {
      mode: "dark",
      },
  });

  return (
    <ThemeProvider theme={darkTheme ? theme2:theme1}>
      <BrowserRouter>
        <Header darkTheme={darkTheme} setdarkTheme={setdarkTheme}/>
        <Routes>
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login />} path="login" />
          <Route element={<NotFound />} path="notfound" />
          <Route element={<EventHandling />} path="event" />
          <Route element={<Gallery />} path="gallery" />
          <Route element={<Productlist />} path="productlist" />
          <Route element={<Chat />} path="chat" />
          <Route element={<memeCreator />} path="memeCreator" />
          <Route element={<UsingMaterial />} path="usingmaterial" />
          <Route element={<Register />} path="Register" />

          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Navigate to="/notfound" />} path="*" />
          <Route element={<Navigate to="/productlist" />} path="a" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;