// import "./App.css";
// import { Router, createBrowserRouter, RouterProvider } from "react-router-dom";
// import Profile from "./Profile";
// import { stateContext } from "./stateContext";

// import React, { useReducer } from "react";
// import { initialstate, statereducer } from "./statereducer";
// import EnterInfo from "./components/EnterInfo";
// import DataDisplay from "./components/DataDisplay";

// const App = () => {
//   const [state,dispatch] = useReducer(statereducer, initialstate)
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <EnterInfo />,
//     },
//     { path: "/chat", 
//     element: <config /> },
//     {
//       path: "/data",
//       element: <DataDisplay />,
//     },
//   ]);

//   return (
// <stateContext.Provider value={{ state, dispatch }}>
//       <RouterProvider router={router} />
//       </stateContext.Provider>
//   );
// };
// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnterInfo from './components/EnterInfo';
import ChatbotComponent from './ChatBot/ChatbotComponent'; // Import the chatbot component
import DataDisplay from './components/DataDisplay';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EnterInfo />} />
                <Route path="/chat" element={<ChatbotComponent />} />
                <Route path="/data" element={<DataDisplay />} />
            </Routes>
        </Router>
    );
}

export default App;

