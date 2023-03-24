import React, {useState} from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = ({text}) => {
  const [answer, setAnswer] = useState ("symbolQuestion")
  const handleClick = (type)=>{
    setAnswer(type)
  }
  return (
    <div className="question">
      <QuestionBody 
        iconType= {answer}
        text={text}
      />
      <div className="question__options">
        <Option onSelected={handleClick} type="smileyStrongYes" text="Souhlasím"/>
        <Option onSelected={handleClick} type="smileyYes" text="Spíše souhlasím"/>
        <Option onSelected={handleClick} type="smileyNeutral" text="Nevím"/>
        <Option onSelected={handleClick} type="smileyNo" text="Spíše nesouhlasím"/>
        <Option onSelected={handleClick} type="smileyStrongNo" text="Nesouhlasím"/>
      </div>
    </div>
  );
};

export default Question;
