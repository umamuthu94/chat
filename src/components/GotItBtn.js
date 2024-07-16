import React, { useState, useEffect } from 'react';

const GotItBtn = (props) => {
  const [gotItDone, setGotItDone] = useState(false);
  
  const initialAction = () => {
    props.actions.fetchQuestions();
    document.getElementById("gotitbtn").style.display = "none";
    setGotItDone(true);
  }

  useEffect(() => {
    if (gotItDone) {
      if (props.actions && props.actions.afterGotIt) {
        props.actions.afterGotIt();
      } else {
        console.error("afterGotIt is not defined in props.actions");
      }
    }
  }, [gotItDone, props.actions]);

  return (
    <button id="gotitbtn" className="btn" onClick={initialAction}>
      Got It
    </button>
  );
};

export default GotItBtn;
