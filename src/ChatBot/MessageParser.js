// src/MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  console.log("line 5")
    const parse = (message) => {
        const { state } = children.props;
        console.log("line 8")
        console.log("question length", state.questions.length)
        console.log("line 10")
        if (state.questions.length > 0) {
          console.log("line 11")
          console.log("question_id", state.currentQuestionIndex)
            if (state.questions[state.currentQuestionIndex].question_type === 'Freetext') {
              console.log("line 12")
                actions.handleAnswer(message);
            } else {
              console.log("line 15")
              console.log("question_type", state.questions[state.currentQuestionIndex].question_type)
              console.log("answerlist", state.questions[state.currentQuestionIndex].answerlist) 
                const selectedOption = state.questions[state.currentQuestionIndex].answerlist.find(option => option.answer === message);
                if (selectedOption) {
                    actions.handleAnswer(selectedOption.answer);
                }
            }
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
