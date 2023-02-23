import './SmallCaption.css'

function SmallCaption() {
  return (
    <div className='smallCaption-container'>
    <img className='smallCaption-img'src="https://images.pexels.com/photos/5116112/pexels-photo-5116112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Boat entering storm" />
    <div className='smallCaption-caption'>
      <h1 className='smallCaption-caption-h1'>It can be calm</h1>
      <p className='smallCaption-caption-p'>If there is no wind it will be hard to move fast</p>
    </div>
  </div>
  )
}

export default SmallCaption