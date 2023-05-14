// import { nanoid } from 'nanoid';
import React from "react";
import PropTypes from 'prop-types';
import './Counter.css';


const FeedbackOptions = ({ good, neutral, bad }) => (
    
    <div className="feedback__buttons">
        <button
            type="button"
            className="button"
            onClick={good}
        >Good</button>
        <button
            type="button"
            className="button"
            onClick={neutral}
        >Neutral</button>
        <button
            type="button"
            className="button"
            onClick={bad}
        >Bad</button>
    </div>
)

FeedbackOptions.propTypes = {
    good: PropTypes.any,
    neutral: PropTypes.any,
    bad: PropTypes.any,
}

export default FeedbackOptions;

// class FeedbackOptions extends Component {
//     state = {
//         id: nanoid(),
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     }

    // this.setState({ filter: event.currentTarget.value });
   
    // handleButton = () => {
    //     console.log(`option`, this.option);
    //     this.setState(prevState =>({
    //         [option]: prevState[option] + 1,  
    //     }))
    //     //    return;
    //      console.log(`option`, this.option);
    // }

    //  handleSubmit = () => {
    //     //  console.log(`option`, this.option);
    //     this.props.onLeaveFeedback(this.option);
    // }
          
    // render() {
    //     return (
    //     <div>
    //         <form onSubmit={this.handleSubmit}>
    //             <ul className="feedback__buttons">
    //                 {this.props.options.map(option => (
    //                 <li key={this.state.id}>
                           

                            //<button
    //                         type="button"
    //                         className="button"
    //                         onClick={this.handleButton}
    //                         >{[option]}</button>
    //                 </li>
    //             ))}
    //         </ul>            
    //         </form>
    //     </div>
    //     )
    // }
    
    
    
    //  type="text"
    //                         value={this.state.text}
    //                         onChange={this.handleChange}
    //                         name="name"