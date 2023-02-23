import './Buttons.css'
import Rotating from "../../Components/Rotating/Rotating"
import Swipe from "../../Components/Swipe/Swipe"
import Xeffect from '../../Components/Xeffect/Xeffect'
import StretchEffect from '../../Components/StretchEffect/StretchEffect'
import SwipeWithText from "../../Components/SwipeWithText/SwipeWithText"
import GlowingEffect from "../../Components/GlowingEffect/GlowingEffect"
import TwoLayerSwap from "../../Components/TwoLayerSwap/TwoLayerSwap"
import ZoomEffect from "../../Components/ZoomEffect/ZoomEffect"
import SwipeCircular from "../../Components/SwipeCircular/SwipeCircular"
import RotateThreeLayers from "../../Components/RotateThreeLayers/RotateThreeLayers"
import SwipeWithOppacity from "../../Components/SwipeWithOpasity/SwipeWithOppacity"
import ThreeCircles from "../../Components/ThreeCircles/ThreeCircles"
import OpeningEffect from "../../Components/OpeningEffect/OpeningEffect"
import CrackEffect from '../../Components/CrackEffect/CrackEffect'
import BorderSwapp from '../../Components/BorderSwapp/BorderSwapp'
import BorderGrowing from '../../Components/BorderGrowing/BorderGrowing'
import RotatingLetter from '../../Components/RotatingLetter/RotatingLetter'
import BorderAppear from '../../Components/BorderAppear/BorderAppear'
import WavyEffect from '../../Components/WavyEffect/WavyEffect'
import TwoCuts from '../../Components/TwoCuts/TwoCuts'
import TwoPartsSkew from '../../Components/TwoPartsSkew/TwoPartsSkew'

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
    </main>
  )
}

export default Buttons