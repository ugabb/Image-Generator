import { Link } from "react-router-dom";
import './Home.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Home = () => {
  return (
    <div className="home-container">
      <div className="title">
        <h3>Image Generator</h3>
        <p>Write anything and receive something awesome!</p>
      </div>
      <div className="title">
        <p>Create!</p>
        <Link to={'create'}>
        <AiOutlineArrowRight />
        </Link>
        
      </div>
    </div>
  )
}

export default Home