import './Buttons.css'
import Rotating from "../../Components/btns/Rotating/Rotating"
import Swipe from "../../Components/btns/Swipe/Swipe"
import Xeffect from '../../Components/btns/Xeffect/Xeffect'
import StretchEffect from '../../Components/btns/StretchEffect/StretchEffect'
import SwipeWithText from "../../Components/btns/SwipeWithText/SwipeWithText"
import GlowingEffect from "../../Components/btns/GlowingEffect/GlowingEffect"
import TwoLayerSwap from "../../Components/btns/TwoLayerSwap/TwoLayerSwap"
import ZoomEffect from "../../Components/btns/ZoomEffect/ZoomEffect"
import SwipeCircular from "../../Components/btns/SwipeCircular/SwipeCircular"
import RotateThreeLayers from "../../Components/btns/RotateThreeLayers/RotateThreeLayers"
import SwipeWithOppacity from "../../Components/btns/SwipeWithOpasity/SwipeWithOppacity"
import ThreeCircles from "../../Components/btns/ThreeCircles/ThreeCircles"
import OpeningEffect from "../../Components/btns/OpeningEffect/OpeningEffect"
import CrackEffect from '../../Components/btns/CrackEffect/CrackEffect'
import BorderSwapp from '../../Components/btns/BorderSwapp/BorderSwapp'
import BorderGrowing from '../../Components/btns/BorderGrowing/BorderGrowing'
import RotatingLetter from '../../Components/btns/RotatingLetter/RotatingLetter'
import BorderAppear from '../../Components/btns/BorderAppear/BorderAppear'
import WavyEffect from '../../Components/btns/WavyEffect/WavyEffect'
import TwoCuts from '../../Components/btns/TwoCuts/TwoCuts'
import TwoPartsSkew from '../../Components/btns/TwoPartsSkew/TwoPartsSkew'
import PulsingEffect from '../../Components/btns/PulsingEffect/PulsingEffect'
import DiagonalSwipe from '../../Components/btns/DiagonalSwipe/DiagonalSwipe'

const Buttons = () => {
  return (
    <main className="btns-container">
      <Rotating />
      <Swipe />
      <Xeffect />
      <StretchEffect />
      <SwipeWithText />
      <GlowingEffect />
      <TwoLayerSwap />
      <ZoomEffect />
      <SwipeCircular />
      <RotateThreeLayers />
      <SwipeWithOppacity />
      <ThreeCircles />
      <OpeningEffect />
      <CrackEffect />
      <BorderSwapp />
      <BorderGrowing />
      <RotatingLetter />
      <BorderAppear />
      <WavyEffect />
      <TwoCuts />
      <TwoPartsSkew />
      <PulsingEffect />
      <DiagonalSwipe />
    </main>
  )
}

export default Buttons