import { Route, Routes } from "react-router";
import Home from "./Routes/Home";
import Buttons from "./Routes/btns/Buttons";

const App = () => {

  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/buttons" element={<Buttons/>} />
  </Routes>
  )
}

export default App
