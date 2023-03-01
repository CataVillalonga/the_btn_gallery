import DisapearingCap from '../../Components/Imgs/DisapearingCap/DisapearingCap'
import FadeInCaption from '../../Components/Imgs/FadeInCaption/FadeInCaption'
import MultipleEffectTwo from '../../Components/Imgs/MultipleEffectTwo/MultipleEffectTwo'
import MultipleFadein from '../../Components/Imgs/MultipleFadein/MultipleFadein'
import MultipleHoverEffects from '../../Components/Imgs/MultipleHoverEffects/MultipleHoverEffects'
import SmallCaption from '../../Components/Imgs/SmallCaption/SmallCaption'
import SwipeCaption from '../../Components/Imgs/SwipeCaption/SwipeCaption'
import SwipeImg from '../../Components/Imgs/SwipeImg/SwipeImg'
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
    </div>
  )
}

export default Images