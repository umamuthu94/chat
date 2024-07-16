

import { useNavigate } from 'react-router-dom';
import '../CommonStyles.css'; // Import the shared CSS file

const EnterInfo = () => {
    const navigate = useNavigate();

    const showChatBot = () => {
        navigate('/chat');
    }

    return (
        <div className="chatbot-container">
            <div className='info'>
                <h3>Enter into Student Info System</h3>
                <button className='btn' onClick={showChatBot}>Click here</button>
            </div>
        </div>
    );
}

export default EnterInfo;
