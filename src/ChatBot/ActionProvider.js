// import React from 'react';

// const ActionProvider = ({ createChatBotMessage, setState, children }) => {
//     const fetchQuestions = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/api/questions');
//             const questions = await response.json();
//             setState((prev) => ({
//                 ...prev,
//                 questions: questions,
//                 currentQuestionIndex: 0,
//                 answers: [],
//             }));
//             askQuestion(questions[0]);
//         } catch (error) {
//             console.error('Error fetching questions:', error);
//         }
//     };

//     const askQuestion = (question) => {
//         let message;
//         if (question.question_type === 'Freetext') {
//             message = createChatBotMessage(question.question);
//         } else if (question.question_type === 'Multiselect' || question.question_type === 'Radiobutton') {
//             message = createChatBotMessage(question.question, {
//                 widget: "options",
//                 payload: question.answerlist.map((option) => ({
//                     text: option.answer,
//                     value: option.possible_answer_id,
//                 })),
//             });
//         }
//         updateState(message);
//     };

//     const handleAnswer = (answer) => {
//         setState((prev) => {
//             const currentQuestionIndex = prev.currentQuestionIndex;
//             const nextQuestionIndex = currentQuestionIndex + 1;

//             // Ensure currentQuestionIndex is within bounds
//             if (currentQuestionIndex < prev.questions.length) {
//                 // Update answers array with current question's answer
//                 const updatedAnswers = [...prev.answers, { question_id: prev.questions[currentQuestionIndex]?.question_id, user_answers: answer }];

//                 // Check if there's a next question to ask
//                 if (nextQuestionIndex < prev.questions.length) {
//                     const nextQuestion = prev.questions[nextQuestionIndex];
//                     askQuestion(nextQuestion);
//                 } else {
//                     // No more questions, submit answers
//                     console.log(updatedAnswers);
//                     submitAnswers(updatedAnswers);
//                 }

//                 // Return updated state
//                 return {
//                     ...prev,
//                     answers: updatedAnswers,
//                     currentQuestionIndex: nextQuestionIndex,
//                 };
//             }

//             return prev; // No state change if index is out of bounds
//         });
//     };

//     const submitAnswers = async (answers) => {
//         try {
//             console.log("answers in submitAnswers", answers);
//             await fetch('http://localhost:8080/api/answers/batch', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify( answers ),
//             });
//             const message = createChatBotMessage("Your answers have been submitted!");
//             updateState(message);
//         } catch (error) {
//             console.error('Error submitting answers:', error);
//         }
//     };

//     const updateState = (message) => {
//         setState((prevState) => ({
//             ...prevState,
//             messages: [...prevState.messages, message],
//         }));
//     };

//     const afterGotIt = () => {
//         console.log("Got it action completed.");
//     };

//     return (
//         <div>
//             {React.Children.map(children, (child) => {
//                 return React.cloneElement(child, {
//                     actions: {
//                         fetchQuestions,
//                         handleAnswer,
//                         afterGotIt,
//                     },
//                 });
//             })}
//         </div>
//     );
// };

// export default ActionProvider;

import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const fetchQuestions = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/questions');
            const questions = await response.json();
            setState((prev) => ({
                ...prev,
                questions: questions,
                currentQuestionIndex: 0,
                answers: [],
            }));
            askQuestion(questions[0]);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const askQuestion = (question) => {
        let message;
        if (question.question_type === 'Freetext') {
            message = createChatBotMessage(question.question);
        } else if (question.question_type === 'Multiselect' || question.question_type === 'Radiobutton') {
            message = createChatBotMessage(question.question, {
                widget: "options",
                payload: question.answerlist.map((option) => ({
                    text: option.answer,
                    value: option.possible_answer_id,
                })),
            });
        }
        updateState(message);
    };

    const handleAnswer = (answer) => {
        setState((prev) => {
            const currentQuestionIndex = prev.currentQuestionIndex;
            const nextQuestionIndex = currentQuestionIndex + 1;

            if (currentQuestionIndex < prev.questions.length) {
                const updatedAnswers = [...prev.answers, { question_id: prev.questions[currentQuestionIndex]?.question_id, user_answers: answer }];

                if (nextQuestionIndex < prev.questions.length) {
                    const nextQuestion = prev.questions[nextQuestionIndex];
                    askQuestion(nextQuestion);
                } else {
                    console.log(nextQuestionIndex);
                    console.log(prev.questions.length)
                    submitAnswers(updatedAnswers); // Call submitAnswers directly with updated answers
                }

                return {
                    ...prev,
                    answers: updatedAnswers,
                    currentQuestionIndex: nextQuestionIndex,
                };
            }

            return prev; // No state change if index is out of bounds
        });
    };

    const submitAnswers = async (answers) => {
        try {
            console.log("answers in submitAnswers", answers);
            await fetch('http://localhost:8080/api/answers/batch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(answers),
            });
            const message = createChatBotMessage("Your answers have been submitted!");
            updateState(message);
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    const updateState = (message) => {
        setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };

    const afterGotIt = () => {
        console.log("Got it action completed.");
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        fetchQuestions,
                        handleAnswer,
                        afterGotIt,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;

