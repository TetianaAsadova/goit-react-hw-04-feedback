import React, { useState } from "react";
// import PropTypes from 'prop-types';
import './Counter.css';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';


export default function Counter() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodButton = () => {
        setGood(prevGood => prevGood + 1);
    }

    const handleNeutralButton = () => {
        setNeutral(prevNeutral => prevNeutral + 1);
    }

    const handleBadButton = () => {
        setBad(prevBad => prevBad + 1);
    }

    const countTotalFeedback = (total) => {
        total = (good + neutral + bad);
        return total;
    }

    const countPositiveFeedbackPercentage = (positivePercentage) => {
        (good + neutral + bad) === 0 ? positivePercentage = 0 :
        positivePercentage = ((good * 100) / (good + neutral + bad)).toFixed(2);
        return positivePercentage;
    }

    let total = 0;
    let positivePercentage = 0;

    return (
        <div className="feedback">                
            <Section title="Please leave feedback">
                <FeedbackOptions
                    good={handleGoodButton}
                    neutral={handleNeutralButton}
                    bad={handleBadButton}
                />
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback(total)}
                    positivePercentage={countPositiveFeedbackPercentage(positivePercentage)}
                />
            </Section>  
        </div>
    )
}






