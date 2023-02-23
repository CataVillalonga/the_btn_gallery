import './FadeInCaption.css'

function FadeInCaption() {
  return (
    <div className='fadeInCaption-container'>
      <img className='fadeInCaption-img'src="https://images.pexels.com/photos/37859/sailing-ship-vessel-boat-sea-37859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Boat entering storm" />
      <div className='fadeInCaption-caption'>
        <h1 className='fadeInCaption-caption-h1'>Sailing is amazing!</h1>
        <p className='fadeInCaption-caption-p'>It's a never ending adventure</p>
      </div>
    </div>
  )
}

export default FadeInCaption