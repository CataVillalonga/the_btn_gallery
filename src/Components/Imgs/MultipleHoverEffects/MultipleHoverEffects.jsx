import './MultipleHoverEffects.css'

const MultipleHoverEffects = () => {
  return (
    <div className='multipleHover-container'>
      <img className='multipleHover-img'src="https://images.pexels.com/photos/5116112/pexels-photo-5116112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Boat entering storm" />
      <div className='multipleHover-caption'>
        <h2 className='multipleHover-caption-h1'>Less wind greater views</h2>
        <p className='multipleHover-caption-p'>Less wind makes less waves. This creates a mirror effect on the water. </p>
        <a href="#" className='multipleHover-caption-a'>Read more</a>
      </div>
  </div>
  )
}

export default MultipleHoverEffects