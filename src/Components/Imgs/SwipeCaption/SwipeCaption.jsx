import './SwipeCaption.css'

const SwipeCaption = () => {
  return (
  <div className='swipeCaption-container'>
    <img className='swipeCaption-img'src="https://images.pexels.com/photos/37859/sailing-ship-vessel-boat-sea-37859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Boat entering storm" />
    <div className='swipeCaption-caption'>
      <h1 className='swipeCaption-caption-h1'>Sundowns will shock you!</h1>
      <p className='swipeCaption-caption-p'>They remind me of a tequila sunrise</p>
    </div>
  </div>
  )
}

export default SwipeCaption