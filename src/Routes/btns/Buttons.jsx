import Rotating from "../../Components/Rotating/Rotating"
import Swipe from "../../Components/Swipe/Swipe"
import Xeffect from '../../Components/Xeffect/Xeffect'
import StretchEffect from '../../Components/StretchEffect/StretchEffect'
import SwipeWithText from "../../Components/SwipeWithText/SwipeWithText"
import './Buttons.css'

const Buttons = () => {
  return (
    <main className="btns-container">
      <Rotating />
      <Swipe />
      <Xeffect />
      <StretchEffect />
      <SwipeWithText />
    </main>
  )
}

export default Buttons