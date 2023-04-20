import './ZoomOutFade.css'

function ZoomOutFade() {
  return (
    <div className='zoomOutFade-container'>
    <img className='zoomOutFade-img'src="https://images.unsplash.com/photo-1629224782350-62208ef46f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Boat entering storm" />
    <div className='zoomOutFade-caption'>
      <h1 className='zoomOutFade-caption-h1'>Meet new people</h1>
      <p className='zoomOutFade-caption-p'>You can meet great people that share your same interests!</p>
      <a href="#" className='zoomOutFade-caption-a'>Read more</a>
    </div>
  </div>
  )
}

export default ZoomOutFade