import DisapearingCap from '../../Components/Imgs/DisapearingCap/DisapearingCap'
import FadeInCaption from '../../Components/Imgs/FadeInCaption/FadeInCaption'
import MultipleEffectTwo from '../../Components/Imgs/MultipleEffectTwo/MultipleEffectTwo'
import MultipleFadein from '../../Components/Imgs/MultipleFadein/MultipleFadein'
import MultipleHoverEffects from '../../Components/Imgs/MultipleHoverEffects/MultipleHoverEffects'
import SmallCaption from '../../Components/Imgs/SmallCaption/SmallCaption'
import SwipeCaption from '../../Components/Imgs/SwipeCaption/SwipeCaption'
import SwipeImg from '../../Components/Imgs/SwipeImg/SwipeImg'
import ZoomOutFade from '../../Components/Imgs/ZoomOutFade/ZoomOutFade'
import ZoomOutHover from '../../Components/Imgs/ZoomOutHover/ZoomOutHover'
import './Images.css'

function Images() {
  return (
    <div className='imgs-container'>
      <FadeInCaption />
      <SwipeCaption />
      <SwipeImg />
      <SmallCaption />
      <DisapearingCap />
      <MultipleHoverEffects />
      <MultipleEffectTwo /> 
      <MultipleFadein />
      <ZoomOutHover />
      <ZoomOutFade />
    </div>
  )
}

export default Images