import React from 'react';

// const OptionsWidget = ({ options = [], actions = {} }) => {
//     console.log("options", options);
//     console.log("actions", actions);

//     return (
//         <div>
//             {options.map((option) => (
//                 <button key={option.value} onClick={() => actions.handleAnswer(option.text)}>
//                     {option.text}
//                 </button>
//             ))}
//         </div>
//     );
// };

const OptionsWidget = ({payload, actions}) => {
console.log("payload", payload)
console.log("actions", actions)
    return (
        <div>
            {payload.map((option) => (
                <button className="btn" key={option.value} onClick={() => actions.handleAnswer(option.text)}>
                    {option.text}
                </button>
            ))}
        </div>
    );
};

export default OptionsWidget;
