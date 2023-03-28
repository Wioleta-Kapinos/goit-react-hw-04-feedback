import React, { useState } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    if (event.target.textContent === "Good") {
      setGood(good + 1);
    }
    if (event.target.textContent === "Neutral") {
      setNeutral(neutral + 1);
    }
    if (event.target.textContent === "Bad") {
      setBad(bad + 1);
    }
  }

  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good / total) * 100);
    
  return (
    <div className="App">
      <Section title="&#128073; Please leave feedback &#128072;">
        <FeedbackOptions
          onLeaveFeedback = {onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good= {good}
          neutral= {neutral}
          bad= {bad}
          total= {total}
          positiveFeedback= {positiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}