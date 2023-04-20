import './ZoomOutHover.css'

function ZoomOutHover() {
  return (
  <div className='zoomOutHover-container'>
    <img className='zoomOutHover-img'src="https://images.unsplash.com/photo-1561728130-afd430af0493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Boat entering storm" />
    <div className='zoomOutHover-caption'>
      <h2 className='zoomOutHover-caption-h1'>Less wind greater views</h2>
      <p className='zoomOutHover-caption-p'>Less wind makes less waves. This creates a mirror effect on the water. </p>
      <a href="#" className='zoomOutHover-caption-a'>Read more</a>
    </div>
  </div>
)
}

export default ZoomOutHover