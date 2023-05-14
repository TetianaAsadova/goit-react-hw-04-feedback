import React from "react";
import PropTypes from 'prop-types';
import './Counter.css';

const Section = ({ title, children }) => (
    <div>
        <p className="css.feedback__title">{title}</p>
        {children}
    </div>    
)

Section.propTypes = {
    title: PropTypes.string,
}

export default Section;