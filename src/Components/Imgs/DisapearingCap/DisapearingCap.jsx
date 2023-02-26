import './DisapearingCap.css'

function DisapearingCap() {
  return (
    <div className='disappearingCaption-container'>
    <img className='disappearingCaption-img'src="https://images.pexels.com/photos/5116112/pexels-photo-5116112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Boat entering storm" />
    <div className='disappearingCaption-caption'>
      <h3 className='disappearingCaption-caption-h1'>Less wind greater views</h3>
      <p className='disappearingCaption-caption-p'>Less wind makes less waves. This creates a mirror effect on the water. </p>
    </div>
  </div>
  )
}

export default DisapearingCap