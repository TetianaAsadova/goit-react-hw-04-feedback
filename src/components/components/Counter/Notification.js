import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Notification = ({ message }) => (
    <p className='feedback__stat'>{message}</p>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;
