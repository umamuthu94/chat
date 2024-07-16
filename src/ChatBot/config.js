import { createChatBotMessage } from 'react-chatbot-kit';
import GotItBtn from '../components/GotItBtn';
import OptionsWidget from '../components/OptionsWidget';

const config = {
    botName: 'HappilyEver',
    initialMessages: [createChatBotMessage('Hello, Welcome to Ashabot', {
        widget: "GotItBtn"
    })],
    customComponents: {},
    customStyles: {},
    state: {
        questions: [],
        currentQuestionIndex: 0,
        answers: [],
    },
    widgets: [
        {
            widgetName: "GotItBtn",
            widgetFunc: (props) => {
            console.log(props); return <GotItBtn {...props} /> },
        },
        {
            widgetName: "options",
            widgetFunc: (props) => {
                  console.log(props);
                  return <OptionsWidget {...props} />
          },
        }
    ]
};

export default config;
