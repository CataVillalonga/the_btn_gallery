import DisappearingCaption from '../../Components/Imgs/disappearingCaption/disappearingCaption'
import FadeInCaption from '../../Components/Imgs/FadeInCaption/FadeInCaption'
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
      <DisappearingCaption />
    </div>
  )
}

export default Images