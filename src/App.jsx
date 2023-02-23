import { Route, Routes } from "react-router";
import Home from "./Routes/Home";
import Buttons from "./Routes/btns/Buttons";
import Images from "./Routes/Images/Images";

const App = () => {

  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/buttons" element={<Buttons/>} />
    <Route path="/images" element={<Images/>} />
  </Routes>
  )
}

export default App
