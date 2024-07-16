

// import React from 'react';
// import { Chatbot } from 'react-chatbot-kit';
// import config from './config';
// import MessageParser from './MessageParser';
// import ActionProvider from './ActionProvider';
// import 'react-chatbot-kit/build/main.css'; // Import the chat window CSS
// import './ChatbotStyles.css'; // Import custom styles for positioning

// const ChatbotComponent = () => {
//     return (
//         <div className="chatbot-container">
//             <div className="chatbot">
//                 <Chatbot 
//                     config={config}
//                     messageParser={MessageParser}   
//                     actionProvider={ActionProvider}
//                 />
//             </div>
//         </div>
//     );
// };

// export default ChatbotComponent;


// ChatbotComponent.js

import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import 'react-chatbot-kit/build/main.css'; // Import the chat window CSS
import './ChatbotStyles.css'; // Import custom styles for positioning

const ChatbotComponent = () => {
    return (
        <div className="chatbot-container">
            <div className="chatbot">
                <Chatbot 
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </div>
        </div>
    );
};

export default ChatbotComponent;

