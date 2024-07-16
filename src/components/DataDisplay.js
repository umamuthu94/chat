import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import '../CommonStyles.css'; // Import the shared CSS file
import React from 'react'

const DataDisplay = () => {
    const navigate = useNavigate();
    const {name, age} = useSelector((store)=>store.data);
    console.log("name, age", name, age)
    const goToHome = () => {
        navigate('/');
    }
  return (
    <div className="chatbot-container"> {/* Use the same class for consistency */}
    <div className="info">
      <h3>Your name <span className="data">{name}</span> aged <span className="data">{age}</span> has been added to student system</h3>
      <button className="btn exit-btn" onClick={() => goToHome()}>Exit</button>
    </div>
    </div>
  )
}

export default DataDisplay
