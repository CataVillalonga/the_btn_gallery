import './DisappearingCaption.css'

function DisappearingCaption() {
  return (
    <div className='disappearingCaption-container'>
    <img className='disappearingCaption-img'src="https://images.pexels.com/photos/5116112/pexels-photo-5116112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Boat entering storm" />
    <div className='disappearingCaption-caption'>
      <h1 className='disappearingCaption-caption-h1'>It can be calm</h1>
      <p className='disappearingCaption-caption-p'>If there is no wind it will be hard to move fast</p>
    </div>
  </div>
  )
}

export default DisappearingCaption