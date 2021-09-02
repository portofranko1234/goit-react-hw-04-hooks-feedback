import {useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  

 const onLeaveFeedback = (e) => {

        if (e.target.innerHTML === "Good") {
             setGood(good=> good +1);
        }
        if (e.target.innerHTML === "Neutral") {
             setNeutral(neutral=> neutral +1);
         }
        if (e.target.innerHTML === "Bad") {
             setBad(bad=> bad +1);
         }
    }

  function countTotalFeedback () {
        return  neutral + bad + good;
       
    };
    function positivePercentage (){

        
       return   Math.floor(good / countTotalFeedback() * 100) + "%";
         
    };
  
 const options = ['Good', 'Neutral', 'Bad'];
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions   types={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {
            countTotalFeedback() === 0 ? <Notification message="No feedback given" /> :
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={positivePercentage()}
                    />
          }
        </Section>
      </div>
    );
  
}


