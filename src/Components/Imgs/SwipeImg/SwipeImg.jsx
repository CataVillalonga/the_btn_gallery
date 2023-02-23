import './SwipeImg.css'

const SwipeImg = () => {
  return (
  <div className='swipeImg-container'>
    <img className='swipeImg-img'src="https://images.pexels.com/photos/37859/sailing-ship-vessel-boat-sea-37859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Boat entering storm" />
    <div className='swipeImg-caption'>
      <h1 className='swipeImg-caption-h1'>The wind will guide you</h1>
      <p className='swipeImg-caption-p'>No better feeling that the wind in the sales</p>
    </div>
  </div>
  )
}

export default SwipeImg