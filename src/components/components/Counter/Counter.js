import React, { Component } from "react";
// import { NotificationManager } from 'react-notifications';
// import PropTypes from 'prop-types';
import './Counter.css';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';


class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    // addSetState = ({ good, neutral, bad }) => {
    //     console.log(`good`, good);
    //     console.log(`neutral`, neutral);
    //     console.log(`bad`, bad); 

    //     this.setState ({
    //         good: good,
    //         neutral: neutral,
    //         bad: bad,
    //     });
    //     console.log(`stateAdd`, this.state);
    //     return;
    // }

 

    handleGoodButton = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }

    handleNeutralButton = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

    handleBadButton = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }

    countTotalFeedback = (total) => {
        total = (this.state.good + this.state.neutral + this.state.bad);
        return total;
    }

    countPositiveFeedbackPercentage = (positivePercentage) => {
        (this.state.good + this.state.neutral + this.state.bad) === 0 ? positivePercentage = 0 :
        positivePercentage = ((this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad)).toFixed(2);
        return positivePercentage;
    }

    render() {
        let total = 0;
        let positivePercentage = 0;
 
        return (
            <div className="feedback">                
                <Section title="Please leave feedback">

                    {/* <FeedbackOptions
                        // options={['good', 'neutral', 'bad']}
                        // onLeaveFeedback={this.addSetState}/>     */}
                    <FeedbackOptions
                        good={this.handleGoodButton}
                        neutral={this.handleNeutralButton}
                        bad={this.handleBadButton}
                        // options={this.state}
                        // onLeaveFeedback={}
                    />
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback(total)}
                        positivePercentage={this.countPositiveFeedbackPercentage(positivePercentage)}
                    />
                </Section>  
            </div>
        )
    }
}

export default Counter;





